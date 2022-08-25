// DUPLICATE ELEMRNT FIND
const array3=[2,5,2,6,2,4,5,4]
// const result=[...new Set(array3)]
const result=array3.filter((item,index)=>array3.indexOf(item)===index)
console.log(result);