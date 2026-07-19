"""
asteroids = [-2,2,1,4,-5,-1]

[-2,]
"""


class Solution:
    def asteroidCollision(self, asteroids: List[int]) -> List[int]:
        stack = []

        for ast in asteroids:
            if len(stack) == 0:
                stack.append(ast)
            elif ast < 0:
                if stack[-1] < 0:
                    stack.append(ast)
                elif stack[-1] == abs(ast):
                    stack.pop()
                else:
                    while len(stack) > 0 and stack[-1] > 0 and stack[-1] < abs(ast):
                        stack.pop()
                    if len(stack) == 0:
                        stack.append(ast)
                    elif stack[-1] < 0:
                        stack.append(ast)
                    elif abs(stack[-1]) == abs(ast):
                        stack.pop()
            else:
                stack.append(ast)
        return stack


        