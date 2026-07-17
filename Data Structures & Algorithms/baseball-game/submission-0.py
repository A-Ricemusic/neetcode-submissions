class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []

        for op in operations:
            if op == "+":
                if len(stack) >= 2:
                    newScore = stack[-1] + stack[-2]
                    stack.append(newScore)
            elif op == "D":
                if len(stack) >= 1:
                    newScore = stack[-1] * 2
                    stack.append(newScore)
            elif op == "C":
                if len(stack) >= 1:
                    stack.pop()
            else:
                stack.append(int(op))
        
        return sum(stack)
        