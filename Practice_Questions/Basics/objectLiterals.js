// Object Literals exampole
const student = {
    name : "satyam",
    age : 23,
    city : "Noida",
    phone : +917091298828
}

let student2 = ["satyam",22,"Delhi"]

// Create an object literals for the properties of thread/twitter posts

const post = {
  username : '@satyamraj',
  content : "This is my first post.",
  likes : 250,
  repost : 5,
  tags : ['@careergrid', '@javascript']
}

//accessing the data with two methods
post.username; //1
'@satyamraj'
post['repost'] //2
5
﻿
//creating random integer from 1 to 10

Math.floor(Math.random()*10)+1;

/*
User select a range, and our code generate a random number and user guess and if he win congrutulate him..or quit
*/

const range = prompt("Enter the range like upto...?")
const randomNum = Math.floor(Math.random()*range)+1;

console.log("Random Number is : ",randomNum)
let guessNum = prompt("Guess a number...")

while(true){
    if(guessNum == "quit"){
        console.log("Quitting...")
        break;
    }
    if(guessNum==randomNum){
        console.log("You won..")
        break;
    }else if(guessNum<randomNum){
        guessNum = prompt("Ooopss!! Guess Again... \n Hint: You have guessed a small number")
    }else if(guessNum>randomNum){
        guessNum = prompt("Ooopss!! Guess Again... \n Hint: You have guessed a Larger number")
    }else{
        
    }
}

/*
Qs1. Create a program that generates a random number representing a dice roll.
[The number should be between 1 and 6].

Qs2. Create an object representing a car that stores the following properties for the
car: name, model, color.
Print the car’s name.

Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States.
*/

Math.floor(Math.floor()*6)+1;
//----------------------------------------------------------------------------------------------------
const car = {
    name : 'mercedes',
    launch_year : 2024,
    model : '202SUP_CAR29',
    color : 'black'    
}
car['color']
//'black'
car.launch_year;
//2024

//----------------------------------------------------------------------------------------------------

const person = {
    name : 'satyam raj',
    age : 23,
    city : 'sheohar'
}

person;
//{name: 'satyam raj', age: 23, city: 'sheohar'}
person.city = 'Noida'
//'Noida'
person
//{name: 'satyam raj', age: 23, city: 'Noida'}
person.country = 'India'
//'India'
person.phone_number = '+917091298828'
//'+917091298828'
person
//{name: 'satyam raj', age: 23, city: 'Noida', country: 'India', phone_number: '+917091298828'}
