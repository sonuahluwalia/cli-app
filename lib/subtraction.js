// This function is for matrix subtraction
function subtraction(array1, array2, rows, columns) {
    var sub = [];
    var subRow = [];
    console.log("Subtraction");
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            subRow.push(array1[i][j] - array2[i][j]);
        }
        sub.push(subRow);
        subRow = [];
    }
    // console.log(sub);
    return sub;
}
module.exports = subtraction;