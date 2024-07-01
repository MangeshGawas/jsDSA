class Queue{
    constructor(){
        this.item = []
    }

    enqueue(element){
        this.item.push(element)
    }

    dequeue(){
        if(this.isEmpty()) return "Underflow"
        return this.item.shift()
    }

    front(){
        
    }
}