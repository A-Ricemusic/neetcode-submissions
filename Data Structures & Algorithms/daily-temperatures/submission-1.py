class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        result = [0] * len(temperatures)
        stack = []

        for idx, element in enumerate(temperatures):
            while stack and element > stack[-1][0]:
                stackT,stackIdx = stack.pop()
                result[stackIdx] = (idx - stackIdx)
            stack.append([element,idx])
        return result

        