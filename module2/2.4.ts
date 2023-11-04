// generic with interface

interface DeveloperGeneric<T, X> {
    name: string;
    designation: string;
    computer: {
        brand: string;
        model: string;
        ram: string;
        releaseYear: number;
    }
    smartWatch: T;
    bike?: X;
}
type miWatch = {
    brand: string,
    model: string,
    release: string,
}

type appleWatch = {
    brand: string,
    model: string,
    bmp: boolean,
    sleepTracking: boolean,
}

interface yamahaBike {
    model: string,
    cc: string,
}

const poorDeveloper:DeveloperGeneric<miWatch, null> = {
    name: "John",
    designation: "manager",
    computer: {
        brand: "Hp",
        model: "g38",
        ram: "4gb",
        releaseYear: 2015,
    },
    smartWatch: {
        brand: "mi",
        model: "k365",
        release: "2015"
    }
}
const reachDeveloper:DeveloperGeneric<appleWatch, yamahaBike> = {
    name: "Deo",
    designation: "md",
    computer: {
        brand: "apple",
        model: "2022",
        ram: "8gb",
        releaseYear: 2022,
    },
    smartWatch: {
        brand: "apple",
        model: "2022",
        bmp: true,
        sleepTracking: true,
    },
    bike: {
        model: "2022",
        cc: "160cc"
    }
}