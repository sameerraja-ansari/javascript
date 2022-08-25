const array=[10,20,30,]

 const data=[
    {name:"Sam",
    age:20,
    city:"Nanded",
    married:"No"

    },
    {name:"Ram",
    age:22,
    city:"Pune",
    married:"yes"

    },
    {name:"Sachin",
    age:24,
    city:"Mumbai",
    married:"No"

    },
    {name:"Rohit",
    age:27,
    city:"Banglor",
    married:"yes"

    },

];

const result=data.map((item)=>item.name.toUpperCase())
console.log(result)

const filter=data.filter((item)=>item.married==="yes")
console.log(filter)
const filter1=data.filter((item)=>item.age)
console.log(filter1)
data.forEach((item)=>item>20?
item.retired=true:
item.retired=false
)
console.log(data)
for(i=0;i<data.length;i++){
    data[i].age>20?
    data[i].retired=true:
    data[i].retired=false
}
console.log(data)

