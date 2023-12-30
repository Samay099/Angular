var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        var Sum = 0;
        Sum = this.No1 + this.No2;
        return Sum;
    };
    Arithematic.prototype.Subtraction = function () {
        var Sub = 0;
        Sub = this.No1 - this.No2;
        return Sub;
    };
    Arithematic.prototype.Multiplication = function () {
        var Mult = 0;
        Mult = this.No1 * this.No2;
        return Mult;
    };
    Arithematic.prototype.Division = function () {
        var Div = 0;
        Div = this.No1 / this.No2;
        return Div;
    };
    return Arithematic;
}());
var Obj1 = new Arithematic(1, 99);
var Obj2 = new Arithematic(80, 86);
var Result = 0;
Result = Obj1.Addition();
console.log("Addittion of " + Obj1.No1 + " and " + Obj1.No2 + " is " + Result);
Result = Obj1.Subtraction();
console.log("Subtraction of " + Obj1.No1 + " and " + Obj1.No2 + " is " + Result);
Result = Obj1.Multiplication();
console.log("Multiplication of " + Obj1.No1 + " and " + Obj1.No2 + " is " + Result);
Result = Obj2.Division();
console.log("Division of " + Obj2.No1 + " and " + Obj1.No2 + " is " + Result);
Result = Obj2.Addition();
console.log("Addittion of " + Obj2.No1 + " and " + Obj2.No2 + " is " + Result);
Result = Obj2.Subtraction();
console.log("Subtraction of " + Obj2.No1 + " and " + Obj2.No2 + " is " + Result);
Result = Obj2.Multiplication();
console.log("Multiplication of " + Obj2.No1 + " and " + Obj2.No2 + " is " + Result);
Result = Obj2.Division();
console.log("Division of " + Obj2.No1 + " and " + Obj2.No2 + " is " + Result);
