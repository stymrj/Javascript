/*
-----------------------------------------------------------------------------------------
                                Basics 
-----------------------------------------------------------------------------------------

Checking Price of the Poprcorn?
-----------------------------------------------------------------------------------------
let input = prompt("Enter the size of the bucket..")
switch(input){
    case 'XL' :
        console.log("Price is 250")
        break
    case 'L' :
        console.log("Price is 200")
        break
    case 'M' :
        console.log("Price is 150")
        break
    case 'S' :
        console.log("Price is 100")
        break
    default:
        console.log("Invalid Input")
    
}


-----------------------------------------------------------------------------------------
Good String or Not?


let str = prompt("Enter a string..")

if(str.length>3 && str[0] == 'a'){
    console.log("Good String")
}else{
    console.log("Not a good string..")
}


-----------------------------------------------------------------------------------------
WeekDays Printing

let day = Number(prompt("Enter No of Day"))

switch(day){
    case 1: 
    console.log("Sunday")
    break

    case 2: 
    console.log("MOnday")
    break

    case 3: 
    console.log("Tuesday")
    break

    case 4: 
    console.log("Wednesday")
    break

    case 5: 
    console.log("Thursday")
    break

    case 6: 
    console.log("Friday")
    break

    case 7: 
    console.log("Saturday")
    break

    default:
    console.log("Please enter 1 to 7 only..")
}

-----------------------------------------------------------------------------------------
divisible by 10 then good

let num = Number(prompt("Enter Number: "))

if(num%10==0){
    console.log("Good Number")
}else{
    console.log("Bad!")
}

-----------------------------------------------------------------------------------------
Printing Name and Age by user input


let fname = (prompt("Enter First Name: "))
let lname = (prompt("Enter Last Name: "))
let age = Number(prompt("Enter your Age: "))

alert(`Hi ${fname} ${lname} your age is ${age} !`)


-----------------------------------------------------------------------------------------
Printing Months in Quarter


let quart = Number(prompt("Enter the Quarter Number"))

switch(quart){
    case 1:
        alert(`In ${quart}st Quarter these are the months \n January \n February \n March`)
        break
    case 2:
        alert(`In ${quart}nd Quarter these are the months \n April \n May \n June`)
        break
    case 3:
        alert(`In ${quart}rd Quarter these are the months \n July \n August \n September`)
        break
    case 4:
        alert(`In ${quart}th Quarter these are the months \n October \n November \n December`)
        break
    default:
        alert("Invalid...")
}

-----------------------------------------------------------------------------------------
Golden String


let str = prompt("Enter your string")

if(str[0]=='a' || str[0]=='A' && str.length>5){
    alert("Golden String")
}else{
    alert("Bekar hai bhaiya....")
}


-----------------------------------------------------------------------------------------
Largest of three Number


let num1 = Number(prompt("Enter 1st Number: "))
let num2 = Number(prompt("Enter 2nd Number: "))
let num3 = Number(prompt("Enter 3rd Number: "))

if(num1>num2 && num1 > num3){
    alert("Number 1 is greater")
}else if(num2>num3){
    alert("Number 2 is greater")
}else{
    alert("Number 3 is greater")
}

-----------------------------------------------------------------------------------------
Check if all numbers have same last digit
*/

let n = 5
let nums = []

let allSame = true
for(let i=0;i<n;i++){
    let input = prompt("Enter Number")
    nums.push(input)
}
console.log(nums)

let lastDigit = nums[0]%10

for(let item of nums){
    if(item%10!==lastDigit){
        allSame = false;
        break
    }
}
if(allSame==true){
    console.log("Condition matched")
}else{
    console.log("Condition Not matched")
}

