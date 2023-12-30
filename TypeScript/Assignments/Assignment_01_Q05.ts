function Fibonacci(Value1 : number) : void
{
    var Cnt : number = 0;
    var First : number = 1;
    var Second : number = 0;
    var Third : number = 0;

    for(Cnt = 0;Cnt <= (Value1/2);Cnt++)
    {
        Third = First + Second;
        First = Second;
        Second = Third;
        console.log(Third);
        if(Third == Value1)
        {
            break;
        }
        
    }
}

var No1 : number = 21;

Fibonacci(No1);

