{

    // constrain in type script
    
    type StudentType = {
        id: number, 
        name: string, 
        email: string
    }

    const addCourseToStudent = <T extends StudentType>(student: T) => {
        const course = "Next level web development course"
        return {
            ...student, 
            course
        }

    }

    const student1 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        debType: string;
    }>({
        id: 222,
        name: "Mr X",
        email: "xm@gmail.com",
        debType: "NLWD"
    })
    const student2 = addCourseToStudent({
        id: 111,
        name: "Mr X",
        email: "xm@gmail.com",
        hasWatch: "Apple watch"
    })
    const student3 = addCourseToStudent({
        id: 333,
        name: "Mr Y",
        email: "y@gmail.com",
        education: "level 2",
    })
    console.log(student2, student1, student3);




}