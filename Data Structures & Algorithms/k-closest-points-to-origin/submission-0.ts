class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     * 
     * heap: [distance, index]
     * [10,0], [12,1], [13,2]
     * 
     * [-13,2], [-12,1], [-10,0]
     */
    kClosest(points: number[][], k: number): number[][] {
        let heap = new MinPriorityQueue((x) => x[0])
        for (let i = 0; i < points.length; i++) {
            let x: number = points[i][0];
            let y: number = points[i][1];
            let distance: number = Math.sqrt(((x * x) + (y * y)))
            heap.enqueue([distance * -1, i])
            if (heap.size() > k) {
                heap.dequeue()
            }
        }

        let res: number[][] = []
        let size: number = heap.size()

        for (let i = 0; i < size; i++) {
            let node: number[] = heap.dequeue();
            let idx: number = node[1];
            res.push(points[idx])
        }

        return res
    }
}
