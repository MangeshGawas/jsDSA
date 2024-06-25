//Key-value pair

const obj = {
    name:"julie",
    age:25,
    callName:function(){console.log("here is the name from same object -->",this.name)},
    callAge:function(){console.log(this.age)}
}

obj.hobby ="cricket"

console.log(obj.name,"Name")
console.log(obj['age'],"age")
console.log(obj)

delete(obj.hobby)
console.log(obj,"after deleting the object")

obj.callName()
obj.callAge()