function fibonacciGenarator(n) {
    var outPut=[];

    if (n===1) {
        outPut=[0];
    } 
    else if (n===2) {
     outPut=[0,1];
    } 
    else{
        outPut=[0,1];

        for (var i = 2; i < n; i++) {
            outPut.push(outPut[outPut.length-2]+ outPut[outPut.length-1]);
        }
    }
    return outPut;
}
outPut= fibonacciGenarator(7);
console.log(outPut);
