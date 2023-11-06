{

    // OOP => object oriented programming

    // class Person {
    //     name: string;
    //     constructor(name: string) {
    //         this.name = name;
    //     }
    //     introduceSelf() {
    //         console.log(`Hi i am ${this.name}`);
    //     }
    // }

    // const kakon = new Person("John");

    // const roni = new Person("Roni");

    // kakon.introduceSelf();
    // roni.introduceSelf();





    // class Animal {
    //     public name: string;
    //     public species: string;
    //     public sound: string;
    //     constructor(name: string, species: string, sound: string){
    //         this.name = name;
    //         this.species = species;
    //         this.sound = sound;
    //     }
    //     makeSound(){
    //         console.log(`The ${this.name} says: ${this.sound}`);
    //     }
    // }

    // // animal instance

    // const cat = new Animal("cat", "test", "miyao miyao");

    // cat.makeSound();


    // properties type oop
    
    class Animal {
        constructor(public name: string, public sound: string){
        }

        makeSound() {
            console.log(`The ${this.name} sound is ${this.sound}`);
        }

    }

    const cat = new Animal("cat", "meo mwo")

    cat.makeSound();

}