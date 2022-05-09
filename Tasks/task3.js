/*1. convery an array to string without tostring

let arr=['H','E','L','L','O']
console.log(arr)
arr1=arr.join('')
console.log(arr1)*/


/*2. function to accept an item and push that item to an array

let item=prompt('Enter item to add into array :')
PushtoArray(item)
function PushtoArray(item){
    let arr=[]
    arr.push(item)
    console.log(arr)
}

3.function to accept an item and pop that item to an array
let item=prompt('Enter item to remove from array :')
PopfromArray(item)
function PopfromArray(item){
    let arr=[]
    arr.pop(item)
    console.log(arr)
}

4. function to accept an item,index and add that item to an array at a given index*/

/*let item=prompt('Enter item to add into array:')
let pos=Number(prompt('Enter the index position to add item in'))
PushtoArray(item,pos)
function PushtoArray(item,pos){
    let arr=['a','b','c','d']
    console.log(arr)
    arr[pos]=item
    console.log(arr)
}*/

/*5.Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with
values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
For instance:
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)*/