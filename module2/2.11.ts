{
    //utility types
    type Person = {
        name: string;
        age: number;
        email?: string;
        phone: string;
    }

    //Pick
    type Name = Pick<Person, 'name'>;
    type NameAge = Pick<Person, 'name' | 'age'>;

    //Omit
    type contactInfo = Omit<Person, 'name' | 'age'>;

    //Required 
    type PersonRequired = Required<Person>;

    //Partial
    type PersonPartial = Partial<Person>;

    //Readonly
    type PersonReadonly = Readonly<Person>;
    const person1: PersonReadonly = {
        name: 'John',
        age: 12,
        phone: '555-1234'
    }
    // person1.name = 'kon';

    //Record
    // type MyObj = {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>;

    const obj1: MyObj = {
        a:'aaa',
        b:'bbb',
        c:'ccc',
        d:'ddd',
    };

    const emptyObj: Record<string, unknown> = {};
    emptyObj.a = 'aa';
    emptyObj.b = 222;

    //
}