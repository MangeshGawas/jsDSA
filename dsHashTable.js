class HashTable{
    constructor(size=50){
        this.bucket = new Array(size)
        this.size = size
        
    }

    _hash(key){
        let hash = 0
        for(let i = 0; i<key.length;i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size;
}

    set(key,value){
        const index = this._hash(key)
        if(!this.bucket[index]){
            this.bucket[index] = []
            
        }
        this.bucket[index].push([key, value])
    }

    get(key){
        const index = this._hash(key)
        if(!this.bucket[index]) return null
        for(let bucket of this.bucket[index]){
            if(bucket[0]==key){
                return bucket[1]
            }
        }
        return null
    }

    
}

const hashTable = new HashTable()
hashTable.set('Name', "Virat Kholi")
hashTable.set('age',35)
console.log(hashTable.get('Name'))
console.log(hashTable.get('age'))