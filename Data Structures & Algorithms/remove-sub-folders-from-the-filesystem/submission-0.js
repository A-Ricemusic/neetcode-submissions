class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfPath = false
    }
}


class Trie {
    constructor() {
        this.root = new TrieNode()
    }


    insert(path) {
        let curr = this.root
        for (const part of path) {
           if (!curr.children.has(part)) {
            curr.children.set(part, new TrieNode());
           }
           curr = curr.children.get(part);
        }
        curr.endOfPath = true;
    }

    checkFinalPath(path) {
        let curr = this.root
        for (let i = 0; i < path.length; i++) {
            curr = curr.children.get(path[i])
            if (i === path.length - 1 && curr.endOfPath) return true;
            if (curr.endOfPath) return false;
        }


    }
}


class Solution {
    /**
     * @param {string[]} folder
     * @return {string[]}
     * [a]
     */
    removeSubfolders(folder) {
        let res = []
        const trie = new Trie()
        for (const fld of folder) {
            const path = fld.split("/").filter(Boolean);
            trie.insert(path)   
        }

        for (const fld of folder) {
            const path = fld.split("/").filter(Boolean);
            if (trie.checkFinalPath(path)) {
                res.push(fld)
            }
        }
        return res;
    }
}
