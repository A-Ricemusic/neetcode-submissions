class UnionFind {
    /**
     * @param {number} n
     */
    par: Record<number, number>;
    rank: Record<number, number>;
    connectedSegments: number;
    constructor(n: number) {
        this.par = {}
        this.rank = {}
        for (let i = 0; i < n; i++) {
            this.par[i] = i
            this.rank[i] = 1
        }
        this.connectedSegments = n;
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x: number): number {
        let p: number = this.par[x];
        while (p !== this.par[p]) {
            this.par[p] = this.par[this.par[p]];
            p = this.par[p]
        }
        return p
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x: number, y: number): boolean {
        const p1: number = this.find(x);
        const p2: number = this.find(y);

        if (p1 === p2) return false;

        if (this.rank[p1] > this.rank[p2]) {
            this.par[p2] = p1
        } else if (this.rank[p1] < this.rank[p2]) {
            this.par[p1] = p2;
        } else {
            this.par[p1] = p2;
            this.rank[p2]++
        }

        this.connectedSegments--;
        return true;

    }

    /**
     * @return {number}
     */
    getNumComponents(): number {
        return this.connectedSegments;
    }
}
