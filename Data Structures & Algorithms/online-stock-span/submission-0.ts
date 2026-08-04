class StockSpanner {
    stocks: number[];
    constructor() {
        this.stocks = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        let count: number = 0
        this.stocks.push(price)
        for (let i = this.stocks.length - 1; i >= 0; i--) {
            if (this.stocks[i] <= price) {
                count++;
            } else {
                break
            }
        }
        

        return count
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
