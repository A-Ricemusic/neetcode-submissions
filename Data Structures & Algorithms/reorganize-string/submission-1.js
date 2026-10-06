class Solution {
    /**
     * @param {string} s
     * @return {string}
     * 
     * example 2:
     * s = "ccccd"
     * {
     * c: 3;
     * d: 1;
     * }
     * res = "cdc"
     * pev = [1,c]
     * []
     * curr = [2,c] 
     * 
     * 
     * 
     * example 1:
     * 
     *  s = "axyy"
     * {
     * y:2
     * a:1
     * x: 1
     * }
     * prev = []
     * res ="yax"
     * [[1,y]]
     * curr = 
     */
    reorganizeString(s) {
        let res = [];
        const map = new Map();

        for (const char of s) {
            map.set(char, (map.get(char) || 0) + 1);
        };

        const heap = new PriorityQueue((a,b) => b[0] - a[0]);

        for (const [char,freq] of map.entries()) {
            heap.enqueue([freq,char]);
        };

        let prev = [];
        while (!heap.isEmpty()) {
            const [freq,char] = heap.dequeue();
            res.push(char);

            if (prev.length === 2) {
                heap.enqueue([prev[0], prev[1]]);
            };

            if (freq - 1 <= 0) {
                prev = [];
            } else {
                prev = [freq - 1, char];
            };
        };

        return res.length < s.length? "" : res.join("");
    }
}
