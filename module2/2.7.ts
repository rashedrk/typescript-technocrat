{
    // generic constraint with keyof operator
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = 'bike' | 'car' | 'ship'; //manually
    type Owner2 = keyof Vehicle;

    const user = {
        name: 'John',
        age: 36,
        addresses: 'bogura'
    }

    const car = {
        model: 'Tesla T',
        year: 2020
    }

    const getPropertyByKey= <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    // getPropertyByKey(user, 'emni') //error
    getPropertyByKey(user, 'name')
    getPropertyByKey(car, 'model')

    //
}