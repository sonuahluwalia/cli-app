const readline = require("readline-sync");
var clc = require("cli-color");

// Validation code below


function validInputYorNFunction(take) {
    while (!(take === 'Y' || take === 'y' || take === 'N' || take === 'n')) {
        take = otherInput(take);
    }
    if (take === 'Y' || take === 'y') {
        return true;
    } else if (take === 'N' || take === 'n') {
        return false;
    }
}

function otherInput(take) {
    console.log(clc.yellowBright("Invalid Option. Please choose (y/n)"));
    input = readline.question(clc.yellowBright("Do you want to continue(y/n) : "));
    return input;
}
// console.log(useRegex("y"))
// function useRegex(input) {
//     // let regex = /^Y | y | N | n$/i;
//     let regex = /^[Y|y|N|n]?$/i;
//     // let blankregex = /^$/;
//     // if (input.length === 0)
//     //     return !blankregex.test(input);
//     // else
//     return regex.test(input);
// }

function validateTwoArrayFunction(array1, array2) {
    // console.log(array1.length);
    // console.log(array2.length);
    // console.log("I am in validate two array");
    var isLengthEqual = false;
    if (array1.length == array2.length) {
        isLengthEqual = true;
    }
    return isLengthEqual;

}

function validateOneArrayFunction(array1) {

    var numberOfRows = array1.length // row
    var numberOfColumns = array1[0].length // col
    if (numberOfRows === numberOfColumns) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    validInputYorN: validInputYorNFunction,
    validateTwoArray: validateTwoArrayFunction,
    validateOneArray: validateOneArrayFunction
};
