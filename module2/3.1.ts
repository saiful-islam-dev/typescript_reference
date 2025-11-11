{
    let anything: any;

    anything = "Next Leave Web Development";

    anything = 2323;

    // (anything as number)

const kgToGm = (value: string | number): number | string | undefined =>{
    if(typeof value === "string"){
        const convertedValue = parseFloat(value) * 1000;
        return `The converted value is ${convertedValue} gm`;
    }
    if(typeof value === "number"){
        return value * 1000;
    }
    return undefined;
};


const  realest1 = kgToGm(1000);
const result2 = kgToGm("1000");

typeof CostomeError = {
    messageL: string.
}

try {
    
} catch (error) {
    console.log((error as CostomeError).messageL); 
}


}