class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.par = new Array(n).fill(0);
        this.rank = new Array(n).fill(0);
        this.connected = n;
        for (let i = 0; i < n; i++) {
            this.par[i] = i;
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let p = this.par[x];

        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];
            p = this.par[p];
        }
        return p;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        let p1 = this.find(x);
        let p2 = this.find(y);
        if (p1 === p2) return false;
        if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = this.par[p2];
        } else if (this.rank[p2] < this.rank[p1]) {
            this.par[p2] = this.par[1];
        } else {
            this.par[p2] = this.par[p1];
            this.rank[p1]++;
        }
        this.connected--;
        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.connected
    }
}
