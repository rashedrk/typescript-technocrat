{
    //

    //Interface
    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    type RollNumber = number;

    const user: User2 = {
        name: 'Rashed',
        age: 24
    }

    type UserWithRole1 = User1 & { role: string };


    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user2: UserWithRole2 = {
        name: 'Rashed',
        age: 24,
        role: 'manager'
    }

    type Roll1 = number[];

    const rollNumber1: Roll1 = [1, 2, 3];

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber2: Roll2 = [1, 2, 3];

    type Add1 = (num1: number, num2: number) => number

    const add1: Add1 = (num1, num2) => num1 + num2;

    interface Add2 {
        (num1: number, num2: number): number
    }

    const add2: Add2 = (num1, num2) => num1 + num2;



    //
}