class Strings
{
    public Str : string;

    constructor(chStr : string)
    {
        this.Str = chStr;
    }

    ChkString()
    {
        var Cnt : number = 0;
        var Flag : boolean = false

        for(Cnt = 0; Cnt < this.Str.length; Cnt++)
        {
            if(this.Str == "Marvellous")
            {
                Flag = true;
                break;
            }
        }

        return Flag;
    
    }
}

var chString : string = "Pune Kothrud Marvellous Infosystems";
var Obj = new Strings(chString);

var Ret : boolean = false;

if(Ret =true)
{
    console.log("String contains Marvellous in it");
}
else
{
    console.log("String does not contain Marvellous in it");
}

