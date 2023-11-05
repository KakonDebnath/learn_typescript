{
    // generic type of keyof operator
    type Vehicle = {
        car: string;
        bike: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";  // manually defined

    const person:Owner = "bike";

    type Owner2 = keyof Vehicle; //create type with keyof operator 


    const person2:Owner = "car"



    const user = {
        name: "John",
        age: 21,
        address: "Barisal, Bangladesh",
    }
    const user2 = {
        name: "Kakon",
        age: 21,
        address: "Barisal, Bangladesh",
        email: "john@barisal.com",
    }

    const getPropertyValue = <X, Y extends keyof X>(obj:X, key:Y) => { 
        return obj[key]
    }
    console.log(getPropertyValue(user2, "email"));












}