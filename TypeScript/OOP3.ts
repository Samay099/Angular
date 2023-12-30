
class Demo
{
    // Characteristics
    No1 : number;
    No2 : number;

    constructor()
    {
        console.log("Inside default constructor");
        this.No1 = 0;
        this.No2 = 0;
    }

    Display()
    {
        console.log("Inside Display function of Demo class");
    }
}

var obj = new Demo();

obj.Display();
console.log(obj.No1);
console.log(obj.No2);