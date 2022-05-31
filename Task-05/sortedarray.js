//sorted arrays of the same size

var fun=function(arr1,arr2,arr3)
{
arr3=[...arr1,...arr2];
console.log(arr3.length);
var median=0;
for(var i=0;i<arr3.length;i++)
{
median= arr3[i] / 2;
return median;
}
}
console.log(fun([1,2,6],[4,5,9],0));
