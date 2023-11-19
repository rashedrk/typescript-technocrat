{
    //Promise

    //simulate
    const createPromise = (): Promise<string> => {
        return new Promise<string> ((resolve, reject) => {
            const data: string = 'something';
            if (data) {
                resolve(data);
            }
            else {
                reject('error creating promise')
            }
        });
    }
    //calling createPromise
    const showData = async(): Promise<string> => {
        const data: string = await createPromise();
        // console.log(data);
        return data;
    }

    showData();
    //
}