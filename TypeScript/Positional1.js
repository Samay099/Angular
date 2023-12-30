function Percentage(Marks, Outof) {
    var Result = 0;
    Result = ((Marks / Outof) * 100);
    return Result;
}
var Ans = 0;
Ans = Percentage(77, 100);
console.log("Pergentage is : " + Ans);
