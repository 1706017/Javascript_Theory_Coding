//Here in this program we will search for an element in an array and return true if found else return false

let arr=[39,89,99,67,890]

let target_ele=39;
let flag=false;

for(let i=0;i<arr.length;i++)
{
    if(arr[i]===target_ele)
    {
        flag=true;
        break;
    }
}

if(flag){
    console.log("Element found in the array")
}
else{
    console.log("Element not found in the array")
}