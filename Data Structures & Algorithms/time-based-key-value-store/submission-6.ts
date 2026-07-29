class TimeMap {
    keyStore: Map<string, [string, number][]>;
    constructor() {
        this.keyStore = new Map<string, [string, number][]>();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key: string, value: string, timestamp: number): void {
        const arr: [string,number][] | null = this.keyStore.get(key);
        if (arr) {
            arr.push([value,timestamp])
        } else {
            this.keyStore.set(key, [[value,timestamp]])
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key: string, timestamp: number): string {
        const arr: [string, number][] = this.keyStore.get(key);
        if (!arr || timestamp < arr[0][1]) return "";
        let l: number = 0;
        let r: number = arr.length - 1;
        while (l <= r) {
            const m: number = Math.floor(l + (r - l) / 2);
            const num: number = arr[m][1];
            if (num === timestamp) {
                return arr[m][0];
            } else if (num > timestamp) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }
        return arr[r][0];
    }
}
