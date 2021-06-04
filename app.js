const readline = require("readline-sync");
var clc = require("cli-color");
var input;
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
var take = '', valid = false;
var array1 = [], array2 = [], sum = [], sub = [];
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
            addition();
            break;
        case 2:
            createTwoMatrix();
            console.log("This is case 2");
            subtraction();
            break;
        case 3:
            diagonal();
            break;
        case 4:
            transpose();
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
            sum.push(array1[i][j] - array2[i][j]);
        }
    }
}
function diagonal() {
    console.log("Diagonal");
}

function transpose() {
    console.log("Transpose");
}


// Hackathon 1 (Team Work)// :Build a Menu Driven CLI app with Javascript to performMatrix Operations and stop the programexecution only upon selection. Keep displaying themenu after the task
//is done until the userchooses to exit.
//Menu Options :1) Matrix Addition2) Matrix Subtraction3) Extract Matrix Diagonal4) Matrix Transpose0) Exit the programNote :All the matrix inputs should be given as command linei nputs including matrix dimensions.
// const q1 = readline.question("What do you like?");// console.log("He likes " + q1);
// const number = readline.questionInt("Give me a number: ");
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
function validateArray(array1, array2) {

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


