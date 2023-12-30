function Demo() : number[]
{
    var Marks : number[] = [10,20,30,40];
    return Marks;
}

var Arr : number[] = Demo();
console.log("elements of array are");
var i : number = 0;

for(i = 0; i< Arr.length; i++)
{
    console.log(Arr[i]);
}
