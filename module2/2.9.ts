{
    // conditional type


    type a = string;
    type b = number;

    type c = a extends string ? true : false;

    type x = b extends number ? number : b extends string ? string : any;


    // ----------------------------------------------------------------
    
    type Shakib = {
        bike: string;
        car: string;
        house: string;
        boat: string;
        plane: string;
    }

    // type CheckVehicle<T> = T extends "bike" | "car" | "house" | "boat" ? true : false;
    type CheckVehicle<T> = T extends keyof Shakib ? true : false;


    type HasCar = CheckVehicle<"plane">








}