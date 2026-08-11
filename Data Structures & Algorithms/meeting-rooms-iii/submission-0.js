class Solution {
    /**
     * @param {number} n
     * @param {number[][]} meetings
     * @return {number}
     * 
     * meetings=[[0, 10], [1, 5], [2, 7], [3, 4]]
     */
    mostBooked(n, meetings) {
        meetings.sort((a,b) => a[0] - b[0]);

        const available= new PriorityQueue((a,b) => a - b);
        for (let i = 0; i < n; i++) {
            available.enqueue(i);
        };
        const used = new PriorityQueue((a,b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
        const count = new Array(n).fill(0);

        for (const [start,end] of meetings) {
            while (!used.isEmpty() && used.front()[0] <= start) {
                const [endTime,room] = used.dequeue();
                available.enqueue(room)
            }
            let room;
            let newEnd = end;
            if (available.isEmpty()) {
                const [endTime,usedRoom] = used.dequeue();
                newEnd = endTime + (end - start)
                available.enqueue(usedRoom)
            }
            room = available.dequeue();
            used.enqueue([newEnd, room]);
            count[room]++;
        }

        return count.indexOf(Math.max(...count))


    }
}
