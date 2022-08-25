// Find the lenghty word frim sentece
// "I AM FROM MAHARASTRA"
const biggerword=(num)=>{
return num.split (" ") .reduce((acc,curr)=>acc>curr?acc:curr)
}
console.log(biggerword("I AM FROM MAHARASHTRA")) 