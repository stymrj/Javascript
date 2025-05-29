//Create a function for rolling a dice 1 to 6

function rollDice(){
  let res = (Math.floor(Math.random()*6))+1 // from 1 to 6
  return res
}
rollDice(); //calling


// Create a function for finding the average of the three numbers - taking as arguments
function avg(a,b,c){
    return (a+b+c)/3
}
avg(1,2,3) //calling by passing arguments



//Create a function for printing the multiple table

function print_multipleTable(n){
    for(let i=1;i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`)
    }
}
print_multipleTable(5);


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

// Create a function to concat all the string present in the array.

