/**
 In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.
Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]

 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    let m = mat.length,
        n = mat[0].length;
    
    let result = [];
    
    if((m * n !== r * c) || (m === r && n === c)){
        return mat;
    }
    mat = mat.flat();
    for(let i = 0; i < r; i++){
        result.push([]);
        for(let j = i * c; j < (i + 1) * c; j++){
            result[i].push(mat[j]);
        }
    }
    
    return result;
};