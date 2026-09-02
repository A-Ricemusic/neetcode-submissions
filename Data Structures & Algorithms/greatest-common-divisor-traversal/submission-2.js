class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canTraverseAllPairs(nums) {
        const n = nums.length;
        const par = new Array(n).fill(0);
        const rank = new Array(n).fill(0);
        let connected = n

        for (let i = 0; i < n; i++) {
            par[i] = i;
        }

        const getGdc = (x,y) => {
            if (y < x) {
                [x,y] = [y,x];
            };
            for (let i = x; i >= 1; i--) {
                if (y % i === 0 && x % i === 0) {
                    return i;
                }
            }
        }

        const find = (x) => {
            let p = par[x]
            while (p !== par[p]) {
                par[p] = par[par[p]];
                p = par[p]
            }
            return p;
        }
    
        const union = (x,y) => {
            const p1 = find(x);
            const p2 = find(y);
            const gcd = getGdc(nums[x],nums[y]);
            if (p1 === p2 || gcd === 1) return false;
            if (rank[p1] < rank[p2]) {
                par[p1] = p2
            } else if (rank[p1] > rank[p2]) {
                par[p2] = p1
            } else {
                par[p1] = p2
                rank[p2]++;
            }
            connected--;
            return true;
        }

        for (let i = 0; i < n - 1; i++) {
           for (let j = i + 1; j < n; j++) {
            union(i,j)
           }
        }
        
        return connected === 1;


    }
}
