class Solution {
    /**
     * @param {string[][]} replacements
     * @param {string} text
     * @return {string}
     */
    applySubstitutions(replacements, text) {
        const final = [];
        const map = new Map();
        for (const [k,v] of replacements) {
            map.set(k,v)
        }
        const dfs = (str) => {
            const res = [];
            let i = 0;
            
            while (i < str.length) {
                if (str[i] === "%") {
                    const val = map.get(str[i + 1])
                    let j = 0;
                    while (j < val.length) {
                        if (val[j] !== "%") {
                            res.push(val[j]);
                            j += 1
                        } else {
                            res.push(dfs(val.substring(j,j + 3)))
                            j += 3
                        }
                    }
                    i += 3
                } else {
                    res.push(str[i]);
                    i += 1
                };
            };
            return res.join("")
        };



        const message = text.split("_");
        for (const code of message) {
            const val = dfs(code);
            final.push(val);
        }

        return final.join("_");
    }
}
