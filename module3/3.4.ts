{
    // type guard of OOP with instanceof

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making a sound");
        }
    }


    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }
        makeBark(){
            console.log(`I am barking`);
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }
        makeMeyow(){
            console.log(`I am can miyow`);
        }
    }

    const dog = new Dog("kalu","dog");
    // dog.makeBark();

    const cat = new Cat("Chinku","cat");
    // cat.makeMeyow();

    // smart way 

    const isDog = (animal: Animal): animal is Dog=>{
        return animal instanceof Dog;
    }
    const isCat = (animal: Animal): animal is Cat=>{
        return animal instanceof Cat;
    }


    
    const getAnimal = (animal: Animal) =>{
        if(isDog(animal)){
            animal.makeBark();
        }else if(isCat(animal)){
            animal.makeMeyow();
        }
        else{
            animal.makeSound();
        }
    }
    

    getAnimal(dog)

}