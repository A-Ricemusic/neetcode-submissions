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
    cloneGraph(node: Node | null): Node | null {
        if (!node) return null;
        const map = new Map<Node, Node>();

        const dfs = (curr: Node): Node => {
            if (map.has(curr)) return map.get(curr)!;

            const clone = new Node(curr.val);
            map.set(curr, clone); // mark BEFORE recursing — this is what handles cycles

            for (const child of curr.neighbors) {
                clone.neighbors.push(dfs(child));
            }
            return clone;
        };

        return dfs(node);
    }
}
