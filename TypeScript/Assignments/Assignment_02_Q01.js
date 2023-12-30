function Maximum(Arr) {
    var Max = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > Max) {
            Max = Arr[Cnt];
        }
    }
    return Max;
}
var Arr1 = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(Arr1);
console.log("Largest number is : " + Ret);
