function Maximum(Value1, Value2, Value3) {
    if ((Value1 >= Value2) && (Value1 >= Value3)) {
        return Value1;
    }
    else if ((Value2 >= Value1) && (Value2 >= Value3)) {
        return Value2;
    }
    else if ((Value3 >= Value1) && (Value3 >= Value1)) {
        return Value3;
    }
}
var No1 = 23;
var No2 = 89;
var No3 = 6;
var Ret = 0;
Ret = Maximum(No1, No2, No3);
console.log("Maximum number is " + Ret);
