function ChkP(Value1) {
    var Cnt = 0;
    var Flag = false;
    if ((Value1 == 2) || (Value1 == 3)) {
        return true;
    }
    for (Cnt = 2; Cnt <= Value1; Cnt++) {
        if (((6 * Cnt - 1) == Value1) || ((6 * Cnt + 1) == Value1)) {
            Flag = true;
            break;
        }
    }
    return Flag;
}
var No1 = 110;
var Ret = false;
Ret = ChkP(No1);
if (Ret == true) {
    console.log("It is a prime number");
}
else {
    console.log(" It is not a prime number");
}
