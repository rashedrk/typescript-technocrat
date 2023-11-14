{
    //Interface -generic
    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
    };

    const poorDeveloper: Developer<{ brand: string, model: string }> = {
        name: 'jhon',
        computer: {
            brand: 'Asus',
            model: 'as-we22',
            releaseYear: 2018,
        },
        smartWatch: {
            brand: 'redmi',
            model: 'watch 3 active',
        },
    }

    interface AppleWatch {
        brand: string,
        model: string,
        heartTracking: boolean,
        sleepTracking: boolean
    }

    const richDeveloper: Developer<AppleWatch> = {
        name: 'jhon',
        computer: {
            brand: 'Asus',
            model: 'as-we22',
            releaseYear: 2018,
        },
        smartWatch: {
            brand: 'apple',
            model: 'watch 4',
            heartTracking: true,
            sleepTracking: true,
        },
    }

    //
}