class Solution:
    def getSum(self, a: int, b: int) -> int:
        carry = 0
        res = []

        for i in range(32):
            isAOne = False
            isBOne = False

            if (a >> i) & 1:
                isAOne = True
            if (b >> i) & 1:
                isBOne = True

            if isAOne and isBOne:
                if carry > 0:      
                    res.append("1")  
                else:               
                    carry += 1
                    res.append("0")
            elif isAOne or isBOne:
                if carry > 0:
                    res.append("0")
                else:
                    res.append("1")
            else:
                if carry > 0:
                    carry -= 1
                    res.append("1")
                else:
                    res.append("0")

        res.reverse()
        result = int("".join(res), 2)  
        if result & 0x80000000:       
            result = result - (1 << 32)
        return result