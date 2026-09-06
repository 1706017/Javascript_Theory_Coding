//This program will showcase the use of all built in functions of array in javascript 

//1. push() method
// It adds one or more elements to the end of an array and returns the new length of the array.

let arr=[1,2,3,4,5];
let newLength=arr.push(7,8,9);
console.log("New Length of the array after push operation is :-->",newLength);
console.log("New elements in the array after push operation is :-->",arr);

//2. unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

let arr1=["HTML","CSS","JS"];
let newLength1=arr1.unshift("Python","Java");
console.log("New Length of the array after unshift operation is :-->",newLength1);
console.log("New elements in the array after unshift operation is :-->",arr1);


//3. pop() method removes the last element from an array and returns that element.

let arr2=["Amrit","Manas","Rohit","Saurabh"];
let removed_person = arr2.pop();
console.log("New elements in the array after pop operation is :-->",arr2);
console.log(removed_person,"is removed from the array after pop operation");

//4. shift() method removes the first element from an array and return that removed element.

let skills=["JS","Python","Java","HTML","CSS"];
let skill_removed=skills.shift();
console.log("New elements in the array after shift operation that removal of first element is :-->",skills);
console.log(skill_removed,"is removed from the array after shift operation");

//5. concat() method is used to merge two or more arrays. This method is immutable which means it does not 
// change the existing arrays but instead returns a new array.

let skills1=["HTML","CSS","JS"];
let skills2=["Python","Java"];
let skills3=["MYSQL","Oracle","Azure cloud"];

let my_combined_skills=skills1.concat(skills2,skills3);
console.log("New array after concat operation is :-->",my_combined_skills);
console.log("Old array after concat operation remains unchanged :-->",skills1);
console.log("Old array after concat operation remains unchanged :-->",skills2);


//6. slice() method returns a portion of an array it does not change the original array.
// it takes two arguments the start index and the end index where the end index is not included in the returned
// array.

let total_employees = ["Amrit","Manash","Rohit","Sourabh","Kumar","Roshan","Tiwary","Anant"];
let tester=total_employees.slice(2,4);
console.log("Total employees in the company are :-->",total_employees);
console.log("Tester employees in the company are :-->",tester);

//7. indexOf() method returns the first index at which a given element can be found in the array
// or returns -1 if it is not present in the array.

let games = ["Cricket","Football","Hockey","Tennis","Badminton"];
let index=games.indexOf("Hockey");
console.log("Index of Hockey in the games array is :-->",index);
console.log("Index of Basketball in the games array is :-->",games.indexOf("Basketball"));

//8. at() method returns the element at the specified index.
//It can also accept negative integers, which count back from the last item in the array.

let movies=["Avengers","Ironman","Spiderman","Batman","Superman"];
console.log("Element at index 2 is :-->",movies.at(2));
console.log("Element at index -1 is :-->",movies.at(-1));

//9. includes() method returns true if an array contains a specified element, otherwise returns false.

let trains=["Rajdhani Express","Shatabdi Express","Duronto Express","Garib Rath Express"];
console.log("Is Rajdhani Express present in the trains array :-->",trains.includes("Rajdhani Express"));
console.log("Is Tejas Express present in the trains array :-->",trains.includes("Tejas Express"));

//10. toString()  method converts an array to a string of (comma separated) array values.

let my_total_skill_list=["HTML","CSS","JS","Python","Java"];
console.log("Array converted to string is :-->",my_total_skill_list.toString());
console.log("Type of my_total_skill_list is :-->",typeof(my_total_skill_list));
console.log("Type of my_total_skill_list.toString() is :-->",typeof(my_total_skill_list.toString()));

//11. reverse() method reverses the order of the elements in an array. The first array element becomes the last and the last becomes the first.

let my_numbers=[1,2,3,4,5];
console.log("Array before reverse operation is :-->",my_numbers);
my_numbers.reverse();
console.log("Array after reverse operation is :-->",my_numbers);
