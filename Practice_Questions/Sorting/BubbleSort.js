/*
We are sorting an array using Bubble Sort, a basic and easy-to-understand sorting algorithm.

💡 How Bubble Sort Works:
- Go through the array from start to end.
- Compare each number with the one next to it.
- If the number is greater, swap them.
- After each pass, the largest number moves to the end (like a bubble rising up).
- Repeat the process until the array is fully sorted.

⚡ Optimization:
If no swaps happen in a round, it means the array is already sorted.
*/

let arr = [2,12,4,35,76,1,5,14]
// let arr = [1,2,3,4,5]
let isSorted = true;

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-1-i;j++){
        if(arr[j]>arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
            isSorted = false;
        }
    }
}
if(isSorted == true){
    console.log("Already Sorted")
}
console.log(arr)
