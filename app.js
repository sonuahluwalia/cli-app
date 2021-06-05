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
main();
function main() {
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
                // console.log("This is case 1");
                if (validateTwoArray()) {
                    // var sum = addition(array1, array2, rows, columns);
                    print2DArray(addition(array1, array2, rows, columns));
                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            case 2:
                createTwoMatrix();
                // console.log("This is case 2");
                if (validateTwoArray()) {
                    print2DArray(subtraction(array1, array2, rows, columns));
                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            case 3:
                createOneMatrix();
                // console.log("This is case 3");
                if (validateOneArray()) {
                    var obj = diagonal(array1);
                    console.log(clc.blueBright("Major Diagonal"));
                    print1DArray(obj.MajorDiagonal);
                    console.log(clc.blueBright("Minor Diagonal"));
                    print1DArray(obj.MinorDiagonal);

                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            case 4:
                createOneMatrix();
                // console.log("This is case 4");
                if (validateOneArray()) {
                    print2DArray(transpose(array1, array1.length));
                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            default:
                console.log(clc.yellowBright("Invalid Option"))
                break;
        }
        take = readline.question(clc.yellowBright("Do you want to continue(y/n) : "));
        valid = validInputYorN(take);
        console.clear();
    } while (valid)

}
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

function validInputYorN(take) {
    var input = "";
    if (useRegex(take)) {
        if (take === 'Y' || take === 'y') {
            console.log(take);
            return true;
        } else if (take === 'N' || take === 'n') {
            console.log(take)
            return false;
        }
    } else {
        input = otherInput(take);
        validInputYorN(input);
    }
}
function otherInput(take) {
    console.log(take)
    console.log(clc.yellowBright("Invalid Option. Please choose (y/n)"));
    input = readline.question(clc.yellowBright("Do you want to continue(y/n) : "));
    return input;
}

// console.log(useRegex("y"))
// function useRegex(input) {
//     // let regex = /^Y | y | N | n$/i;
//     let regex = /^[Y|y|N|n]?$/i;
//     return regex.test(input);
// }

function createTwoMatrix() {
    array1 = createMatrix(array1, 1);
    print2DArray(array1);
    array2 = createMatrix(array2, 2);
    print2DArray(array2);
}

function createOneMatrix() {
    array1 = createMatrix(array1, 1);
    print2DArray(array1);
}

// console.log(useRegex("y"))
function useRegex(input) {
    // let regex = /^Y | y | N | n$/i;
    let regex = /^[Y|y|N|n]?$/i;
    // let blankregex = /^$/;
    // if (input.length === 0)
    //     return !blankregex.test(input);
    // else
    return regex.test(input);
}

var rows = 0, columns = 0;
function createMatrix(array, num) {
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


