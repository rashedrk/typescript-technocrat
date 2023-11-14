"use strict";
{
    //
    // Type assertion 
    let anything;
    anything = 'Next level';
    anything;
    const kgToGm = (value) => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };
    const result = kgToGm(1000);
    const result2 = kgToGm('1000');
    console.log(result, result2);
    //
}
