class UnionFind {
    /**
     * @param {number} n
     */
    constructor(n) {
        this.par = new Map()
        this.rank = new Map()
        this.numComponents = n
        for (let i = 0; i < n; i++) {
            this.par.set(i,i)
            this.rank.set(i,0)
        }
    }

    /**
     * @param {number} x
     * @return {number}
     */
    find(x) {
        let p = this.par.get(x)

        while (p !== this.par.get(p)) {
            this.par.set(p, this.par.get(this.par.get(p)))
            p = this.par.get(p);
        }
        return p;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    isSameComponent(x, y) {
        return this.find(x) === this.find(y)
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {boolean}
     */
    union(x, y) {
        let x1 = this.find(x)
        let y1 = this.find(y)
        if (x1 === y1) return false;

        if (this.rank.get(x1) > this.rank.get(y1)) {
            this.par.set(y1,x1)
        } else if (this.rank.get(x1) < this.rank.get(y1)) {
            this.par.set(x1, y1)
        } else {
            this.par.set(x1, y1)
            this.rank.set(y1, this.rank.get(y1) + 1)
        }
        this.numComponents--;
        return true;
    }

    /**
     * @return {number}
     */
    getNumComponents() {
        return this.numComponents;
    }
}
