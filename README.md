<h1 align="center"> Interview Questions </h1>

<h2>Q1. Write a program to find duplicates in the array ?</h2>
<h3>let arr = [21,445,56,6,33,56,34,34,6]

let dup_arr = [], index= 0
for(let i=0; i<arr.length-1;i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            dup_arr[index] = arr[i]
            index++
        }
    }
}
console.log(dup_arr)</h3>
