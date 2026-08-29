//This program is to convert all the elements of an array to lowercase

let arr=["HELLO","WORLD","HTML"];

for(let i=0;i<arr.length;i++)
{
    arr[i]=arr[i].toLowerCase();
}

console.log("Array after converting all elements to lowercase:-->",arr)