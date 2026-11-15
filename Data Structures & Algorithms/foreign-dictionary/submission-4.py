class Solution:
    def foreignDictionary(self, words: List[str]) -> str:
        adjList = defaultdict(set)
        nodes = set()
        for word in words:
            for char in word:
                nodes.add(char)


        for i in range(1, len(words)):
            current = words[i]
            previous = words[i-1]

            minLen = min(len(previous), len(current))
            if len(previous) > len(current) and previous[:minLen] == current[:minLen]:
                return ""

            for p, c in zip(previous, current):
                if p != c:
                    adjList[p].add(c)
                    break
            
            
        
        result = []
        path = {}
        def hasCycleAndSort(current):
            if current in path and path[current] == True:
                return True
            if current in path and path[current] == False:
                return False
            
            path[current] = True
            for neighbor in adjList[current]:
                if hasCycleAndSort(neighbor):
                    return True
            
            result.append(current)
            path[current] = False
            return False
        
        
        for node in nodes:
            if hasCycleAndSort(node):
                return ""
        
        return "".join(reversed(result))
        


        


        

"""
It seems like a graph problem. We need to sort the graph.

We can iterate over the words and find out the edges of the graph.

n -> f
h -> e
r -> n
e -> r

n -> f
"""