

class Graph {
    constructor() {
        this.map = {};
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if (!Object.hasOwn(this.map,src)) {
            this.map[src] = new Set()
        };

        if (!Object.hasOwn(this.map,dst)) {
            this.map[dst] = new Set()
        };
        this.map[src].add(dst);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if (!Object.hasOwn(this.map,src) 
        || !Object.hasOwn(this.map,dst) 
        || !this.map[src].has(dst)) return false;
        this.map[src].delete(dst);
        return true;
    
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        const q = [src];
        let head = 0;
        const visited = new Set();
        while (q.length - head > 0) {
            const n = q[head++]
            if (visited.has(n)) continue;
            visited.add(n);
            if (n === dst) return true;
            for (const child of this.map[n]) {
                q.push(child)
            }
        }

        return false;
    }

}
