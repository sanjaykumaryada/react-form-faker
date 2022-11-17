export interface IFormConfig {
    type: string;
    valueKey: string;
    fieldProps?: any;
    multiple?: boolean;
}
export interface IFakeValues {
    myFirstName: string;
    myLastName: string;
    myEmail: string;
    myGender: string;
    myCheckbox:string[];
    myAge: string;
    myPassword: string;
    myWebsite: string;
    phoneNumber: string;
    mySelect: string;
}
export interface IFakerMap {
    myFirstName: () => void;
    myLastName: () => void;
    myEmail: () => void;
    myName: () => void;
    myPassword: () => void;
    myWebsite: () => void;
    myAge: {
        value: () => void;
        args: { min?: number, max?: number }
    };
    phoneNumber: {
        value: () => void
        args: string;
    };
    myCheckbox: {
        value: () => void;
    }
    mySelect: {
        value: () => void
    };
    myRadio: {
        value: () => void
    };
}

export interface IFormikProps {
	setValues:any;
	
}
