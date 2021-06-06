// This is the main file acting as controller with the main function 

const readline = require("readline-sync");
var clc = require("cli-color");
var addition = require('./lib/addition.js');
var subtraction = require('./lib/subtraction.js');
var diagonal = require('./lib/diagonal.js');
var transpose = require('./lib/transpose.js');
var print = require('./lib/print.js');
var validate = require('./lib/validation.js');
var create = require('./lib/creation.js');


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
        console.clear();
        menu();
        input = readline.questionInt(clc.yellowBright("Enter Your Option: "));

        switch (input) {
            case 0:
                console.log(clc.yellowBright("Program Exited."));
                return;
            case 1:
                create.createTwoMatrix(array1, array2);
                // console.log("This is case 1");
                // console.log(array1.length);
                // console.log(array2.length);
                if (validate.validateTwoArray(array1, array2)) {
                    // var sum = addition(array1, array2, rows, columns);
                    print.print2DArray(addition(array1, array2));
                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            case 2:
                create.createTwoMatrix(array1, array2);
                // console.log("This is case 2");
                if (validate.validateTwoArray(array1, array2)) {
                    print.print2DArray(subtraction(array1, array2));
                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            case 3:
                create.createOneMatrix(array1);
                // console.log("This is case 3");
                if (validate.validateOneArray(array1)) {
                    var obj = diagonal(array1);
                    console.log(clc.blueBright("Major Diagonal"));
                    print.print1DArray(obj.MajorDiagonal);
                    console.log(clc.blueBright("Minor Diagonal"));
                    print.print1DArray(obj.MinorDiagonal);

                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            case 4:
                create.createOneMatrix(array1);
                // console.log("This is case 4");
                if (validate.validateOneArray(array1)) {
                    print.print2DArray(transpose(array1, array1.length));
                } else {
                    console.log(clc.yellowBright("Not a square matrix"));
                }
                break;
            default:
                console.log(clc.yellowBright("Invalid Option"))
                break;
        }
        take = readline.question(clc.yellowBright("Do you want to continue(y/n) : "));
        valid = validate.validInputYorN(take);

    } while (valid)

}



