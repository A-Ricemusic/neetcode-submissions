class Solution {
    /**
     * @param {number[]} pid
     * @param {number[]} ppid
     * @param {number} kill
     * @return {number[]}
     * n: number of nodes that are childrn of kill and kill itself(in
     * this worst case this is the entire tree)
     * 
     * time: o(n)
     * space: o(n)
     * 
     * pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5
     */
    killProcess(pid, ppid, kill) {
        const adj = new Map();
        adj.set(0, []);
        for (const num of pid) {
            adj.set(num, []);
        };
        for (let i = 0; i < ppid.length; i++) {
            const num = ppid[i];
            adj.get(num).push(pid[i]);
        };
        const q = [];
        let head = 0;
        q.push(kill);
        const res = [];

        while (q.length - head > 0) {
            const node = q[head++];
            res.push(node)
            for (const num of adj.get(node)) {
                q.push(num)
            }
        }
        return res;
    }
}
