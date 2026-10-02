/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val, children) {
 *         this.val = val === undefined ? 0 : val;
 *         this.children = children === undefined ? [] : children;
 *     }
 * }
 */

class Solution {
    /**
     * @param {_Node|null} node
     * @return {_Node|null}
     */
    cloneTree(root) {

        const bfs = (node) => {
            if (!node) return node;
            const newNode = new Node(node.val);
            for (const child of node.children) {
                const newChild = bfs(child);
                newNode.children.push(newChild);
            }

            return newNode;
        }


        return bfs(root)
    }
}
