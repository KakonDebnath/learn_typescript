// Spread and rest operator functions

const list1: string[] = ["a", "b", "c", "d", "e"];
const list2: string[] = ["f", "g", "h", "i"];

const list3: string[] = [...list1, ...list2];

const teacher = {
    math: "Rasel",
    bangla: "Roni",
    english: "Moni"
}

const teacher1 = {
    religion: "Kobita",
}

const teachers = {
    ...teacher,
    ...teacher1,
}

// with function

const allTeachers = (...teachers:string[]) => {
    
    teachers.forEach((teacher: string) => console.log(teacher));

}



const age = 15;
if (age >= 18) {
    console.log("adult");
}else{
    console.log("not adult");
}