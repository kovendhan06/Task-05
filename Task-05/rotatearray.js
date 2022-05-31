
var rotate=function(num,k)
{
for(var i=0;i<k;i++)
{
  
num.unshift(num.pop());
}
return num;
}
console.log(rotate([1,2,3,4,5],2));