class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {

        let res: number[][] = [];
        let hashSet = new Set<string>();
        candidates.sort((a, b) => a - b);

        const dfs = (idx, curr: number[], total: number): void => {

            let key: string = curr.join(',')

            if (idx === candidates.length && total === target) {
                if (!hashSet.has(key)) {
                    res.push([...curr]);
                    hashSet.add(key);
                }
                return;
            }

            if (total > target || idx === candidates.length) {
                return
            }

            let next: number = idx

            while (next < candidates.length && candidates[idx] === candidates[next] ) {
                next++;
            } 
            dfs(next, curr, total)
            curr.push(candidates[idx])
            dfs(idx + 1, curr, total + candidates[idx])
            curr.pop()
        }

        dfs(0,[], 0)

        return res
    }
}
