import { faker } from '@faker-js/faker';
import { IFormConfig } from './model';
export const myConfig: IFormConfig[] = [
    {
        type: 'file',
        valueKey: 'myFile',
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
        type : 'password' ,
        valueKey : 'myPassword',	  
        fieldProps :{
            label : 'Enter password',
    
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
        }

    },


]
export const getFakerData = (myConfig: IFormConfig[]) => {

    const values: { [key: string]: string } = {}


    myConfig.forEach((config: IFormConfig) => {
        switch (config.type) {
            case 'text':
                switch (config.valueKey) {
                    case 'myName':
                        values[config.valueKey] = faker.name.fullName();
                        break;
                    case 'myFirstName':
                        values[config.valueKey] = faker.name.firstName();
                        break;
                    case 'myLastName':
                        values[config.valueKey] = faker.name.lastName();
                        break;
                    case 'myMiddleName':
                        values[config.valueKey] = faker.name.middleName();
                        break;
                    case 'myEmail':
                        values[config.valueKey] = faker.internet.email();
                        break;
                    case "myAge":
                        values[config.valueKey] = (Math.floor(Math.random() * 100) + 10).toString();
                        break; 
                    case "myWebsite":
                        values[config.valueKey] = faker.internet.url();
                        break;       
                    default:
                        break;
                }
                break;
            case 'radio':
                if (config.fieldProps !== undefined && config.fieldProps.options.length > 0) {
                    values[config.valueKey] = config.fieldProps.options[Math.floor(Math.random() * config.fieldProps.options.length)].value;
                }
                break;
            case 'checkbox':
                if (config.fieldProps !== undefined && config.fieldProps.options.length > 0) {
                    values[config.valueKey] = config.fieldProps.options[Math.floor(Math.random() * config.fieldProps.options.length)].value;
                }
                break;
            case 'password':
                values[config.valueKey] = faker.internet.password();
                  break;
            case 'phoneNumber':
                values[config.valueKey] = faker.phone.number('+91-#####-#####');
                break;
            case 'file':
                values[config.valueKey]=faker.image.abstract();
                break;
            default:
                break;
        }
    });
    return values;
}