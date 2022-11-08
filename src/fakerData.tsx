import { faker } from '@faker-js/faker';
import { IFormConfig} from './model';
export const formConfig: IFormConfig[] = [
    {
        type: "name",
        valueKey:"name",
    },
    {
        type: "firstName",
        valueKey:'firstName'
    },
    {
        type: "middleName",
        valueKey:"middleName",
    },
    {
        type: "lastName",
        valueKey:'lastName'
    },
    {
        type: "age",
        valueKey:"age"

    },
    {
        type: "email",
        valueKey:"email",
    },
    {
        type: "phone",
        valueKey:'phone',
    },
    {
        type: "password",
        valueKey:"password",
    },
    {
        type: "url",
        valueKey:"url",

    }, {
        type: "birthdate",
        valueKey:"birthdate",
    },
    {
        type: 'gender',
        valueKey:"gender",
        options: ['male', "female"]
    },
    {
        type: 'checkbox',
        valueKey:"checkbox",
        options: ['study', 'cricket', 'football', "coding"]
    }
]
export const getFakerData = (formConfig: IFormConfig[]) => {

    const values:{[key:string]:string} = {
        firstName: '',
        lastName: '',
        middleName: "",
        email: '',
        phoneNumber: '',
        website: '',
        password: '',
        rePassword: '',
        name: "",
        age: "",
        gender: "",
        checkbox: "",
    }


    formConfig.forEach((config: IFormConfig) => {
        switch (config.type) {
            case "firstName":
                values[config.valueKey]= faker.name.firstName();
                break;
            case 'lastName':
                values[config.valueKey] = faker.name.lastName();
                break;
            case 'name':
                values[config.valueKey]= faker.name.fullName();
                break;
            case 'middleName':
                values[config.valueKey] = faker.name.middleName();
                break;
            case 'email':
                values[config.valueKey] = faker.internet.email();
                break;
            case 'age':
                values[config.valueKey] = (Math.floor(Math.random() * 100)+10).toString();
                break;
            case 'url':
                values[config.valueKey] = faker.internet.url();
                break;
            case 'password':
                values[config.valueKey] = faker.internet.password();
                break;
            case 'phone':
                values[config.valueKey] = faker.phone.number('+91-#####-#####');
                break;
            case 'gender':
                    if (config.options !== undefined){
                    values[config.valueKey]= config.options[Math.floor(Math.random() * config.options.length)]
                    }
                break;
            case 'checkbox':
                    if (config.options !== undefined)
                    values[config.valueKey]= config.options[Math.floor(Math.random() * config.options.length)]
                break;
            default:
                break;
        }
    });
    return values;
}