class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        if not heights or not heights[0]:
            return []

        rows, cols = len(heights), len(heights[0])
        
        # Create matrices to track visited cells for Pacific and Atlantic
        pacific = [[False for _ in range(cols)] for _ in range(rows)]
        atlantic = [[False for _ in range(cols)] for _ in range(rows)]

        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        def dfs(r, c, visited, prevHeight):
            # Out of bounds, already visited, or lower height (can't flow)
            if (r < 0 or c < 0 or r >= rows or c >= cols or
                visited[r][c] or heights[r][c] < prevHeight):
                return

            visited[r][c] = True

            for dr, dc in directions:
                dfs(r + dr, c + dc, visited, heights[r][c])

        # Start DFS from Pacific ocean (top and left edges)
        for c in range(cols):
            dfs(0, c, pacific, heights[0][c])           # top edge
            dfs(rows - 1, c, atlantic, heights[rows - 1][c])  # bottom edge

        for r in range(rows):
            dfs(r, 0, pacific, heights[r][0])           # left edge
            dfs(r, cols - 1, atlantic, heights[r][cols - 1])  # right edge

        # Find all cells reachable by both oceans
        result = []
        for r in range(rows):
            for c in range(cols):
                if pacific[r][c] and atlantic[r][c]:
                    result.append([r, c])

        return result