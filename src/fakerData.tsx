import { faker } from '@faker-js/faker';
import { IFakerMap, IFormConfig } from './model';
import { handleOptionsValues, isFunctionOrObject } from "./fakerUtility";


export const fakerMap:IFakerMap = {
    myFirstName: faker.name.firstName,
    myLastName: faker.name.lastName,
    myName: faker.name.fullName,
    myPassword: faker.internet.password,
    myEmail: faker.internet.email,
    myWebsite: faker.internet.url,
    myAge: {
        value: faker.datatype.number,
        args: { min: 10, max: 100 },
    },
    phoneNumber: {
        value: faker.phone.number,
        args: '+91-99########'
    },
    myRadio: {
        value: faker.helpers.arrayElement,
    },
    myCheckbox: {
        value: faker.helpers.arrayElements,
    },
    mySelect: {
        value: faker.helpers.arrayElement,
    },
}


export const myConfig: IFormConfig[] = [
    {
        type: "phone",
        valueKey: "phoneNumber",
        fieldProps: { label: 'Enter your phoneNumber', fullWidth: true },
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
        valueKey: "myRadio",
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
export const getFakerData = (myConfig: IFormConfig[], fakerMap:any) => {

    const values: { [key: string]: string } = {};

    myConfig.forEach((config: IFormConfig) => {
        if (fakerMap.hasOwnProperty(config.valueKey)) {
            switch (isFunctionOrObject(fakerMap[config.valueKey])) {
                case "function":
                    values[config.valueKey] = fakerMap[config.valueKey]();
                    break;
                case "object":
                    if (config.fieldProps && config.fieldProps.options) {
                        const optionsArray = handleOptionsValues(config.fieldProps.options);
                        values[config.valueKey] = fakerMap[config.valueKey].value(optionsArray);
    
                    } else {
                        values[config.valueKey] = fakerMap[config.valueKey].value(fakerMap[config.valueKey].args)
                    }
                    break;
                default:
                    break;
            }
        }
    });
    return values;
}