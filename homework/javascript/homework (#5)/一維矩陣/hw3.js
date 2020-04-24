function factor(a){
    var array=[];
    var i=2;
    while(a>1){
        //要是a能被i除盡，代表i是a的因數
        if(a%i==0){
            array.push(i); //把因數i放進array裡面
            a=a/i;
            continue;
        }
        i++; //i若不是a的因數，則i++
    }
    return array;
}
console.log(factor(45));