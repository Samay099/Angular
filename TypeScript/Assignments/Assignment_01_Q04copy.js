function ChkP(Value1) {
    var Cnt = 0;
    var Flag = true;
    if ((Value1 == 2) || (Value1 == 3)) {
        return false;
    }
    for (Cnt = 2; Cnt <= (Value1); Cnt++) {
        if (((6 * Cnt - 1) == Value1) || ((6 * Cnt + 1) == Value1)) {
            Flag = false;
            break;
        }
    }
    return Flag;
}
var No1 = 11;
var Ret = true;
Ret = ChkP(No1);
if (Ret == false) {
    console.log("It is a prime number");
}
else {
    console.log(" It is not a prime number");
}
