class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     * 
     * [-3, 0, 1,2,3,3] k = 3
     * 
     * nums = [-1,-1,-1,1,1,1] k = 2
     * 
     */
    fourSum(nums: number[], target: number): number[][] {
        if (nums.length < 4) return [];
        let res: number[][] = []
        nums.sort((a,b) => a - b);
        let hashSet: Set<string> = new Set<string>();
        for (let i = 0; i < nums.length - 2; i++) {
            for (let j: number = i + 1;j < nums.length - 1; j++) {
                let l: number = j + 1;
                let r: number = nums.length - 1

                while (l < r) {
                    let currSum: number = nums[i] + nums[j] + nums[l] + nums[r]
                    if (currSum === target) {
                        let key: string[] = [String(nums[i]), String(nums[j]), String(nums[l]), String(nums[r])]
                        if (!hashSet.has(key.sort().join())) {
                            res.push([nums[i], nums[j], nums[l], nums[r]]);
                            hashSet.add(key.sort().join())
                        }
                        l++
                    } else if (currSum < target) {
                        l++
                    } else {
                        r--
                    }
                }
                
            }
        }

        return res;

        
    }
}
