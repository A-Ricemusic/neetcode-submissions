class UnionFind {
    constructor(n) {
        this.par = new Array(n).fill(0);
        this.rank = new Array(n).fill(0);
        this.size = n;
        for (let i = 0; i < n; i++) {
            this.par[i] = i
        }
    }

    find(x) {
        let p = this.par[x]
        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]]
            p = this.par[p]
        }
        return p;
    }

    union(x,y) {
        const p1 = this.find(x);
        const p2 = this.find(y);
        if (p1 === p2) return false;
        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
        } else if (this.rank[p2] > this.rank[p1]) {
            this.par[p1] = p2;
        } else {
            this.par[p2] = p1;
            this.rank[p1]++;
        }
        this.size--;
        return true
    }
}




class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canTraverseAllPairs(nums) {
        const n = nums.length;
        const uf = new UnionFind(n);
        const factorIndex = new Map();
        for (let i = 0; i < n; i++) {
            let num = nums[i];
            let f = 2;
            while (f * f <= num) {
                if (num % f === 0) {
                    if (factorIndex.has(f)) {
                        uf.union(i, factorIndex.get(f))
                    } else {
                        factorIndex.set(f, i);
                    }
                }
                while (num % f === 0) {
                    num = Math.floor(num / f);
                }
                f++;;
            }
            if (num > 1) {
                if (factorIndex.has(num)) {
                    uf.union(i, factorIndex.get(num))
                } else {
                    factorIndex.set(num, i);
                }
            }
        }

        return uf.size === 1

    }
}
