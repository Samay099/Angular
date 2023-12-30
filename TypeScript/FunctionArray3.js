function Demo() {
    return new Array(10, 220, 30, 40);
}
var Arr = Demo();
console.log("elements of array are");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
