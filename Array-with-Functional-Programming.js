/*
Given Task:
    1. Prepare a Product Array(id,name, price)
    2. make a copy of this array using 2/3 ways but without spread operator
    3. Delete those prices whose price is greater than 2000
    4. Find MAX & MIN price
    5. Store all shoes price in currrency format
    6. ASC order on name/price
*/
// Product Array
const products = [{id:101,name:"puma",price:2000},{id:102,name:"addidas",price:3000},{id:103,name:"khadims",price:1250}]

products.filter(product=>product.price>2000);

// different ways to create a copy of the array products -- using filter, map, reduce
const aux = products.filter(product=>true)

const aux2 = products.map(product=>product);

const aux3 = products.reduce((acc,e)=>{
    acc.push(e)
    return acc;
},acc=[])

// deleting based on a given case 

products.filter(product=>product.price>=1200);

//finding max & min price

products.reduce((max,product)=>{
    if(product.price>max){
        max = product.price
}
    return max
},0)

//min price from the array 
products.reduce((min,product)=>{
    if(product.price<min){
        min = product.price
    }
    return min
},Number.MAX_SAFE_INTEGER)
