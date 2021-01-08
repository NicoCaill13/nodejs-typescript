enum Gender {
    'Male',
    'Female'
}

interface SpartanInterface {
    name: string
    kills: number
    age?: number
    gender?: keyof typeof Gender
}

export class Spartan {
    private name: string;
    private kills: number;
    private age: number;
    private gender: Gender;

    constructor({name, kills, age, gender}: SpartanInterface) {
        let obj = {name, kills, age, gender};
        Object.keys(obj).forEach(key => obj[key] === undefined ? delete obj[key] : {});
        // noinspection TypeScriptValidateTypes
        Object.assign(this, obj);
    }
}