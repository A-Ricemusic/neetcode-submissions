class Solution {
    /**
     * @param {string} path
     * @return {string}
     * "/..//_home/./b/..///"
     * []
     * 
     * 
     */
    simplifyPath(path: string): string {
        const stack: string[] = [];
        let i: number = 0;
        let j: number = 0;

        while (j < path.length) {
            while (j < path.length && path[j] === "/") {
                j++;
            }
            if (j >= path.length) {
                break;
            }

            i = j;

            while (j < path.length && path[j] !== "/") {
                j++;
            }
              if (j >= path.length) {
                break;
            }
            const subString: string = path.substring(i,j)
            if (subString === ".") {
                i = j;
                continue;
            } else if (subString === "..") {
                if (stack.length > 0) {
                    stack.pop()
                }
                i = j;
            } else {
                stack.push(subString)
                i = j;
            }
        }

        if (path[i] !== "/") {
            const subString: string = path.substring(i,j);
            if (subString === "..") {
                stack.pop()
            } else if (subString !== ".") {
                stack.push(subString)
            } 
        }

        return "/" + stack.join("/");
        
    }
}
