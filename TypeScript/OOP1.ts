function Addition(No1 : number, No2 : number) : number
{
    var Ans : number = 0;
    Ans = No1 + No2;
    return Ans;
}

function Subtraction(No1 : number, No2 : number)
{
    var Ans : number = 0;
    Ans = No1 - No2;
    return Ans;
}

var Value1 : number = 11;
var Value2 : number = 10;
var Result : number = 0;

Result = Addition(Value1,Value2);
console.log("Addition is : "+Result);

Result = Subtraction(Value1,Value2);
console.log("substraction is : "+Result);