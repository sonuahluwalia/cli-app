const readline = require("readline-sync");
var clc = require("cli-color");
var print = require('./print');


// array creation and fill array
function createTwoMatrixFunction(array1, array2) {
    array1 = createMatrixFunction(array1, 1);
    print.print2DArray(array1);
    array2 = createMatrixFunction(array2, 2);
    print.print2DArray(array2);
}

function createOneMatrixFunction(array1) {
    array1 = createMatrixFunction(array1, 1);
    print.print2DArray(array1);
}


var rows = 0, columns = 0;
function createMatrixFunction(array, num) {
    rows = readline.questionInt(clc.blueBright(
        "How many rows do you want for your " + num + " matrix to have? "
    ));
    columns = readline.questionInt(clc.blueBright(
        "How many columns do you want for your  " + num + " matrix to have? "
    ));

    for (var i = 0; i < rows; i++) {
        array.push([]);
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            array[i][j] = readline.questionInt(clc.greenBright(`Value in ${i} and ${j} = `));
        }
    }
    // console.log(array);
    return array;
}

module.exports = {
    createTwoMatrix: createTwoMatrixFunction,
    createOneMatrix: createOneMatrixFunction
};
