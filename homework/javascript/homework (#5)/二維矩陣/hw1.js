function add(a, b) {
    var i, j;
    var c = []; //設一個相加後的新矩陣
    for (i=0; i<a.length; i++) {
        c[i] = []; //把新矩陣設為空矩陣
        for (j=0; j<a[i].length; j++) {
            c[i][j] = a[i][j] + b[i][j];
        }
    }
    return c;
}

console.log(add([[1,2],[3,4]], [[1,1],[1,1]]));