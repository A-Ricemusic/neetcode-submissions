class StockSpanner {
    stocks: number[][];
    constructor() {
        this.stocks = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price: number): number {
        let span: number = 1;
        while (this.stocks.length > 0 && price >= this.stocks[this.stocks.length - 1][0]) {
            span += this.stocks.pop()[1]
        }

        this.stocks.push([price, span])
        return span
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
