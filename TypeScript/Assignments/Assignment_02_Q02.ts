
class Arithematics
{
    public Arr : number[];

    constructor(Numbers : number[])
    {
        this.Arr = Numbers;
    }

    Summation() : number
    {
        var Cnt : number = 0;
        var Sum : number = 0;

        for(Cnt = 0; Cnt < this.Arr.length; Cnt++)
        {
            Sum = Sum + this.Arr[Cnt];
        }
        return Sum;
    }
}

var Arr1 : number[] = [23, 6, 7 , 4, 5, 7];

var Obj = new Arithematics(Arr1);
var Ret : number = 0;

Ret = Obj.Summation();
console.log("Summation of numbers is : "+Ret);
