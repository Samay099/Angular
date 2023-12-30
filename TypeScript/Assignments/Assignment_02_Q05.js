var Strings = /** @class */ (function () {
    function Strings(chStr) {
        this.Str = chStr;
    }
    Strings.prototype.ChkString = function () {
        var Cnt = 0;
        var Flag = false;
        for (Cnt = 0; Cnt < this.Str.length; Cnt++) {
            if (this.Str == 'Marvellous') {
                Flag = true;
                break;
            }
        }
        return Flag;
    };
    return Strings;
}());
var chString = "Pune Kothrud Marvellous Infosystems";
var Obj = new Strings(chString);
var Ret = false;
if (Ret = true) {
    console.log("String contains Marvellous in it");
}
else {
    console.log("String does not contain Marvellous in it");
}
