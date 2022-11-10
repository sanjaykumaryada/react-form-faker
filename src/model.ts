export interface IFormInput{
    firstName?:string,
    lastName?:string,
    email?:string,
    middleName?:string,
    phoneNumber?:string,
    website?:string,
    password?:string,
    rePassword?:string,
    name?:string,
    age?:number,
    gender?:string,
    checkbox?:string[],
}
export interface IFormConfig{
    type: string;
    valueKey:string;
    fieldProps?:any;
}
export interface IFakeValues{
    myFirstName:string;
    myLastName: string;
    myEmail: string;
    myGender:string;
    myCheckbox:Array<string>;
    myAge:string;
    myPassword:string;
    myWebsite:string;
    myFile:any;
   
}
