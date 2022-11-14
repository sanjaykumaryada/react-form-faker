export interface IFormConfig{
    type: string;
    valueKey:string;
    fieldProps?:any;
    multiple?:boolean;
}
export interface IFakeValues{
    [x: string]: any;
    myFirstName:string;
    myLastName: string;
    myEmail: string;
    myGender:string;
    myCheckbox:Array<string>;
    myAge:string;
    myPassword:string;
    myWebsite:string;
    phoneNumber:string;
   mySelect:string;
}

