const arr = [1,2,3,"dummy"]
console.log(arr)
console.log(arr[2])
arr.push(4)
arr.unshift(0)
console.log(arr,"array after push value 4 and unshift 0")

arr.pop()
arr.shift()
console.log(arr," after array method")


for(const item of arr){
    console.log(item,"array item")
}

//method like filter, reduce, map, slice and splice
//Some ECMA script inbuilt functions
//forEach
arr.forEach((item)=>console.log("-->",item))

//filter method
even = arr.filter((x)=>x%2==0)
console.log(even)
