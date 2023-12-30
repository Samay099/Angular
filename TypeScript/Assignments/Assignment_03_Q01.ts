class Arithematic
{
    public No1 : number;
    public No2 : number;

    constructor(A : number ,B : number)
    {
        this.No1= A;
        this.No2 = B;
    }

    Addition()
    {
        var Sum : number = 0;
        Sum = this.No1 + this.No2
        return Sum;
    }
    Subtraction()
    {
        var Sub : number = 0;
        Sub = this.No1 - this.No2;
        return Sub;
    }
    Multiplication()
    {
        var Mult: number = 0;
        Mult = this.No1 * this.No2;
        return Mult;
    }
    Division()
    {
        var Div : number = 0;
        Div = this.No1 / this.No2;
        return Div;
    }

}

var Obj1 = new Arithematic(1, 99);
var Obj2 = new Arithematic(80,86);

var Result : number = 0;

Result = Obj1.Addition();
console.log("Addittion of "+Obj1.No1 +" and " +Obj1.No2 +" is "+ Result);

Result = Obj1.Subtraction();
console.log("Subtraction of "+Obj1.No1 +" and " +Obj1.No2 +" is "+ Result);

Result = Obj1.Multiplication();
console.log("Multiplication of "+Obj1.No1 +" and " +Obj1.No2 +" is "+ Result);

Result = Obj2.Division();
console.log("Division of "+Obj2.No1 +" and " +Obj1.No2 +" is "+ Result);

Result = Obj2.Addition();
console.log("Addittion of "+Obj2.No1 +" and " +Obj2.No2 +" is "+ Result);

Result = Obj2.Subtraction();
console.log("Subtraction of "+Obj2.No1 +" and " +Obj2.No2 +" is "+ Result);

Result = Obj2.Multiplication();
console.log("Multiplication of "+Obj2.No1 +" and " +Obj2.No2 +" is "+ Result);

Result = Obj2.Division();
console.log("Division of "+Obj2.No1 +" and " +Obj2.No2 +" is "+ Result);



