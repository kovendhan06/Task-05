

//palindrome arrow function:
((num)=>
{
temp=num;
value=0;
  
    while(num>0)
    {
dig=num%10;
    value=value*10+dig;
    num=num;
    if(temp==value)
    {
        console.log(" palindrome");
    }
    else
    {
        console.log(" not  palindrome")
    }
}
    

})([101]);
