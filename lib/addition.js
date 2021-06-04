function addition(array1, array2, rows, columns) {
    var sum = [];
    console.log("Addition");
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            sum.push(array1[i][j] + array2[i][j]);
        }
    }
    console.log(sum);
}

module.exports = addition;