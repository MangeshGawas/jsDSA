//stack 
//LIFO
//stack of plates
//Last plate inserted and also the first plates removed
//push,pop
class Stack{

    constructor(){
        this.item = []
    }

    push(element){
        this.item.push(element)
    }

    pop(){
        this.item.pop()
    }

    peek(){
        if(this.isEmpty()){
            return "No element present in the stack"
        }
            else{
            return this.item[this.item.length - 1]
        }
        }

    isEmpty(){
        return this.item.length === 0
    }

    printStack(){
        for(let element of this.item){
            console.log(element)
        }
    }
    
}

let stack1 = new Stack()
stack1.push(10)
stack1.push(20)
stack1.push(30)
stack1.push(40)
stack1.printStack()
stack1.pop()
console.log("after pop")

stack1.printStack()
 