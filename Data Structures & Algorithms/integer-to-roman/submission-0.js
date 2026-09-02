class Solution {
    /**
     * @param {number} num
     * @return {string}
     */
    intToRoman(num) {
        const res = []

        if (num % 1000 !== num) {
            let amt = Math.floor(num / 1000)
            for (let i = 0; i < amt; i++) {
                res.push("M")
            }
            num = num % 1000
        }

        if (num % 900 !== num) {
            let amt = Math.floor(num / 900)
            for (let i = 0; i < amt; i++) {
                res.push("CM")
            }
            num = num % 900
        }

        if (num % 500 !== num) {
            let amt = Math.floor(num / 500)
            for (let i = 0; i < amt; i++) {
                res.push("D")
            }
            num = num % 500
        }

        if (num % 400 !== num) {
            let amt = Math.floor(num / 400)
            for (let i = 0; i < amt; i++) {
                res.push("CD")
            }
            num = num % 400
        }

        if (num % 100 !== num) {
            let amt = Math.floor(num / 100)
            for (let i = 0; i < amt; i++) {
                res.push("C")
            }
            num = num % 100
        }


        if (num % 90 !== num) {
            let amt = Math.floor(num / 90)
            for (let i = 0; i < amt; i++) {
                res.push("XC")
            }
            num = num % 90
        }


        if (num % 50 !== num) {
            let amt = Math.floor(num / 50)
            for (let i = 0; i < amt; i++) {
                res.push("L")
            }
            num = num % 50
        }

        if (num % 40 !== num) {
            let amt = Math.floor(num / 40)
            for (let i = 0; i < amt; i++) {
                res.push("XL")
            }
            num = num % 40
        }

        if (num % 10 !== num) {
            let amt = Math.floor(num / 10)
            for (let i = 0; i < amt; i++) {
                res.push("X")
            }
            num = num % 10
        }


        if (num % 9 !== num) {
            let amt = Math.floor(num / 9)
            for (let i = 0; i < amt; i++) {
                res.push("IX")
            }
            num = num % 9
        }


            if (num % 5 !== num) {
            let amt = Math.floor(num / 5)
            for (let i = 0; i < amt; i++) {
                res.push("V")
            }
            num = num % 5
        }


        if (num % 4 !== num) {
            let amt = Math.floor(num / 4)
            for (let i = 0; i < amt; i++) {
                res.push("IV")
            }
            num = num % 4
        }


        if (num % 1 !== num) {
            let amt = Math.floor(num / 1)
            for (let i = 0; i < amt; i++) {
                res.push("I")
            }
            num = num % 1
        }


        return res.join("")                                     
        
    }
}
