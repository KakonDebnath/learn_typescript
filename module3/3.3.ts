{
    // type guard 


    // how type of operator woks as type guard

    // type of work on run time
    const add = (a: string | number, b: string | number) => {
        if (typeof a === 'number' && typeof b === 'number') {
            return a + b
        }
        else{
            return  a.toString() + b.toString()
        }
    }


    const result1 = add(5, 6)
    console.log(result1);

    const result2 = add("bangla", "desh")
    console.log(result2);

    // in guard 


    type NormalUser = {
        name: string
    }

    type AdminUser = {
        name: string,
        role: string
    }

    const getUser = (user: NormalUser | AdminUser)=>{
        if("role" in user){
            console.log(`Congratulations ${user.name} you are ${user.role} now!`);
        }else{
            console.log(`Hello ${user.name} You are not allowed to Admin User`);
        }
    }

    getUser({name: "Kakon", role: "admin"})
    getUser({name: "Debnath"})





}