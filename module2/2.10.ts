{
    //mapped types
    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
    // const arrayOfStrings: string[] = ['1', '2', '3', '4','5'];
    const arrayOfStrings: string[] = arrayOfNumbers.map(number => number.toString());
    console.log(arrayOfStrings);
    
    type AreaNumber = {
        height: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    // type AreaString = {
    //     [key in 'height' | 'width']: string;
    // }
    type AreaString = {
        [key in keyof AreaNumber]: string;
    }

    type Height = AreaNumber["height"] //lookup type

    type AreaCustom<T> = {
        [key in keyof T]: T[key];
    }

    const area: AreaCustom<{height:string, width:number}> = {
        height: '100',
        width: 200,
    } 

    //
}