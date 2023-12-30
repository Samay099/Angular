function Fibonacci(Value1) {
    var Cnt = 0;
    var First = 1;
    var Second = 0;
    var Third = 0;
    for (Cnt = 0; Cnt <= (Value1 / 2); Cnt++) {
        Third = First + Second;
        First = Second;
        Second = Third;
        console.log(Third);
        if (Third == Value1) {
            break;
        }
    }
}
var No1 = 55;
Fibonacci(No1);
