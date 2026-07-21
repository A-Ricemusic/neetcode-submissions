class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        if len(edges) != n - 1:
            return False
        
        myDict = defaultdict(list)
        for a,b in edges:
            myDict[a].append(b)
            myDict[b].append(a)
        
        visit = set()
        stack = [(0,-1)]

        while stack:
            node, parent = stack.pop()
            if node in visit:
                continue
            visit.add(node)

            for child in myDict[node]:
                if child != parent:
                    stack.append((child, node))

        return len(visit) == n
        