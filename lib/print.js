function print2DArrayFunction(array) {
    var arrayRow = '';
    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < array[i].length; j++) {
            arrayRow += (array[i][j]) + ' ';
        }
        console.log(arrayRow);
        arrayRow = '';
    }
}

function print1DArrayFunction(array) {
    var arrayRow = '';
    for (var i = 0; i < array.length; i++) {
        arrayRow += array[i] + " ";
    }
    console.log(arrayRow);
}

module.exports = {
    print2DArray: print2DArrayFunction,
    print1DArray: print1DArrayFunction
};
