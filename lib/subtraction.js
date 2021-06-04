function subtraction(array1, array2, rows, columns) {
    var sub = [];
    console.log("Subtraction");
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            sub.push(array1[i][j] - array2[i][j]);
        }
    }
    console.log(sub);
}
module.exports = subtraction;