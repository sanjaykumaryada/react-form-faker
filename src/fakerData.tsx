import { faker } from '@faker-js/faker';
import { IFormConfig } from './model';
export const formConfig: IFormConfig[] = [
    {
        type: "name",
        valueKey: "name",
    },
    {
        type: "firstName",
        valueKey: 'firstName'
    },
    {
        type: "middleName",
        valueKey: "middleName",
    },
    {
        type: "lastName",
        valueKey: 'lastName'
    },
    {
        type: "age",
        valueKey: "age"

    },
    {
        type: "email",
        valueKey: "email",
    },
    {
        type: "phoneNumber",
        valueKey: 'phoneNumber',
    },
    {
        type: "password",
        valueKey: "password",
    },
    {
        type: "website",
        valueKey: "website",

    }, {
        type: "birthdate",
        valueKey: "birthdate",
    },
    {
        type: 'gender',
        valueKey: "gender",
        options: ["male", "female"]
    },
    {
        type: 'checkbox',
        valueKey: "checkbox",
        options: ['study', 'cricket', 'football', "coding"]
    }
]
export const getFakerData = (formConfig: IFormConfig[]) => {

    const values: { [key: string]: string } = {}


    formConfig.forEach((config: IFormConfig) => {
        switch (config.type) {
            case "firstName":
                values[config.valueKey] = faker.name.firstName();
                break;
            case 'lastName':
                values[config.valueKey] = faker.name.lastName();
                break;
            case 'name':
                values[config.valueKey] = faker.name.fullName();
                break;
            case 'middleName':
                values[config.valueKey] = faker.name.middleName();
                break;
            case 'email':
                values[config.valueKey] = faker.internet.email();
                break;
            case 'age':
                values[config.valueKey] = (Math.floor(Math.random() * 100) + 10).toString();
                break;
            case 'website':
                values[config.valueKey] = faker.internet.url();
                break;
            case 'password':
                values[config.valueKey] = faker.internet.password();
                break;
            case 'phoneNumber':
                values[config.valueKey] = faker.phone.number('+91-#####-#####');
                break;
            case 'gender':
                if (config.options !== undefined && config.options.length !== 0){
                    values[config.valueKey] = config.options[Math.floor(Math.random() * config.options.length)]
                }else{
                    throw new Error("Please fill atleast one option");
                    
                }
                break;
            case 'checkbox':
                if (config.options !== undefined && config.options.length !== 0){
                    values[config.valueKey] = config.options[Math.floor(Math.random() * config.options.length)];
                }else{
                        throw new Error("Please fill atleast one option");
                        
                }
                
                break;
            default:
                break;
        }
    });
    return values;
}