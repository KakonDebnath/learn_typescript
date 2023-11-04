// generic dynamic type

type GenericType<T> = Array<T>

// const playersName:string[] = ["sakib", "rahim", "mahamudullah"]
// const playersName: Array<string> = ["sakib", "rahim", "mahamudullah"]
const playersName: GenericType<string> = ["sakib", "rahim", "mahamudullah"]

// const playersAge: number[] = [20, 25, 36]
const playersAge: GenericType<number> = [20, 25, 36]

// const isPlayed:boolean[] = [true, false, false]
const isPlayed: GenericType<boolean> = [true, false, false]



const users: GenericType<{
    name: string,
    age: number,
    rollNo: number,
    role: string
}> = [
        {
            name: 'John',
            age: 21,
            rollNo: 1,
            role: 'admin',
        },
        {
            name: 'Sakib',
            age: 25,
            rollNo: 2,
            role: 'student',
        }
    ]

// generic tuple types

type GenericTuple<X, Y> = [X, Y];

const manush: GenericTuple<string, string> = ["kakon", "Roni"]


const userWithId: GenericTuple<number, { name: string, email: string }> = [1234, {
    name: 'John',
    email: "john@gmail.com",
}]