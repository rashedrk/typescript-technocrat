{
    //Generic with function
    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    const rest1 = createArray('alu');
    const rest1WithGeneric = createArrayWithGeneric<number>(2343);
    const rest1WithGeneric2 = createArrayWithGeneric<boolean>(true);
    const rest1WithGeneric3 = createArrayWithGeneric<{ name: string, type: boolean }>({ name: 'alu', type: true })

    const createTuplesWithGeneric = <X, Y>(param1: X, param2: Y) => {
        return [param1, param2];
    }

    type User = { name: string, type: boolean }

    const tuple1 = createTuplesWithGeneric<number, User>(2343, { name: 'alu', type: true });

    const addCourseToStudent = <T>(student: T) => {
        const course = 'Next level web course';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: 'Mr. Smith', id: 343, devType: 'junior'});
    const student2 = addCourseToStudent({name: 'Mr. x', id: 23, hasLaptop: true});
    //
}