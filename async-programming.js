//async vs sync
//sync - cpu centric
function add(){
  var a = 12
  var b = 18
  var c = a + b
  console.log(c)
}

//sync

console.log("Started");
setTimeout(()=>{
    console.log("Bhai m bbhi aa gyaa...")
                },4000)
console.log("Ended")




function db(){
    return 4000
}
var time = db()
console.log("Started");
setTimeout(()=>{
    console.log("Bhai m bhi databse le ke aa gyaa...")
                },time)
console.log("Ended")
