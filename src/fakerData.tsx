import { faker } from '@faker-js/faker';
import { IFormConfig, IFormInput } from './model';
export const formConfig: IFormConfig[] = [
    {
        type: "name"
    },
    {
        type: "firstName"
    },
    {
        type: "middleName"
    },
    {
        type: "lastName"
    },
    {
        type: "age"

    },
    {
        type: "email"
    },
    {
        type: "phone"
    },
    {
        type: "password"
    },
    {
        type: "url"

    }, {
        type: "birthdate"
    },
    {
        type: 'gender',
        options: ['male', "female"]
    },
    {
        type: 'checkbox',
        options: ['study', 'cricket', 'football', "coding"]
    }
]
export const getFakerData = (formConfig: IFormConfig[]) => {

    const values: IFormInput = {
        firstName: '',
        lastName: '',
        middleName: "",
        email: '',
        phoneNumber: '',
        website: '',
        password: '',
        rePassword: '',
        name: "",
        age: 0,
        gender: "",
        checkbox: "",
    }


    formConfig.forEach((config: IFormConfig) => {
        switch (config.type) {
            case "firstName":
                values.firstName = faker.name.firstName();
                break;
            case 'lastName':
                values.lastName = faker.name.lastName();
                break;
            case 'name':
                values.name = faker.name.fullName();
                break;
            case 'middleName':
                values.middleName = faker.name.middleName();
                break;
            case 'email':
                values.email = faker.internet.email();
                break;
            case 'age':
                values.age = faker.datatype.number({ min: 5, max: 100 });
                break;
            case 'url':
                values.website = faker.internet.url();
                break;
            case 'password':
                values.password = faker.internet.password();
                break;
            case 'phone':
                values.phoneNumber = faker.phone.number('+91-#####-#####');
                break;
            case 'gender':
                    if (config.options !== undefined){
                    values.gender = config.options[Math.floor(Math.random() * config.options.length)]
                    }
                break;
            case 'checkbox':
                    if (config.options !== undefined)
                    values.checkbox = config.options[Math.floor(Math.random() * config.options.length)]
                break;
            default:
                break;
        }
    });
    return values;
}