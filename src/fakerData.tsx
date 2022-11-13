import { faker } from '@faker-js/faker';
import { IFakeValues, IFormConfig } from './model';

export const fakerMap = {
    myFirstName: faker.name.firstName,
    myLastName: faker.name.lastName,
    myName: faker.name.fullName,
    myPassword: faker.internet.password,
    myEmail: faker.internet.email,
    website: faker.internet.url,
    phoneNumber:faker.phone.number,
    myWebsite:faker.internet.url,
    myAge:faker.datatype.number,
    myJobTitle:faker.name.jobTitle,
}
export const myConfig: IFormConfig[] = [
    {
        type: "phone",
        valueKey: "phoneNumber",
    
    },
    {
        type: 'text',
        valueKey: 'myFirstName',
       
        fieldProps: { label: 'Enter your firstName', fullWidth: true },
    },
    {
        type: 'text',
        valueKey: 'myAge',
        
        fieldProps: { label: 'Enter your Age', fullWidth: true },
    },
    {
        type: 'password',
        valueKey: 'myPassword',
        
        fieldProps: {
            label: 'Enter password',

        }
    },
    {
        type: "text",
        valueKey: 'myLastName',
       
        fieldProps: { label: 'Enter your lastName', fullWidth: true }
    },
    {
        type: "text",
        valueKey: 'myEmail',
        fieldProps: { label: 'Enter your email', fullWidth: true }
    },
    {
        type: "text",
        valueKey: 'myWebsite',
       
        fieldProps: { label: 'Enter your url', fullWidth: true }
    },
    {
        type: 'mui-plain-text',
        valueKey: 'genderLabel',
        fieldProps: {
            isTextHtmlString: false,
            text: "Choose your gender"

        }
    },
    {
        type: "radio",
        valueKey: "myGender",
        fieldProps: {
            options: [
                { name: 'male', value: 'male' },
                { name: 'female', value: 'female' }
            ],
        }

    },
    {
        type: "checkbox",
        valueKey: "myCheckbox",
        fieldProps: {
            options: [
                { name: 'cricket', value: 'cricket' },
                { name: 'football', value: 'football' },
                { name: "Table Tennis", value: "Table Tennis" }
            ],
            header: 'Tell Us About Your Interests',
        },
        multiple: true,

    },
    {
        type: 'select',
        valueKey: 'mySelect',
       
        fieldProps: {
            options: [
                { name: 'Abc', value: 'abc' },
                { name: 'XYZ', value: 'xyz' },
            ]
        },
    }


]
export const getFakerData = (myConfig: IFormConfig[], fakerMap: any, values: IFakeValues) => {
myConfig.forEach((config: IFormConfig) => {
        switch (config.type) {
            case 'text':
             if ( fakerMap.hasOwnProperty(config.valueKey)) {
                values[config.valueKey]=fakerMap[config.valueKey]();
                } 
                break;
            case 'password':
                values.myPassword= fakerMap.myPassword();
                break;
            case 'phone':
                values.phoneNumber= fakerMap.phoneNumber('+91-###########');
                break;
            case "checkbox":
            case "radio":
            case "select":
                if (config.fieldProps !== undefined && config.fieldProps.options.length > 0) {
                    if(config.multiple){
                        values[config.valueKey].push(config.fieldProps.options[Math.floor(Math.random() * config.fieldProps.options.length)].value);
                    }else
                    values[config.valueKey] = config.fieldProps.options[Math.floor(Math.random() * config.fieldProps.options.length)].value;
                }
                break;
            default:
                break;
        }
    });
}