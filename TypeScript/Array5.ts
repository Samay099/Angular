var Marks : number[] = [11,21,51,101,111];

var Cnt : number = 0;

console.log("Array traversal using for loop");

for(Cnt = 0;Cnt < Marks.length; Cnt++)
{
    console.log(Marks[Cnt]);
}

console.log("Array traversal using while loop");
Cnt = 0;

while(Cnt < Marks.length)
{
    console.log(Marks[Cnt]);
    Cnt++;
}

console.log("Array traversal using do while loop");
Cnt = 0;

do
{
    console.log(Marks[Cnt])
    Cnt++
}while(Cnt < Marks.length);