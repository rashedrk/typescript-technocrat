{
    // Constraints 
    const addCourseToStudent = <T extends {name: string; id: number}>(student: T) => {
        const course = 'Next level web course';
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({
        name: 'Mr. Smith',
        id: 343,
        devType: 'junior'
    });
    const student2 = addCourseToStudent({
        name: 'Mr. x',
        id: 23,
        hasLaptop: true
    });

    // const student3 = addCourseToStudent({
    //     emni: 'emni'
    // })
    const student3 = addCourseToStudent({
        name: 'Y',
        id: 11,
        emni: 'emni'
    })

    //
}