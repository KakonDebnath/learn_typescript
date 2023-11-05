{

    // utility types

    // pick type
    type Person ={
        name: string,
        age: number,
        email?: string,
        contactNo: string,
    }

    type NameType = Pick<Person, "name">
    type NameAgeType= Pick<Person, "name" | "age">;


    // omit type

    type ContactInfo = Omit<Person, "name" | "age">


    // required type

    type PersonRequiredType = Required<Person>

    // Partial type

    type PersonPartialType = Partial<Person>

    // Readonly type

    type PersonReadonlyType = Readonly<Person>

    // const person1: Person= {
    //     name: "Kakon",
    //     age: 20,
    //     contactNo: "123456"
    // }

    // person1.name = "Kakon Debnath"
    const person1: PersonReadonlyType= {
        name: "Kakon",
        age: 20,
        contactNo: "123456"
    }

    // person1.name = "Kakon Debnath" // readonly type
    



}