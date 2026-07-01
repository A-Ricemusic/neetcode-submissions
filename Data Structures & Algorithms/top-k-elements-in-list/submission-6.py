class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        myDict = Counter(nums)
        my_items = list(myDict.items())
        my_items.sort(key=lambda x: x[1], reverse=True)
        result = []
        for i in range(k):
            result.append(my_items[i][0])
        return result

        