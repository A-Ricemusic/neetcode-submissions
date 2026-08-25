class Solution {
    /**
     * @param {string[]} strings
     * @return {string[][]}
     * 
     * {
     *  score: index
     * 
     * 
     * }
     */
    groupStrings(strings) {
        const hashMap = new Map()
        for (const str of strings) {
            if (str.length === 1) {
                if (!hashMap.has("-1")) {
                    hashMap.set("-1", [])
                }
                hashMap.get("-1").push(str)
                continue;
            }
            const key = [];
            for (let i = 1; i < str.length; i++) {
                const dist = (str[i].charCodeAt(0) - str[i - 1].charCodeAt(0) + 26) % 26;
                key.push(String(dist));
            }
            const finalKey = key.join(",");
            if (!hashMap.has(finalKey)) {
                hashMap.set(finalKey, [])
            }
            hashMap.get(finalKey).push(str)
        }

        return [...hashMap.values()] 
    }
}
