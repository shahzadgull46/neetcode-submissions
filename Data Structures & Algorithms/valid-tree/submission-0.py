class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        adj = defaultdict(list)
        for n1, n2 in edges:
            adj[n1].append(n2)
            adj[n2].append(n1)

        visited = set()
        def dfs(current, path, parent):
            path.add(current)
            visited.add(current)
            for neighbor in adj[current]:
                if neighbor in path and neighbor != parent:
                    return 2
                if neighbor not in visited and dfs(neighbor, path, current) == 2:
                    return 2
            path.remove(current)
            return 1
        result = dfs(0, set(), None)

        if result != 2 and len(visited) == n:
            return True
        return False
        

            

"""
We are given a graph and we need to check if they form a valid tree.
What is a tree?
1. All the nodes are connected. 
2. Every node has a exactly one incoming edge to it (no more, no less).
Is there a scenairio where this might premise fails?
Yes, 0 has edges from 0,2 and 3.

0: 1
1: 0, 2, 3, 4
2, 1, 3
3, 1, 2
4, 1


"""