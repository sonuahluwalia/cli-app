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

    // console.log(newArray);
    return newArray;
}
module.exports = transpose;