class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for ast in asteroids:
            if ast < 0:
                if len(stack) == 0 or stack[-1] < 0:
                    stack.append(ast)
                elif stack[-1] == abs(ast):
                    stack.pop()
                else:
                    while len(stack) > 0 and stack[-1] > 0 and stack[-1] < abs(ast):
                        stack.pop()
                    if len(stack) == 0 or stack[-1] < 0:
                        stack.append(ast)
                    elif abs(stack[-1]) == abs(ast):
                        stack.pop()
            else:
                stack.append(ast)
        return stack


        