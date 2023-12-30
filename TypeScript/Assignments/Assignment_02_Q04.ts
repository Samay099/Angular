
class Numbers
{
    public No1 : number;

    constructor(Value: number)
    {
        this.No1 = Value;
    }

    NumDigits() : number
    {
        var Digit : number = 0;
        var Temp : number = this.No1;
        var Cnt : number = 0;

        while(Temp != 0)
        {
            Temp = Temp / 10;
            Cnt++
        }
        return Cnt;
    }
    PowerDigits() : number
    {
        var Temp : number = this.No1
        var Multi : number = 0;
        var Sum : number = 0;
        var Digit : number = 0;
        var i : number = 0;

        while(Temp != 0)
        {
            Digit = Digit % 10;
            for(i = 0; i < this.NumDigits(); i++)
            {
               Multi *= Digit; 
            }
            Sum += Multi;
            Temp = Temp / 10;
        }

        return Sum;
    }
    
}


var Value : number = 153;
var Obj2 = new Numbers(Value);
var Ret : number = 0;

var Arm = () => Obj2.PowerDigits();
Ret = Arm();

if(Ret == Value)
{
    console.log(Value + " is Armstrong number");
}
else
{
    console.log(Value + " is Armstrong number");
}

