// vanila es5
function name(){

}


// fatarrow es6
// const name=()=>{

// }
function add1(num1,num2){
    return(num1+num2)
}
console.log(20,40)
function biggrnum(num1,num2){
    if(num1>num2){
        console.log("num1",num1,"is greater")
    }else{
        console.log("num1",num2,"is greater")
    }
    console.log(biggrnum(30,5))
    

}
function smallNum(...nums2){
return nums2.reduce((acc,cur)=>acc<cur?acc:cur)
}
console.log(smallNum(9,2,7,1,6))

const reversefun=(strng1)=>{
    return strng1.split(" ").reverse().join(" ")

}
console.log(reversefun("pdac is in nanded"))