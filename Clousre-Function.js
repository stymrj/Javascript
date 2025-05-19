/*
Closure Function - It allows a fucntion to access the variable from its outer function even after it has finished their execution.
----------------------------------------------
Create a Calculator Functionality
Cal(first,second)
add() sub() mul () div()
----------------------------------------------
*/

function calc(first,second){
  var add = function(){
    return first+second
  }
  var sub = function(){
    return first-second
  }
  var mul = function(){
    return first*second
  }
  var add = function(){
    return first/second
  }
  return {add,sub,mul,div} //obj short handle style key-pair value type
}

var obj = calc(10,20); // this function returns the object so we will store it 

//accessing method 1. using dot operator 

obj.add(); 
obj.sub();

//accessing method 1. using Associates
var input = 'add' // keep changing here only no need to change in code
obj[input]();

obj[input]();  //change input to 'sub' and so on....
obj[input]();
obj[input]();
obj[input]();

/*
        Results 
  1. Not able to directly access the variables 
  2. Even our function is not directly accessible its only using the object.
/*

/* examle -2


function adder(){
let count =0
function counter(){
    count++
    return count;
}
    return counter;
}

var add = adder();
add(); >> 1
add(); >> 2
*/
