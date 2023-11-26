{
    // abstraction : interface, abstract
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("Starting engine");
        }
        stopEngine(): void {
            console.log('stoping engine');
        }
        move(): void {
            console.log('moving');            
        }
        test(): void {
            console.log('testing');
            
        }
    };
    

    abstract class Vehicle2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test(): void {
            console.log('I am testing');
        }
    }

    class Car2 extends Vehicle2 {
        startEngine(): void {
            console.log("Starting engine");
        }
        stopEngine(): void {
            console.log('stoping engine');
        }
        move(): void {
            console.log('moving');            
        }
    }


    const toyota = new Car1();
    toyota.startEngine();
    toyota.test();

    const lambo = new Car2();
    lambo.startEngine();
    lambo.test();



    //
}