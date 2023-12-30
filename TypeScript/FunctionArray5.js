function Demo() {
    var Languages = ["C", "Java", "Python", "C++"];
    return Languages;
}
var Arr = Demo();
console.log("Elements of array are");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
