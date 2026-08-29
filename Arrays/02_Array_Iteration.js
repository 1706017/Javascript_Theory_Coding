
//Iterating through an array using a for loop 

let skills = ['JS','Playwright','Cypress','Selenium','Java']

console.log("My skills are as follows :--->")
for(let i=0;i<skills.length;i++){
    console.log(skills[i]);
}

// for in loop 

let empids =[101,102,103,104]

for(let i in empids){
    console.log(i); // it will return the index of the array elements 
    console.log(empids[i]); // it will return the value of the array elements
}

// for of loop

let empnames = ['John','Smith','David','Peter']

for (let i of empnames){
    console.log(i); // it will return the value of the array elements
}
