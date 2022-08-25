const number=[5,6,9,32,14];

// const even=number.filter((item)=>item%2 ===0);
// const result=even.map((item)=>item*2)
// console.log(result)
const even=number.filter((item)=>item%2 ===1);
const result=even.forEach((item)=>item*2)
console.log(result)
