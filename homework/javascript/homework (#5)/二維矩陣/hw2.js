function neg(a) {
    var i, j;
    var b = []; //設一個相加後的新矩陣
    for (i=0; i<a.length; i++) {
        b[i] = []; //把新矩陣設為空矩陣
        for (j=0; j<a[i].length; j++) {
            b[i][j] = 0 - a[i][j];
        }
    }
    return b;
}

console.log(neg([[1,2],[3,4]]));