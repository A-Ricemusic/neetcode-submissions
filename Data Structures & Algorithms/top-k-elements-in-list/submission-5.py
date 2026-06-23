class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freqTable = Counter(nums)
        item_list = list(freqTable.items())
        item_list.sort(key= lambda x : x[1], reverse = True)
        result = []
        for i in range(k):
            result.append(item_list[i][0])
        return result
        