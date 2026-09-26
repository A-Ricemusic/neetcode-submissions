/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        const dummy = new TreeNode(0);
        let stack1 = [[root1,dummy,"r"]];
        let stack2 = [root2];
        
        while (stack1.length !== 0 && stack2.length !== 0) {
            const [n1,par1,side1] = stack1.pop()
            const n2  = stack2.pop()

            if (!n1 && !n2) {
                continue
            };
            let newNode
            if (!n1 || !n2) {
                newNode = n1 === null? new TreeNode(n2.val) : new TreeNode(n1.val)
            } else {
                newNode = new TreeNode(n1.val + n2.val)
            }
            if (!n1) {
                stack1.push([null, newNode, "l"]);
                stack1.push([null, newNode,"r"]);
            } else {
                stack1.push([n1.left, newNode, "l"]);
                stack1.push([n1.right, newNode,"r"]);
            }

            if (!n2) {
                stack2.push(null);
                stack2.push(null);
            } else {
                stack2.push(n2.left);
                stack2.push(n2.right);
            }
            
            

            if (side1 === "l") {
                par1.left = newNode;
            } else {
                par1.right = newNode;
            }  
        }

        return dummy.right;
    }
}
