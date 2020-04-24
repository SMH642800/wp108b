var data = [1,2,3,4,5];
var total = 0;
for(var i=0;i<data.length;i++){
    total+=data[i];
}
var mean=total/data.length; //計算陣列的平均值
total=0;
for(var i=0;i<data.length;i++){  //計算陣列數字與平均值的相差整合
    var deviation=data[i]-mean;
    total+=deviation*deviation;
}
var seddev=Math.sqrt(total/data.length); //開根號
console.log("%s的標準差: %d", data, seddev); //得標準差