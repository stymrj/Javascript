let months = ["january","july","march","august"];
//july,june,march,august

months.shift();
'january'
months
(3) ['july', 'march', 'august']
months.shift();
'july'
months.unshift("june");
3
months.unshift("july");
4
months;
(4) ['july', 'june', 'march', 'august']
/*
----------------------------------------------------------------------------------------------------------
                  ----------------- Practice Questions --------------------------
  
Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0]

Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
positive number].
For example: for array [7, 9, 0, -2] and n=3
Print, [9, 0, -2]

Qs3. Write a JavaScript program to check whether a string is blank or not.

Qs4. Write a JavaScript program to test whether the character at the given (character)
index is lower case.

Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

Qs6. Write a JavaScript program to check if an element exists in an array or not.
----------------------------------------------------------------------------------------------------------
*/

let arr = [7,9,0,-2]
let n = 3
arr.splice(0,n)
//------------------------------------------------------------------------

let arr = [7,9,0,-2]
let n = 2
arr.slice(arr.length-n)

//------------------------------------------------------------------------

let str ="satyam"
if(str.length==0){
    console.log("String is blank..")
}else{
    console.log("String is NOT Blank")
}
//String is NOT Blank
//------------------------------------------------------------------------



let str = "sAtYAmgUPta"
let idx = 1

if(str[idx]==str[idx].toLowerCase()){
    console.log("already in lowerCase")
}else{
    console.log("nahi hai bhaiya...")
}
//nahi hai bhaiya...
//------------------------------------------------------------------------


let str = "     hi,satyam!     "
console.log("Before: " ,str)
console.log("After: ", str.trim())

//Before:       hi,satyam!     
//After:  hi,satyam!

//------------------------------------------------------------------------
let arr = [1,2,4,6,7,8,0]
arr.includes(7)
//true

key = 6
if(arr.indexOf(key) == -1){
    console.log("Not present")
}else{
    console.log("present")
}
//present
