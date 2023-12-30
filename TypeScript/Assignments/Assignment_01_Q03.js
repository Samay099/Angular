function DisplayFactors(Value1) {
    var iCnt = 0;
    for (iCnt = 1; iCnt <= Value1 / 2; iCnt++) {
        if ((Value1 % iCnt) == 0) {
            console.info(iCnt + '\t');
        }
    }
}
var No1 = 20;
DisplayFactors(No1);
