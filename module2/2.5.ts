{
    // function with generic

    // normal function
    const createArray = (param: string): string[] => {
        return [param]
    }

    const studentName = createArray("kakon"); //output ["kakon"]

    // console.log(studentName);

    // createFunctionWithGeneric

    const createFunctionWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const res1 = createFunctionWithGeneric<number>(25); // output [25]
    // console.log(res1); 

    const res2 = createFunctionWithGeneric<{ name: string, email: string }>({ name: "kakon", email: "k@gmail.com" }); // output [{ name: 'kakon', email: "k@gmail.com" }]

    // console.log(res2);

    const res3 = createFunctionWithGeneric<{ name: string, email: string, stack: string }>({ name: "kakon", email: " kakon@gmail.com ", stack: "Full Stack Developer" }); // output [{ name: 'kakon', email: 'kakon@gmail.com', stack: 'Full Stack Developer'}]

    // console.log(res3);

    // createFunctionWithGenericTuple

    const addCourseToStudent = <T>(student: T)=>{
        const course = "Next level web development course"
        return {
                ...student, course
            }

    }

    const student1 = addCourseToStudent({name: 'Student1', email: 'kakon@gmail.com', rollNo: 1, })
    // console.log(student1);
    const student2 = addCourseToStudent({name: 'Student2', email: 'k@gmail.com', rollNo: 2, role: "proUser"})
    // console.log([student1, student2]);

    const student3 = addCourseToStudent({name: 'Student3', email : 'ka@gmail.com', role: "instructor", rollNo:3})

    console.log(student3);








}