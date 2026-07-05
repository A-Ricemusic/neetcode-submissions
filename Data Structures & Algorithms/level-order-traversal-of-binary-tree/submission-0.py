# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:

        if not root:
            return []
        queue = deque([root])
        res = []

        while queue:
            size = len(queue)
            currLevel = []
            for i in range(size):
                currNode = queue.popleft()
                currLevel.append(currNode.val)
                if currNode.left:
                    queue.append(currNode.left)
                if currNode.right:
                    queue.append(currNode.right)
            res.append(currLevel)
        return res
        