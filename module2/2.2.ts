// interface vs type

type PhoneType1 = {
    phoneNo: string;
}

type UserType1 = {
    name: string;
    age: number;
    role: string;
}

type User1 = UserType1 & PhoneType1;



interface UserType2 {
    name: string;
    age: number;
    role: string;
}

interface User2 extends UserType2  {
    phoneNo: string;
}

const user1: User1 = {
    name: 'John',
    age: 21,
    role: 'manager',
    phoneNo: "123"
}