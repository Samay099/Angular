function Percentage(Marks : number, Outof : number) : number
{
    var Result : number = 0;
    Result = ((Marks/Outof) * 100);
    return Result;
}

var Ans : number = 0;

Ans = Percentage(77,100);
console.log("Pergentage is : "+Ans);