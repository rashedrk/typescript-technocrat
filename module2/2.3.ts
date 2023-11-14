{
    //Generic type

    type GenericArray<T> = Array<T>;

    // const rollNumbers: number[] = [12, 23, 45, 22, 34];
    // const rollNumbers: Array<number> = [12, 23, 45, 22, 34];
    const rollNumbers: GenericArray<number> = [12, 23, 45, 22, 34];

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Mr. Z'];

    // const booleanArray: boolean[] = [true, false, true];
    // const booleanArray: Array<boolean> = [true, false, true];
    const booleanArray: GenericArray<boolean> = [true, false, true];

    const user: GenericArray<{name: string, age: number}> = [
        {
            name: 'John',
            age: 21,
        },
        {
            name: 'alu',
            age: 23,
        }
    ];

    // Generic Tuple 
    type GenericTuple<X,Y> = [X, Y];
    // const person: [string,string] = ['Mr. X', 'Mr. Y'];
    const person: GenericTuple<string, string> = ['Mr. X', 'Mr. Y'];
    const person2: GenericTuple<number, {name: string, age: number}> = [343,{
        name: 'John',
        age: 21,
    }];

    //
}