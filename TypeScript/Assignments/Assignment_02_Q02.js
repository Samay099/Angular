var Arithematics = /** @class */ (function () {
    function Arithematics(Numbers) {
        this.Arr = Numbers;
    }
    Arithematics.prototype.Summation = function () {
        var Cnt = 0;
        var Sum = 0;
        for (Cnt = 0; Cnt < this.Arr.length; Cnt++) {
            Sum = Sum + this.Arr[Cnt];
        }
        return Sum;
    };
    return Arithematics;
}());
var Arr1 = [23, 6, 7, 4, 5, 7];
var Obj = new Arithematics(Arr1);
var Ret = 0;
Ret = Obj.Summation();
console.log("Summation of numbers is : " + Ret);
