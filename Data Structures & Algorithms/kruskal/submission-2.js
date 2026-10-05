/**
 * const PriorityQueue = require('priority-queue-js');
 */

class UnionFind {
    constructor(n) {
        this.par = new Array(n).fill(0);
        this.rank = new Array(n).fill(0);
        this.connected = n;
        for (let i = 0; i < n; i++) {
            this.par[i] = i;
        }
    }

    find(x) {
        let p = this.par[x];
        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];
            p = this.par[p];
        }
        return p;
    }

    union(x,y) {
        const p1 = this.find(x);
        const p2 = this.find(y);
        if (p1 === p2) return false;
        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1;
            this.rank[p1]++;
        } else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
            this.rank[p2]++;
        } else {
            this.par[p2] = p1;
            this.rank[p1]++;
        }
        this.connected--;
        return true;
    }
}

class Solution {
    /**
     * @param {number}
     * @param {Array<Array<number>>}
     * @returns {number}
     */
    minimumSpanningTree(n, edges) {
        const unionFind = new UnionFind(n);
        const heap = new PriorityQueue((a,b) => a[0] - b[0]) // [w,src,dst]
        for (const [u,v,w] of edges) {
            heap.enqueue([w,u,v]);
        };

        let res = 0;
        while (!heap.isEmpty()) {
            const [w,u,v] = heap.dequeue();
            if (unionFind.union(u,v)) {
                res += w;
            }
        }

        return unionFind.connected === 1? res : -1;
    }
}
