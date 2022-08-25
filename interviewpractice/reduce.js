const arr=[2,4,4,5,67,80]
// const result=arr.reduce((acc,curr)=>acc>curr);
const result=arr.reduce((acc,curr)=>Math.max(acc,curr))
console.log(result)