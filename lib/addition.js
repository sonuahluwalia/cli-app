// This function is to perform matrix addition
function addition(array1, array2) {
    var sum = [];
    var sumRow = [];
    console.log("Addition");
    for (var i = 0; i < array1.length; i++) {
        for (var j = 0; j < array1.length; j++) {
            sumRow.push(array1[i][j] + array2[i][j]);
        }
        sum.push(sumRow);
        sumRow = [];
    }
    // console.log(sum);
    return sum;
}

module.exports = addition;