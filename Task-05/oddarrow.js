
//arrow function Odd number
((a,b)=> {

for(var i=0;i<a.length;i++)
{
if(a[i] % b !=0)
{
    console.log(a[i]);
}
}

})([1,2,3,4,5,6,7,8,9],2);

