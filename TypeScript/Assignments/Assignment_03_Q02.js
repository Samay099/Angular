var Circle = /** @class */ (function () {
    function Circle(A) {
        this.Radius = 0;
        this.PI = 0;
        this.Radius = A;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        var Ar = 0;
        Ar = this.PI * this.Radius * this.Radius;
        return Ar;
    };
    return Circle;
}());
var Obj1 = new Circle(5);
var Obj2 = new Circle(99);
var Result = 0;
Result = Obj1.Area();
console.log("Area of Circle with Radius:" + Obj1.Radius + " is " + Result);
Result = Obj2.Area();
console.log("Area of Circle with Radius:" + Obj2.Radius + " is " + Result);
