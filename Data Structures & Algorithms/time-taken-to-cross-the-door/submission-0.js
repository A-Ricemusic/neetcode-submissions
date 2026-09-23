class Solution {
    /**
     * @param {number[]} arrival
     * @param {number[]} state
     * @return {number[]}
     * 

     */
    timeTaken(arrival, state) {
        const enter = new Queue();
        const exit = new Queue();
        let i = 0;
        let lastState = 1; //enter: 0, exit: 1
        let time = 0;
        const n = arrival.length 
        const res = new Array(arrival.length).fill(0);


        while (i < n || enter.size() > 0 || exit.size() > 0) {
            while (i < n && arrival[i] === time) {
                if (state[i] === 1) {
                    exit.enqueue(i)
                } else {
                    enter.enqueue(i)
                }
                i++;
            }
            let usedDoor = false;
            if (lastState === 1) {
                if (exit.size() > 0) {
                    const idx = exit.dequeue();
                    res[idx] = time;
                    usedDoor = true
                } else if (enter.size() > 0) {
                    const idx = enter.dequeue();
                    res[idx] = time;
                    lastState = 0;
                    usedDoor = true
                }
            } else {
                if (enter.size() > 0) {
                    const idx = enter.dequeue();
                    res[idx] = time;
                     usedDoor = true
                } else if (exit.size() > 0){
                    const idx = exit.dequeue();
                    res[idx] = time;
                    lastState = 1
                    usedDoor = true
                }
            }
            if (!usedDoor) {
                lastState = 1
            }
            time++;
        }

        return res;
    }
}
