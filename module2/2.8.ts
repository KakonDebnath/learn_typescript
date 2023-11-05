{
    // basic promise with Promise<string>

    // const createPromise = (): Promise<string> => {
    //     return new Promise<string>((resolve, reject) => {
    //         const data: string = "lorem ipsum dolor sit amet"
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject("Field to load data")
    //         }
    //     })
    // }

    // // calling createPromise function

    // const showData = async () => {
    //     const data = await createPromise();
    //     console.log(data);
    // }

    // showData();

    // create Promise with Promise<object>

    type MyType = {
        data: string
    }

    const createPromise = (): Promise<MyType> => {
        return new Promise<MyType>((resolve, reject) => {
            const data: MyType = { data: "lorem ipsum dolor sit amet" }
            if (data) {
                resolve(data)
            } else {
                reject("Field to load data")
            }
        })
    }

    // calling createPromise function

    const showData = async (): Promise<MyType> => {
        const data: MyType = await createPromise();
        // console.log(data);
        return data
    }

    showData();



    type TodoType = {
        id: number,
        userId: number,
        title: string,
        completed: boolean,
    }

    const getTodo = async ():Promise<TodoType> => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/40");
        const data = await res.json();
        console.log(data);
        return data;
    }

    getTodo()








}