class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        carArray = []
        stack = []
        for i in range(len(position)):
            carArray.append([position[i],speed[i]])
        carArray.sort(key=lambda x: x[0])
        for i in range(len(carArray) - 1,-1,-1):
            if len(stack) == 0:
                stack.append(carArray[i])
            else:
                lastCar = stack[-1]
                currentCar = carArray[i]
                lastCarTime = (target - lastCar[0]) / lastCar[1]
                currentCarTime = (target - currentCar[0]) / currentCar[1]
                if currentCarTime > lastCarTime:
                    stack.append(carArray[i])
        return len(stack)

        