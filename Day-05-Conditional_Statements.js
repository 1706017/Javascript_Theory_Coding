//Code for conditional statements

//if else statement practice code 

let age=30

if (age >=18)
{
    console.log("You are eligible to vote")
}
else{
    console.log("You are not eligible to vote")
}

//Output for the above code : 
//You are eligible to vote

//code for else if ladder practice code

let marks=75

if (marks>=90)
{
    console.log("You got A grade")
}
else if (marks>=80)
{
    console.log("You got B grade")
}
else if (marks>=70)
{
    console.log("You got C grade")
}
else if (marks>=60)
{
    console.log("You got D grade")
}
else if (marks>=50)
{
    console.log("You got E grade")
}
else{
    console.log("You got F grade and you are failed")
}

//Output for the above code:

//You got C grade


//code for switch case statement practice code
// here if we do not give break statement then it will execute all the cases after the matching case untill it finds the break stmt 
let day=3

switch(day)
{
    case 1: console.log("Today is Monday")
            break
    case 2: console.log("Today is Tuesday")
            break
    case 3: console.log("Today is Wednesday")
            break
    case 4: console.log("Today is Thursday")
            break
    case 5: console.log("Today is Friday")
            break
    case 6: console.log("Today is Saturday")
            break
    case 7: console.log("Today is Sunday")
            break
    default: console.log("Invalid day")
}

//Output from the above code
//Today is Wednesday
