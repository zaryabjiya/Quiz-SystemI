#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta("****** WELCOME TO QUIZ_PRO ******\n\t\t"));

let marks: number = 0
//QUESTION 1
let num1 = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: chalk.yellow("TypeScript supports which type of data typing?"),
        choices:["a) Static typing" , "b) Dynamic typing" , "c) Strong typing" , "d) Weak typing"]
    }
])
if(num1.question1 === "a) Static typing"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}

// QUESTION 2
let num2 = await inquirer.prompt([
    {
        name: "question2",
        type: "list",
        message: chalk.yellow("Which keyword is used to declare a variable in TypeScript?"),
        choices:["a) let" , "b) var" , "c) const" , "d) All of the above"]
    }
])
if(num2.question2 === "d) All of the above"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}

// QUESTION 3
let num3 = await inquirer.prompt([
    {
        name: "question3",
        type: "list",
        message:chalk.yellow( "Which of the following is NOT a valid TypeScript data type?"),
        choices:["a) string" , "b) array" , "c) boolean" , "d) number"]
    }
]) 
if(num3.question3 === "b) array"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}


// QUESTION 4
let num4 = await inquirer.prompt([
    {
        name: "question4",
        type: "list",
        message:chalk.yellow( "What is the TypeScript file extension?"),
        choices:["a) .js" , "b) .tsx" , "c) .ts" , "d) .typescript"]
    }
])
if(num4.question4 === "c) .ts"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}

// QUESTION 5
let num5 = await inquirer.prompt([
    {
        name: "question5",
        type: "list",
        message: chalk.yellow("What is the purpose of using interfaces in TypeScript?"),
        choices:["a) To define the structure of an object" , "b) To perform mathematical operations" , "c) To create animations" , "d) To manipulate strings"]
    }
])
if(num5.question5 === "a) To define the structure of an object"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}


// QUESTION 6
let num6 = await inquirer.prompt([
    {
        name: "question6",
        type: "list",
        message: chalk.yellow("Which TypeScript feature allows you to create reusable code components?"),
        choices:["a) Decorators" , "b) Modules" , "c) Interfaces" , "d) Generics"]
    }
])
if(num6.question6 === "b) Modules"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}

//QUESTION 7
let num7 = await inquirer.prompt([
    {
        name: "question7",
        type: "list",
        message: chalk.yellow("Which of the following is a benefit of using TypeScript?"),
        choices:["a) Faster runtime performance" , "b) Built-in browser compatibility" , "c) Automatic memory management" , "d) Improved code maintainability and readability"]
    }
])
if(num7.question7 === "d) Improved code maintainability and readability"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}


//QUESTION 8
let num8 = await inquirer.prompt([
    {
        name: "question8",
        type: "list",
        message: chalk.yellow("Which TypeScript feature allows defining types that can hold multiple data types?"),
        choices:["a) Union Types" , "b) Intersection Types" , "c) Any Types" , "d) Tuple Types"]
    }
])
if(num8.question8 === "a) Union Types"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}


//QUESTION 9
let num9 = await inquirer.prompt([
    {
        name: "question9",
        type: "list",
        message: chalk.yellow("Which symbol represents the type assertion in TypeScript?"),
        choices:["a) {}" , "b) <>" , "c) ()" , "d) []"]
    }
])
if(num9.question9 === "c) ()" ){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}


//QUESTION 10
let num10 = await inquirer.prompt([
    {
        name: "question10",
        type: "list",
        message: chalk.yellow("What is TypeScript?"),
        choices:["a) A superset of JavaScript" , "b) A programming language developed by Microsoft" , "c) Both a and b" , "d) None of the above"]
    }
])
if(num10.question10 === "c) Both a and b"){
    console.log(chalk.green("Correct Answer"));
    marks++   
}else{
    console.log(chalk.red("Incorrect Answer"));
}


console.log(chalk.magenta("\n****** YOUR RESULT ******\n\t\t"));

if(marks >= 5){
console.log(chalk.bgGreen(`\n CONGRATULATIONS! *You did great*\n Your marks is ${marks}/10`));
}
else{
    console.log(chalk.bgCyanBright(` You need to work hard! GoodLuck\n Your marks is ${marks}/10`));
    
}

console.log(("\n\t__________Thankyou For Participating__________"));
