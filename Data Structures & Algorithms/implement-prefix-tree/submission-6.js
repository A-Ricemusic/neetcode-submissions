class TrieNode {
    constructor() {
        this.children = {};
        this.endOfWord = false;
    }
}


class PrefixTree {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let curr = this.root;
        for (const char of word) {
            if (!Object.hasOwn(curr.children, char)) {
                curr.children[char] = new TrieNode();
            }
            curr = curr.children[char]
        }
        curr.endOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let curr = this.root;
        for (const char of word) {
            if (!Object.hasOwn(curr.children, char)) {
                return false;
            }
            curr = curr.children[char]
        }
        return curr.endOfWord;
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let curr = this.root;
        for (const char of prefix) {
            if (!Object.hasOwn(curr.children, char)) {
                return false;
            }
            curr = curr.children[char]
        }
        return true;
    }
}
