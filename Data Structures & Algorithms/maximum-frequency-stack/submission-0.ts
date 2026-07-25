class FreqStack {
    stack:number[];
    myDict: Record<number, number>

    constructor() {
        this.stack = []
        this.myDict = {}
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val)
        this.myDict[val] = (this.myDict[val] || 0) + 1
    }

    /**
     * @return {number}
     */
    pop(): number {
        const arr: [string,number][] = Object.entries(this.myDict).sort((a,b) => b[1] - a[1]);
        let mySet = new Set<number>();
        const maxNumber: number = parseInt(arr[0][0]);
        const maxCount: number = arr[0][1];
        let res: number = maxNumber
        mySet.add(maxNumber);

        for (let [num,cnt] of arr) {
            if (cnt === maxCount) {
                const newNum: number = parseInt(num)
                mySet.add(newNum)
            }
        }

        for (let i = this.stack.length - 1; i >= 0; i--) {
            if (mySet.has(this.stack[i])) {
                res = this.stack[i];
                this.stack = this.stack.filter((_,index) => index !== i);
                this.myDict[res] = this.myDict[res] - 1;
                break;
            }
        }


        return res
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
