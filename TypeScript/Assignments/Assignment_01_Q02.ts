function A_Circle(Value1 : number) : number
{
    Value1 = 3.14 * Value1 * Value1;
    return Value1;
}

var No1 : number = 5;
var Ret : number = 0;

Ret = A_Circle(No1);

console.log("Area of Circle is "+Ret);