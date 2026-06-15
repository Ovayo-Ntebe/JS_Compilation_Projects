//EX 1 - Looping a triangle
let x = 1;
let hashes = "";
while(x != 8)
{
    hashes += "#"
    console.log(hashes)
    x++;
}

//Ex 2 - FizzBuzz
  console.log("FizzBizz");
for(let i = 1; i < 101; i++)
{
    if((i%3==0) && (i%5 == 0))
    {
        console.log("FizzBuzz");
    }
    else if(i % 3 == 0)
    {
        console.log("Fizz");
    }
    else if( i % 5 == 0)
    {
        console.log("Buzz");
    }
    else
    {
         console.log(i);
    }
   
}
