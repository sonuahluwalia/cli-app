const readline = require("readline-sync");
var clc = require("cli-color");
var input;
var take = '', valid = false;
var array1 = [], array2 = [], sum = [], sub = [], majorD = [], minorD = [];


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
    array1 = [], array2 = [], sum = [], sub = [], valid = false;
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
                addition();
            } else {
                console.log(clc.yellowBright("Not a square matrix"));
            }
            break;
        case 2:
            createTwoMatrix();
            console.log("This is case 2");
            if (validateTwoArray()) {
                subtraction();
            } else {
                console.log(clc.yellowBright("Not a square matrix"));
            }
            break;
        case 3:
            createOneMatrix();
            console.log("This is case 3");
            if (validateOneArray) {
                diagonal();
            } else {
                console.log(clc.yellowBright("Not a square matrix"));
            }
            break;
        case 4:
            createOneMatrix();
            console.log("This is case 4");
            if (validateOneArray) {
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
    if (useRegex(take)) {
        if (take === 'Y' || take === 'y')
            valid = true;
    } else if (take === 'N' || take === 'n')
        valid = false;
    else {
        console.log(clc.yellowBright("Invalid Option. Please choose (y/n)"));
        valid = true;
    }
} while (valid)

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

function addition() {
    console.log("Addition");
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            sum.push(array1[i][j] + array2[i][j]);
        }
    }
    console.log(sum);
}
function subtraction() {
    console.log("Subtraction");
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            sub.push(array1[i][j] - array2[i][j]);
        }
    }
    console.log(sub);
}
function diagonal() {
    console.log("Diagonal");
    const size = array1.length - 1;
    for (var i = 0; i < size + 1; i++) {
        // major diagonal
        // console.log(array1[i][i]);
        majorD.push(array1[i][i]);
        //   minor diagonal
        // console.log(array1[i][size - i]);
        minorD.push(array1[i][size - i]);
    }
    console.log("Major Diagonal : " + majorD);
    console.log("Minor Diagonal : " + minorD);

}


function transpose(array, arrayLength) {
    console.log("Transpose");
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push([]);
    };

    for (var i = 0; i < array.length; i++) {
        for (var j = 0; j < arrayLength; j++) {
            newArray[j].push(array[i][j]);
        };
    };

    console.log(newArray);
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
    console.log(array1.length);
    console.log(array2.length);
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


// switch (number) {
//     case 1:
//         array1 = createMatrix(array1);
//         console.log(array1);
//         array2 = createMatrix(array2);
//         console.log(array2);
//         console.log("This is case 1");


//         for (var i = 0; i < rows; i++) {
//             for (var j = 0; j < columns; j++) {
//                 sum.push(array1[i][j] + array2[i][j]);
//             }
//         }
//         console.log(sum);
//         break;
//     case 2:
//         console.log("this is case 2");
//         break;
//     default:
//         console.log("hi");
// }


