function addition(array1, array2, rows, columns) {
    var sum = [];
    var sumRow = [];
    console.log("Addition");
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            sumRow.push(array1[i][j] + array2[i][j]);
        }
        sum.push(sumRow);
        sumRow = [];
    }
    // console.log(sum);
    return sum;
}

module.exports = addition;