const readline = require("readline-sync");
var clc = require("cli-color");
var addition = require('./lib/addition.js');
var subtraction = require('./lib/subtraction.js');
var diagonal = require('./lib/diagonal.js');
var transpose = require('./lib/transpose.js');

var input;
var take = '', valid = false;
var array1 = [], array2 = [];


function menu() {
    console.log("-------------");
    var options = [
        "Exit the Program",
        "Matrix Addition",
        "Matrix Subtraction",
        "Matrix Diagonal",
        "Matrix Transpose",
    ];
    options.forEach((elem, index) => {
        console.log(clc.magentaBright(`${index}. ${elem}`));
    });
}
do {
    array1 = [], array2 = [], valid = false;
    menu();
    input = readline.questionInt(clc.yellowBright("Enter Your Option: "));

    switch (input) {
        case 0:
            console.log(clc.yellowBright("Program Exited."));
            return;
        case 1:
            createTwoMatrix();
            console.log("This is case 1");
            if (validateTwoArray()) {
                addition(array1, array2, rows, columns);
            } else {
                console.log(clc.yellowBright("Not a square matrix"));
            }
            break;
        case 2:
            createTwoMatrix();
            console.log("This is case 2");
            if (validateTwoArray()) {
                subtraction(array1, array2, rows, columns);
            } else {
                console.log(clc.yellowBright("Not a square matrix"));
            }
            break;
        case 3:
            createOneMatrix();
            console.log("This is case 3");
            if (validateOneArray()) {
                diagonal(array1);
            } else {
                console.log(clc.yellowBright("Not a square matrix"));
            }
            break;
        case 4:
            createOneMatrix();
            console.log("This is case 4");
            if (validateOneArray()) {
                transpose(array1, array1.length);
            } else {
                console.log(clc.yellowBright("Not a square matrix"));
            }
            break;
        default:
            console.log(clc.yellowBright("Invalid Option"))
            break;
    }
    take = readline.question(clc.yellowBright("Do you want to continue(y/n) : "));
    console.clear();
    valid = validInputYorN(take);
} while (valid)

function validInputYorN(take) {
    if (useRegex(take)) {
        if (take === 'Y' || take === 'y')
            return true;
    } else if (take === 'N' || take === 'n')
        return false;
    else {
        console.log(clc.yellowBright("Invalid Option. Please choose (y/n)"));
        return true;
    }
}

function createTwoMatrix() {
    array1 = createMatrix(array1, 1);
    console.log(array1);
    array2 = createMatrix(array2, 2);
    console.log(array2);
}

function createOneMatrix() {
    array1 = createMatrix(array1, 1);
    console.log(array1);
}

// console.log(useRegex("y"))
function useRegex(input) {
    // let regex = /^Y | y | N | n$/i;
    let regex = /^[Y|y|N|n]?$/i;
    return regex.test(input);
}

var rows = 0, columns = 0;
function createMatrix(array, num) {
    rows = readline.questionInt(
        "How many rows do you want for your " + num + " matrix to have? "
    );
    columns = readline.questionInt(
        "How many columns do you want for your  " + num + " matrix to have? "
    );

    for (var i = 0; i < rows; i++) {
        array.push([]);
    }
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            array[i][j] = readline.questionInt(`Value in ${i} and ${j} = `);
        }
    }
    // console.log(array);
    return array;
}

//todo
var countElements1, countElements2 = 0;
function validateTwoArray() {
    // console.log(array1.length);
    // console.log(array2.length);
    var isLengthEqual = false;
    if (array1.length === array2.length) {
        isLengthEqual = true;
    }
    return isLengthEqual;

}

function validateOneArray() {

    var numberOfRows = array1.length // row
    var numberOfColumns = array1[0].length // col
    if (numberOfRows === numberOfColumns) {
        return true;
    } else {
        return false;
    }
}


