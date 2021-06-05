function print2DArray(array) {
    var arrayRow = '';
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            arrayRow += (array[i][j]) + ' ';
        }
        console.log(arrayRow);
        arrayRow = '';
    }
}

function print1DArray(array) {
    var arrayRow = '';
    for (var i = 0; i < array.length; i++) {
        arrayRow += array[i] + " ";
    }
    console.log(arrayRow);
}

module.exports = print1DArray;
module.exports = print2DArray;