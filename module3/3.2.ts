{
    // inherited OOP

    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numberOfhours: number) {
            console.log(`Hello ${this.name} you will Sleep daily: ${numberOfhours} hours`);
        }
    }


    class Student extends Parent {

        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }

        getSleep(numberOfhours: number) {
            console.log(`Hello ${this.name} you will Sleep daily: ${numberOfhours} hours`);
        }

    }


    const student1 = new Student("Kakon", 22, "Barisal Bangladesh");

    student1.getSleep(5);



    class Teacher extends Parent {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        getSleep(numberOfhours: number) {
            console.log(`Hello ${this.name} you will Sleep daily: ${numberOfhours} hours`);
        }

        takeClass(numberOfClasses: number) {
            console.log(`Hi ${this.name} you will take class: ${numberOfClasses} classes`);
        }
    }


    const teacher1 = new Teacher("Roni", 30, "Dhaka", "Math Teacher");

    teacher1.takeClass(3)
}



