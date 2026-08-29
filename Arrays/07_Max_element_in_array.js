//This program is to find the largest element in an array 

let max=0;
let arr=[10,20,89,34,899,909,12,344];

for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
}
console.log("Largest element in the array is:-->",max)