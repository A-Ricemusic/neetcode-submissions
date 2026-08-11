class Solution {
    /**
     * @param {number} n
     * @param {number[][]} meetings
     * @return {number}
     */
    mostBooked(n, meetings) {
        meetings.sort((a,b) => a[0] - b[0])
        const av = new PriorityQueue((a,b) => a - b)
        for (let i = 0; i < n; i++) {
            av.enqueue(i)
        }
        const used = new PriorityQueue((a,b) => a[0]===b[0]? a[1] - b[1] : a[0] - b[0])
        const count = new Array(n).fill(0)

        for (const [start,end] of meetings) {
            while (!used.isEmpty() && used.front()[0] <= start) {
                const room = used.dequeue()[1]
                av.enqueue(room);
            }

            let newEnd = end
            let room;
            //[20,0], [10,1], [5,2]
            //[5,2]
            while (av.isEmpty()) {
                const [endTime,usedRoom] = used.dequeue()
                av.enqueue(usedRoom)
                newEnd = endTime + (end - start)

            }
            room = av.dequeue();
            used.enqueue([newEnd, room])
            count[room]++; 
        }

        return count.indexOf(Math.max(...count))
    }
}
