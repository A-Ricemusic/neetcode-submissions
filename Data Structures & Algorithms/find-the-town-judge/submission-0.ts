class Solution {
    /**
     * @param {number} n
     * @param {number[][]} trust
     * @return {number}
     * 
     * 
     */
    findJudge(n: number, trust: number[][]): number {
        // case 1: [set [2],set [2],set [],set [2]]
        // case 2: [[3],[3],[1,2]]

        let adjList: Set<number>[] = Array.from({length: n}, () => new Set<number>() )
        console.log(adjList)

        for (const t of trust) {
            adjList[t[0] - 1].add(t[1] - 1)
        }

        let guess: number = -1;

        for (let i = 0; i < n; i++) {
            if (adjList[i].size === 0) {
                guess = i
            }
        }

        if (guess === -1) {
            return -1
        }

        for (let i = 0; i < n; i++) {
            if (i === guess) {
                continue
            }

            if (!adjList[i].has(guess)) {
                return -1
            }
        }
        return guess + 1

    }
}
