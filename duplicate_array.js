

let arr = [21,445,56,6,33,56,34,34,6]
let dup_arr = [], index= 0;
for(let i=0; i<arr.length-1;i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i] === arr[j]){
            dup_arr[index] = arr[i]
            index++
        }
    }
}
console.log(dup_arr)