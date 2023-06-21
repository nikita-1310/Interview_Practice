class person{ // encapsulation, abstraction, polymorphism, inheritance
    constructor(name, age, nation){
        this.name = name; 
        this.age = age; 
        this.nation = nation; 
    }
    increment(){
        this.age++;
    }
    display(){
        console.log("Age is "+ this.age);
    }
}

let boy = new person("Nikita", 23, "Indian")
boy.display()
boy.increment()
boy.display()