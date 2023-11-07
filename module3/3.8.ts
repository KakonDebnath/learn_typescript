{
    // polymorphism 
    class Person {
        getSleep() {
            console.log(`Hi i am sleeping on 8 hours per day`);
        }
    }

    class Student extends Person {
        getSleep() {
            console.log(`Hi i am sleeping on 7 hours per day`);
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log(`Hi i am sleeping on 6 hours per day`);
        }
    }

    // instance of class 


    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    const getSleepingHours = (param: Person) => {
        param.getSleep();
    }

    // getSleepingHours(person1) //Hi i am sleeping on 8 hours per day
    // getSleepingHours(person2) // Hi i am sleeping on 7 hours per day
    // getSleepingHours(person3) // Hi i am sleeping on 6 hours per day

    // another example



    class Shape {
        getArea(): number {
            return 0;
        }
    }

    // 1st instance of Shape
    // circle shape (pi*radius*radius)
    class Circle extends Shape {
        radius: number;
        constructor(radius: number){
            super();
            this.radius = radius;
        }
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }


    // 2nd instance of Shape
    // rectangle shape (pi*radius*radius)
    class Rectangle extends Shape {
        height: number;
        width: number;

        constructor(height: number, width: number){
            super();
            this.height = height;
            this.width = width;
        }
        getArea(): number {
            return this.height * this.width;
        }
    }


    const getShapeArea = (param: Shape)=>{
        console.log(param.getArea());
    }


    const shape1 = new Shape();
    const shape2 = new Circle(10);
    const shape3 = new Rectangle(10, 20);

    getShapeArea(shape3)











}