class Circle
{
    public Radius : number = 0;
    public PI : number = 0;

    constructor(A : number)
    {
        this.Radius = A;
        this.PI = 3.14;
    }

    Area()
    {
        var Ar : number= 0;
        Ar = this.PI *this.Radius * this.Radius;
        return Ar;
    }

}

var Value1 : number = 5;
var Value2 : number = 99;

var Obj1 = new Circle(Value1);
var Obj2 = new Circle(Value2);

var Result : number = 0;

Result = Obj1.Area();
console.log("Area of Circle with Radius:"+ Value1 +" is " + Result);

Result = Obj2.Area();
console.log("Area of Circle with Radius:"+ Value2+" is " + Result);
