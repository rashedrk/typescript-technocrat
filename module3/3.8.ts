{
    //Polymorphism
    class Person {
        getSleep() {
            console.log('I am sleeping for 8hours');
        }
    }

    class Student extends Person {
        getSleep() {
            console.log('I am sleeping for 7hours');
        }
    };

    class Developer extends Person {
        getSleep() {
            console.log('I am sleeping for 6hours');
        }
    };

    const getSleepingHours = (param: Person) => {
        param.getSleep();
    };

    const person1 = new Person();
    const person2 = new Student();
    const person3 = new Developer();

    getSleepingHours(person1);
    getSleepingHours(person2);
    getSleepingHours(person3);

    class Shape {
        getArea(): number {
            return 0;
        }
    }

    class Circle extends Shape {
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius;
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Shape {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            super();
            this.height = height;
            this.width = width;
        }

        getArea(): number {
            return this.height * this.width;
        }
    }

    const getCalculatedArea = (param: Shape) => {
        return param.getArea();
    }

    const shape1 = new Shape();
    const shape2 = new Circle(5);
    const shape3 = new Rectangle(5, 2);

    console.log(getCalculatedArea(shape1));
    console.log(getCalculatedArea(shape2));
    console.log(getCalculatedArea(shape3));
    

    //
}