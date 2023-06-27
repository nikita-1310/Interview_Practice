
const arr= [3,445,6,86,3]
let sum = 0

// 1 way
// for(let i=0;i<arr.length;i++){
//     sum += arr[i]

// }

// 2 way
arr.forEach(x => sum+=x)
console.log(sum);