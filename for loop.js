//for loop
/*
for(i=0;i<=5;i++){
    console.log(i);
}*/
/*
let fruits=["apple","orange","banana","mango"];
for(let i=0;i<fruits.length;i++){
    console.log(i);
}
*/
//sum of no 1-10
/*
let sum=0;
for(let i=0;i<=10;i++){
    sum+=i;
}
console.log(sum);
*/
//array elements in rev order
/*let arr=[1,2,3,4,5,6,7,8,9];
for(i=arr.length-1;i>=0;i--){
    
    console.log(i);
}*/

//max in arr
/*
let array=[2,34,55,66];
let max=array[0];
for(let i=1;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }
}
console.log(max);
*/

//table
/*let num=3;
for(let i=1;i<=10;i++){
    console.log(`${num} X ${i} = ${num*i}`);
}
*/
/*
let n=2;
for(let i=1;i<=20;i++){
    console.log(`${n} X ${i} = ${n*i}`);
}
*/


//count even nos in an array

let a=[34,56,34,55,65];
let count=0;
for(let i=0;i<a.length;i++){
    if(a[i]%2===0){
        count++;
    }
}
console.log(count);


