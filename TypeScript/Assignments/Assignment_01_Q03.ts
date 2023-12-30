function DisplayFactors(Value1 : number) : void
{
    var iCnt : number = 0;

    for(iCnt = 1; iCnt <= Value1/2; iCnt++)
    {
        if((Value1 % iCnt) == 0)
        {
            console.info(iCnt);
        }
    }
}

var No1 : number = 20;
DisplayFactors(No1);