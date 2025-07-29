/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
    const n = matrix.length;

    // Step 1: Transpose the matrix
    // Flip rows and columns (i.e., matrix[i][j] becomes matrix[j][i])
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            // Swap matrix[i][j] and matrix[j][i]
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    // Step 2: Reverse each row
    for (let row of matrix) {
        row.reverse();
    }
}
