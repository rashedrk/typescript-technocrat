{
    // conditional type 
    type a = 'number';
    type b = undefined;

    type x = a extends number ? true : false; //conditional type
    type y = a extends null ? null : b extends undefined ? true : false; //nested conditional type

    type Sheikh = {
        car: string;
        bike: string;
        ship: string;
    }

    // type CheckVehicle<T> = T extends 'car' | 'bike' | 'ship' ? true : false;
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
    type HasBike = CheckVehicle <'bike'>
    type HasTractor = CheckVehicle <'tractor'>

    //
}