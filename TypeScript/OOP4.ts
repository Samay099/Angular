
class Demo
{
    // Characteristics
    No1 : number;
    No2 : number;

    constructor(A : number, B : number)
    {
        console.log("Inside parametrised constructor");
        this.No1 = A;
        this.No2 = B;
    }

    Display()
    {
        console.log("Inside Display function of Demo class");
    }
}

var obj1 = new Demo(10,11);

var obj2 = new Demo(20,21);

console.log(obj1.No1);
console.log(obj1.No2);

console.log(obj2.No1);
console.log(obj2.No2);

