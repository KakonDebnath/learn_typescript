{
    // map type

    // general map

    const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

    const arrOfStrings: string[] = arrOfNumbers.map(num => num.toString());
    // console.log(arrOfStrings);



    type AreaNumber = {
        height: string;
        width: number;
    }

    type Height = AreaNumber["height"]

    // mapping type
    // type AreaString = {
    //     [key in "height" | "width"]: string
    // }

    // type AreaString = {
    //     [key in keyof AreaNumber]: string
    // }



    // T => { height: number; width: string }

    // key = T["height"] | T["width"]
    type AreaString<T> = {
        [key in keyof T]: T[key]
    }


    const MyAreaString: AreaString<{
        height: number;
        width: string,
    }> = {
        height: 50,
        width: "50",
    }
}