const name=["Pune","Mumbai","Goa","Banglore","Bihar","nanded"]
const result=name.filter((item)=>item.StartsWith("B"))
let all=result.map((item)=>item.upperCase())
console.log(all)
answer is not give

const names=["sameer","saleem","jakirbhai"]
const cities=["mumbai","nanded","bihar"]
// const result=[...cities,...names]                concat,spreadoperator
const result=cities.concat(names)
console.log(result)

var a=10
function add(){
    return a=20                              not answer
    console.log(a)
}
setTimeout(()=>{
    console.log("helloworld")                 time setout
}, 3000)
setInterval(()=>{
    console.log("hi")                            time interval
},1000)
 setTimeout(()=>{
    clearInterval(mytimer)                      set timer
 },5000)

for ( i=0;i<10;i++){
setTimeout(()=>{                                important var and let
    console.log(i)                            var=0  ans=10,10.10
},1000)                                        let=0 ans=0,1,2,4,5,6,7,8 ,9
}
for(let i=0; i<5; i++){
    setTimeout(()=>{
      console.log(i)
    },0
    )
// }
const nums=[2,4,5,6,7,8]
let sum=0;
for(i=0;i<nums.length;i++){
    sum=sum+nums[i]
    // console.log(sum)
}
console.log(sum)

find vowels from string
let str="somethingiiyfikguayhhvi"
let result=str.match(/[aeiou]/gi)
console.log(result)
function sayHi(){
    var name="ayush"
    console.log(name);                                hosting
    let age=20
    console.log(age)
    
}
sayHi()
let number=0
console.log(number++)                           post increament
console.log(++number)                            pre increament      
console.log(number)
