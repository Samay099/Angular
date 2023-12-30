var Numbers = /** @class */ (function () {
    function Numbers(Value) {
        this.No1 = Value;
    }
    Numbers.prototype.NumDigits = function () {
        var Digit = 0;
        var Temp = this.No1;
        var Cnt = 0;
        while (Temp != 0) {
            Temp = Temp / 10;
            Cnt++;
        }
        return Cnt;
    };
    Numbers.prototype.PowerDigits = function () {
        var Temp = this.No1;
        var Multi = 0;
        var Sum = 0;
        var Digit = 0;
        var i = 0;
        while (Temp != 0) {
            Digit = Digit % 10;
            for (i = 0; i < this.NumDigits(); i++) {
                Multi *= Digit;
            }
            Sum += Multi;
            Temp = Temp / 10;
        }
        return Sum;
    };
    return Numbers;
}());
var Value = 153;
var Obj2 = new Numbers(Value);
var Ret = 0;
var Arm = function () { return Obj2.PowerDigits(); };
Ret = Arm();
if (Ret == Value) {
    console.log(Value + " is Armstrong number");
}
else {
    console.log(Value + " is Armstrong number");
}
