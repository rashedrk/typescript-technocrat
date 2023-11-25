{
    // OOP - Inheritance

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        };

        takeSleep(hours: number) {
            console.log(`${this.name} sleeps: ${hours}h`);

        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    class Teacher extends Person {
        designation: string;
        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address);
            this.designation = designation;
        };

        takeClass(hours: number) {
            console.log(`${this.name} will take class: ${hours}h`);
            
        }
    }

    const student = new Student('Rahim', 20 , 'Bangladesh');
    const teacher = new Teacher('Mr. Karim', 40, 'Bangladesh', 'professor');

    console.log(student.name);
    student.takeSleep(8);

    console.log(teacher.name);
    teacher.takeSleep(6);
    teacher.takeClass(4);
    

    //
}