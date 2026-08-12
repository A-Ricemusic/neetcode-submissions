class TreeNode {
    constructor(key, value) {
        this.key = key;
        this.val = value;
        this.left = null;
        this.right = null;
    }
}


class TreeMap {
    constructor() {
        this.root = null
    }

    /**
     * @param {number} key
     * @param {number} val
     * @returns {void}
     */
    insert(key, val) {
        const newNode = new TreeNode(key,val)
        if (!this.root) {
            this.root = newNode;
            return 
        }

        let curr = this.root
        while (curr) {
            if (key > curr.key) {
                if (curr.right === null) {
                    curr.right = newNode
                    return
                }
                curr = curr.right

            } else if (key < curr.key) {
                if (curr.left === null) {
                    curr.left = newNode
                    return
                }
                curr = curr.left

            } else {
                curr.val = val
                return
            }
        }
    }

    /**
     * @param {number} key
     * @returns {number}
     */
    get(key) {
        if (!this.root) return -1;

        let curr = this.root;

        while (curr) {
            if (key < curr.key) {
                curr = curr.left
            } else if (key > curr.key) {
                curr = curr.right
            } else {
                return curr.val
            }
        }
        return -1;
    }

    /**
     * @returns {number}
     */
    getMin() {
        if (!this.root) return -1;
        let curr = this.findMin(this.root)
        return curr.val
    }

    findMin(curr) {
        while (curr.left) {
            curr = curr.left
        }
        return curr
    }

    /**
     * @returns {number}
     */
    getMax() {
        if (!this.root) return -1;

        let curr = this.root
        while (curr.right) {
            curr = curr.right
        }
        return curr.val
    }

    /**
     * @param {number} key
     * @returns {void}
     */
    remove(key) {
        this.root = this.removeHelper(this.root, key)

    }

    removeHelper(curr, key) {
        if (curr === null) {
            return null;
        }
        if (key > curr.key) {
            curr.right = this.removeHelper(curr.right,key);
        } else if (key < curr.key) {
            curr.left = this.removeHelper(curr.left, key);
        } else {
            if (!curr.left) return curr.right;
            if (!curr.right) return curr.left;
            let minNode = this.findMin(curr.right)
            curr.key = minNode.key;
            curr.val = minNode.val;
            curr.right = this.removeHelper(curr.right, minNode.key)

        }
        return curr;
    }

    /**
     * @returns {number[]}
     */
    getInorderKeys() {
        const res = []
        this.inOrderTraverse(this.root,res)
        return res;
    }

    inOrderTraverse(root,res) {
        if (root !== null) {
            this.inOrderTraverse(root.left,res)
            res.push(root.key)
            this.inOrderTraverse(root.right, res)
        }
    }
}
