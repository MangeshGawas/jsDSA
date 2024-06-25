const set = new Set([1,2,3,4,4,5])

set.add(6)
console.log(set.has(4))
console.log(set)
console.log(set.size)

// set.clear()

for(const item of set){
    console.log(item,'<--')
}