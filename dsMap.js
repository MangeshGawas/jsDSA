//unordered collection
//key-value pairs
//has iterable

const map = new Map([['a',1],['b',2],['c',3]])

map.set('d',4)
console.log(map.has('a'))
map.delete('c')
console.log(map)

for(const[key,value] of map){
    console.log(`${key}: ${value}`)
}
