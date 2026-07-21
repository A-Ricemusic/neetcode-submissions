# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Codec:
    
    # Encodes a tree to a single string.
    def serialize(self, root: Optional[TreeNode]) -> str:
        self.res = []

        def dfs(curr):
            if not curr:
                self.res.append("#")
                return
            
            self.res.append(str(curr.val))
            dfs(curr.left)
            dfs(curr.right)
        dfs(root)
        return ",".join(self.res)

        
    # Decodes your encoded data to tree.
    def deserialize(self, data: str) -> Optional[TreeNode]:
        arr = data.split(",")
        self.i = 0
        def dfs():
            if arr[self.i] == "#":
                self.i += 1
                return
            root = TreeNode(int(arr[self.i]))
            self.i += 1
            root.left = dfs()
            root.right = dfs()
            return root

        return dfs()
