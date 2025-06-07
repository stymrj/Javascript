//Create a function for rolling a dice 1 to 6

function rollDice(){
  let res = (Math.floor(Math.random()*6))+1 // from 1 to 6
  return res
}
rollDice(); //calling

// ---------------------------------------------------------------------------------------------------
// Create a function for finding the average of the three numbers - taking as arguments
function avg(a,b,c){
    return (a+b+c)/3
}
avg(1,2,3) //calling by passing arguments


// ---------------------------------------------------------------------------------------------------
//Create a function for printing the multiple table

function print_multipleTable(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`)
    }
}
print_multipleTable(5);

// ---------------------------------------------------------------------------------------------------
// Create a function to calculate sum of numbers upto N

function sum_uptoN(n){
    let sum = 0
    while(n>0){
        sum += n
        n--
    }
    return sum
}
console.log(sum_uptoN(10))

// ---------------------------------------------------------------------------------------------------
// Create a function to concat all the string present in the array.

function conCat(str){
    let ans = ''
    for(let i=0;i<str.length;i++){
        ans += str[i]
    }
    return ans
}
console.log(conCat(['ai','ai','ai','ai','ai','ai','ai',]))

// ---------------------------------------------------------------------------------------------------
// High Order Function


function multiGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
function greet(){
    console.log("Hey! Satyam ")
}

console.log(multiGreet(greet,5))

//---------------------------------------------------------------------------------------------------
// ODdd Even Test

let request = 'odd'
function oddEvenTest(request){
    if(request == 'odd'){
        return function(n){
            if(n%2!=0){
                console.log("ODD")
            }
        }
    }else if(request == 'even'){
        return function(n){
            if(n%2==0){
                console.log("ODD")
            }
        }
    }
}


/*
---------------------------------------------------------------------------------------------------
Calculator 
*/

const calculator = {
    add : function(a,b){
        return a+b
    },
    sub :function(a,b){
        return a-b
    },
    mul : function(a,b){
        return a+b
    },
    div : function(a,b){
        return a/b
    },
    mod : function(a,b){
        return a%b
    }
}



/*
---------------------------------------------------------------------------------------------------
Qs1. Write a JavaScript function that returns array elements larger than a number.
*/

let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 4

function newArray (arr,num){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i])
        }
    }
}
newArray(arr,num)
/*
---------------------------------------------------------------------------------------------------
 Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh”
*/

let str = 'abcdabcdefgggh'
function uniqueChar(str){
    let ans = ''
    for(let i=0;i<str.length;i++){
        let currLetter = str[i]
        if(ans.indexOf(currLetter) == -1){//present to nahi h na
            ans += currLetter
        }
    } 
    return ans
}
console.log(uniqueChar(str))


/*
---------------------------------------------------------------------------------------------------
Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] 
output :
"United States of America"
*/

let country = ["Australia", "Germany", "United States of America"]

function longName(str){
    let ansIdx = 0
    for(let i=0;i<str.length;i++){
        let currLen = str[i].length
        let ansLen = str[ansIdx].length
        if(currLen>ansLen){
            ansIdx = i
        }
    }
    return str[ansIdx]
}

console.log(longName(country))


/*
---------------------------------------------------------------------------------------------------
Write a JavaScript function to count the number of vowels in a String argument.
*/


let str = 'afetg aefrfereidsfrioddosuu'
function vowelsCount(str){
    let count = 0
    for(let i=0;i<str.length;i++){
        if(str[i]=='a' ||
            str[i]=='e' ||
            str[i]=='i' ||
            str[i]=='o' ||
            str[i]=='u'
        ){
            count++
        }
    }
    return count
}

console.log(vowelsCount(str))



/*
---------------------------------------------------------------------------------------------------
Qs5. Write a JavaScript function to generate a random number within a range
(start, end).
*/


function randomInRange(start,end){
    let range =  end - start 
    return Math.floor(Math.random()*range)+start
}

console.log(randomInRange(40,60))
console.log(randomInRange(40,60))
