const arr1=[3,4,5,6,7,8,9]
const result=arr1.reduce((acc,curr)=>acc+curr)
console.log(result)
const arr2=[3,4,5,6,7,78,89,57]
const result1=arr2.reduce((acc,curr)=>acc<curr?acc:curr)

const arr3=[3,4,5,6,7,78,89,57]
const result2=arr3.reduce((acc,curr)=>Math.max(acc,curr))
console.log(result2)