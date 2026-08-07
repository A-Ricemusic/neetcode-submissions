class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates: number[], target: number): number[][] {
        const res: number[][] = [];
        candidates.sort((a, b) => a - b);

        const dfs = (i: number, curr: number[], sum: number) => {
            if (sum === target) {
                res.push([...curr]);
                return;
            }
            if (sum > target || i >= candidates.length) return;

            // Include candidates[i]
            curr.push(candidates[i]);
            dfs(i + 1, curr, sum + candidates[i]);
            curr.pop();

            // Skip duplicates before excluding candidates[i]
            while (
                i + 1 < candidates.length &&
                candidates[i + 1] === candidates[i]
            ) {
                i++;
            }
            dfs(i + 1, curr, sum);
        };

        dfs(0, [], 0);
        return res;
    }
}
