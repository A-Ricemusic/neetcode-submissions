class TrieNode {
    constructor() {
        this.children = new Map()
        this.endOfWord = false
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode;
    }

    insert(word) {
        let curr = this.root
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c,new TrieNode());
            }
            curr = curr.children.get(c)
        }
        curr.endOfWord = true;

    }

    hasWord(word) {
        let curr = this.root
        for (const c of word) {
            if (!curr.children.has(c)) {
                return false;
            }
            curr = curr.children.get(c)
        }
        return curr.endOfWord
    }

     hasPrefix(prefix) {
        let curr = this.root
        for (const c of prefix) {
            if (!curr.children.has(c)) {
                return false;
            }
            curr = curr.children.get(c)
        }
        return true
    }
}



class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const trie = new Trie()
        for (const word of words) {
            trie.insert(word)
        }
        const rows = board.length;
        const cols = board[0].length;
        const res = [];

        const dfs = (r,c,word,node) => {
            if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] === "#") {
                return
            }
            if (!node.children.has(board[r][c])) return;
            const ch = board[r][c]
            board[r][c] = "#"
            word += ch
            const next = node.children.get(ch);
            if (next.endOfWord) {
                res.push(word);
                next.endOfWord = false;
            }
            dfs(r + 1,c,word,next)
            dfs(r - 1,c,word,next)
            dfs(r,c + 1,word,next)
            dfs(r,c - 1,word,next)
            board[r][c] = ch
             if (next.children.size === 0) {   
                node.children.delete(ch)
             }
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                dfs(r,c,"",trie.root)
            }
        }

        return res;

    }
}
