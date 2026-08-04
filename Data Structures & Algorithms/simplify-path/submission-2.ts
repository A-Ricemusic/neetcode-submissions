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

            const subString: string = path.substring(i, j);

            i = j;
            if (subString === ".." && stack.length > 0) {
                stack.pop();
            } else if (subString !== ".." && subString !== ".") {
                stack.push(subString);
            }
        }

        return "/" + stack.join("/");
    }
}
