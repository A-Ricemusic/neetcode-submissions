class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []

        for op in operations:
            if op == "+":
                newScore = stack[-1] + stack[-2]
                stack.append(newScore)
            elif op == "D":
                newScore = stack[-1] * 2
                stack.append(newScore)
            elif op == "C":
                stack.pop()
            else:
                stack.append(int(op))
        
        return sum(stack)
        