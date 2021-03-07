// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];
        if (i % 2) row.reverse();
        result.push(...row);
    }
    return result;
};
