
class Comparison
{
    public Arr : number[];

    constructor(Numbers : number[])
    {
        this.Arr = Numbers;
    }

    Maximum() : number
    {
        var Max : number = 0;
        var Cnt : number = 0;
        for(Cnt = 0; Cnt < this.Arr.length; Cnt ++)
        {
            if(this.Arr[Cnt] > Max)
            {
                Max = this.Arr[Cnt];
            }
        }

        return Max;
    }
}

var Arr1 : number[] = [23, 89 ,6, 29, 56, 45, 77, 32];

var Obj1 = new Comparison(Arr1);
var Ret : number = 0;

Ret = Obj1.Maximum();
console.log("Largest number is : "+Ret);