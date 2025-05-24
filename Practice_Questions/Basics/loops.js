// Printing all odd numbers from 1 to n

let n = 15
for(let i=1;i<=n;i++){
    if(i%2 != 0){
        console.log(i)
    }
}

// Printing all even numbers from 1 to n

let n = 15
for(let i=1;i<=n;i++){
    if(i%2 == 0){
        console.log(i)
    }
}

//Printing multiple of a table
let n = 5
for(let i=1;i<10;i++){
    console.log(`${n} X ${i} = ${n*i}`)
}

// Guessing the Favourite Number 

let num = prompt("Lets play a Game,\n Guess a Number from 1 to 100 \n press 0 to exit")
let key = 12
while(num != key && num != 0){
    num = prompt("Predict again...")
}
if(num==key){
    console.log("You have won!")
    alert(`Congrats! \n We Both have guessed ${key}`)
    }

// To_DO_App

/*
        To_DO App
        1. Add
        2. list
        3. Delete
        4. Quit
*/

let req = prompt("Choose your Request \n 1. Add \n 2. List \n 3. Delete \n 4. Quit")
let task = []

while(true){
    if(req == 4){
        console.log("Quittting....")
        break;
    }else if(req == 1){
        let add = prompt("Enter the task you want to add in list..")
        task.push(add);
    }else if(req == 2){
        console.log("----- Task you have to do --------");
        for(let i=1;i<=task.length;i++){
            console.log(`${i}. ${task[i]}`);
        }
        console.log("----------------------------------");
        break
    }else if(req ==3){
        let idx = prompt("Please enter task Index to delete")
        task.splice(idx,1)
        break
    }else{
        console.log("wrong request...")
    }
    req = prompt("Choose your Request \n 1. Add \n 2. List \n 3. Delete \n 4. Quit")
}
