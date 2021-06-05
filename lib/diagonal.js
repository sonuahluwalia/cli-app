function diagonal(array1) {
    console.log("Diagonal");
    var majorD = [], minorD = [];
    const size = array1.length - 1;
    for (var i = 0; i < size + 1; i++) {
        // major diagonal
        // console.log(array1[i][i]);
        majorD.push(array1[i][i]);
        //   minor diagonal
        // console.log(array1[i][size - i]);
        minorD.push(array1[i][size - i]);
    }
    return {
        MajorDiagonal: majorD,
        MinorDiagonal: minorD
    }
    // console.log("Major Diagonal : " + majorD);
    // console.log("Minor Diagonal : " + minorD);

}
module.exports = diagonal;