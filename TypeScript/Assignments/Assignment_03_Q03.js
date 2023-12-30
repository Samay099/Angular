var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleX.prototype.Circumference = function () {
        var Cur = 0;
        Cur = 2 * this.PI * this.Radius;
        return Cur;
    };
    return CircleX;
}(Circle));
var Value1 = 5;
var Value2 = 99;
var Obj1 = new CircleX(Value1);
var Obj2 = new CircleX(Value2);
var Result = 0;
Result = Obj1.Area();
console.log("Area of Circle with Radius:" + Value1 + " is " + Result);
Result = Obj1.Circumference();
console.log("Circumference of Circle with Radius:" + Value1 + " is " + Result);
Result = Obj2.Area();
console.log("Area of Circle with Radius:" + Value2 + " is " + Result);
Result = Obj2.Circumference();
console.log("Circumference of Circle with Radius:" + Value2 + " is " + Result);
