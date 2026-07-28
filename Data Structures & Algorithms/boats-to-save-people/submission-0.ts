class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     * 
     * [1,2,4,5] L = 6
     * 
     */
    numRescueBoats(people: number[], limit: number): number {
        let l: number = 0
        let r: number = people.length - 1;
        let res: number = 0;
        people.sort((a,b) => a - b);
        while (l < r) {
            const total = people[l] + people[r]
            console.log("left", l, "right", r,"total",total)
            if (total <= limit) {
                l++;
                r--;
            } else {
                r--;
            }
            res++;
        }

        if (l === r) {
            res++;
        }

        return res
    }
}
