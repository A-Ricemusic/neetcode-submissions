class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let arr = [0,0];
        let res = sandwiches.length;
        for (const std of students) {
            arr[std]++;
        }

        for (const sdw of sandwiches) {
            if (arr[sdw] > 0) {
                arr[sdw]--;
                res--;
            } else {
                break;
            }
        }

        return res;

    }
}
