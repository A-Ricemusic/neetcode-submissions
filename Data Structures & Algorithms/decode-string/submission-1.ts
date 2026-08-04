class Solution {
    /**
     * @param {string} s
     * @return {string}
     * 
     *  s = "2[a3[b]]c"
     * 
     * res = [2,[,a,bbb]
     * 
     * 
     * 
     * 
     * 
     * did we it a closing bracket
     * {
     *  1.) create new array
     *  2.) we add to that array by popping stack until we hit a losing bracket
     *  3.) we reverse the array
     *  4. we join the array and replicate by the number 
     *  5.) we add back to stack 
     *  
     * 
     * } else {
     * add to res
     * }
     * 
     */
    decodeString(s: string): string {
        const stack: string[] = [];
        const numSet: Set<string> = new Set<string>()
        numSet.add("0");
        numSet.add("1");
        numSet.add("2");
        numSet.add("3");
        numSet.add("4");
        numSet.add("5");
        numSet.add("6");
        numSet.add("7");
        numSet.add("8");
        numSet.add("9");

        for (const char of s) {
            if (char === "]") {
                const arr: string[] = [];
                while (stack[stack.length - 1] !== "[") {
                    arr.push(stack.pop())
                }
                stack.pop()
                const numArray: string[] = [];
                while (stack.length > 0 && numSet.has(stack[stack.length - 1])) {
                    numArray.push(stack.pop())
                }
                const num: number = parseInt(numArray.reverse().join(''))
                const newString: string = arr.reverse().join('');
                let newString2: string = "";

                for (let i = 0; i < num; i++) {
                    newString2 += newString
                }
                stack.push(newString2)

            } else {
                stack.push(char)
            }
        }

        return stack.join('')

    }
}
