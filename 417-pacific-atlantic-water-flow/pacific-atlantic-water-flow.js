/**
 * @param {number[][]} heights
 * @return {number[][]}
 */

var pacificAtlantic = function(heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = Array.from({ length: rows }, () => new Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () => new Array(cols).fill(false));

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    function dfs(r, c, visited, prevHeight) {
        // out of bounds or already visited or lower height
        if (
            r < 0 || c < 0 || r >= rows || c >= cols ||
            visited[r][c] || heights[r][c] < prevHeight
        ) return;

        visited[r][c] = true;

        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc, visited, heights[r][c]);
        }
    }

    // Start DFS from Pacific ocean (top and left edges)
    for (let c = 0; c < cols; c++) {
        dfs(0, c, pacific, heights[0][c]);             // top edge
        dfs(rows - 1, c, atlantic, heights[rows - 1][c]); // bottom edge
    }

    for (let r = 0; r < rows; r++) {
        dfs(r, 0, pacific, heights[r][0]);             // left edge
        dfs(r, cols - 1, atlantic, heights[r][cols - 1]); // right edge
    }

    const result = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
};
