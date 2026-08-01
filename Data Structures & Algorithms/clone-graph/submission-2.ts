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
    cloneGraph(node: Node | null): Node {
        if (!node) {
            return null
        }
        const hashMap: Map<Node, Node> = new Map<Node, Node>();
        
        
        const fillMap = (curr: Node) => {
            if (hashMap.has(curr)) {
                return;
            }

            hashMap.set(curr, new Node(curr.val))
            for (const child of curr.neighbors) {
                fillMap(child)
            }

        }
        fillMap(node)

        const visited: Set<Node> = new Set<Node>();
        const dfs = (curr: Node) => {
            if (visited.has(curr)) {
                return
            }
            visited.add(curr)
            const par: Node = hashMap.get(curr)
            for (const child of curr.neighbors) {
                par.neighbors.push(hashMap.get(child))
                dfs(child)
            }
        }

        dfs(node)

        return hashMap.get(node)
    }
}
