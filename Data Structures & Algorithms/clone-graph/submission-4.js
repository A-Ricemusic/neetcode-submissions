/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;
        const map = new Map();
        const dfs = (curr) => {
            if (map.has(curr)) return map.get(curr);
            const newNode = new Node(curr.val);
            map.set(curr, newNode);
            for (const child of curr.neighbors) {
                newNode.neighbors.push(dfs(child));
            }
            return newNode;
        };

      
        return dfs(node);
    }
}
