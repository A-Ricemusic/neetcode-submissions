class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const q = new Queue();
        sandwiches.reverse();
        let onesCount = 0
        let zeroCount = 0
        for (const student of students) {
            q.enqueue(student);
            if (student === 1) {
                onesCount++;
            } else {
                zeroCount++;
            }
        }

        while (sandwiches.length > 0 && q.size() > 0) {
            const sandwich = sandwiches.at(-1);
            const pref = q.dequeue();
            if (pref === sandwich) {
                sandwiches.pop();
                if (pref === 1) {
                    onesCount--;
                } else {
                    zeroCount--;
                }
            }  else {
                q.enqueue(pref);
                if (sandwich === 0 && zeroCount === 0) break;
                if (sandwich === 1 && onesCount === 0) break;
            }
        }

        return q.size();

    }
}
