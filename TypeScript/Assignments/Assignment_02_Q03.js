var Comparison = /** @class */ (function () {
    function Comparison(Numbers) {
        this.Arr = Numbers;
    }
    Comparison.prototype.SecondMaximum = function () {
        var Max = 0;
        var SMax = -1;
        var Cnt = 0;
        for (Cnt = 0; Cnt < this.Arr.length; Cnt++) {
            if (this.Arr[Max] < this.Arr[Cnt]) {
                SMax = Max;
                Max = Cnt;
            }
            else if (this.Arr[Max] > this.Arr[Cnt]) {
                if ((SMax == -1) || (this.Arr[SMax] < this.Arr[Cnt])) {
                    SMax = Cnt;
                }
            }
        }
        return this.Arr[SMax];
    };
    return Comparison;
}());
var Arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
var Obj1 = new Comparison(Arr1);
var Ret = 0;
Ret = Obj1.SecondMaximum();
console.log("Second Largest number is : " + Ret);
