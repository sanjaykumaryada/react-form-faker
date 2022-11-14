import { faker } from '@faker-js/faker';
import { IFormConfig } from './model';
/**
 * {
 *    "key": Fakerfn,
 *    "key": {
 *         "value" : FakerFn,
 *          "args" : [""],
 *           "options": [],
 *           "isMultiple": boolean
 *      }
 * }
 * @param myConfig 
 * @param fakerMap 
 * @param values 
 */
export const fakerMap = {
    myFirstName: faker.name.firstName,
    myLastName: faker.name.lastName,
    myName: faker.name.fullName,
    myPassword: faker.internet.password,
    myEmail: faker.internet.email,
    website: faker.internet.url,
    myWebsite: faker.internet.url,
    myAge: {
        "args": { min: 10, max: 100 },
        "myAge": faker.datatype.number,
    },
    phoneNumber: {
        "phoneNumber": faker.phone.number,
        "args": '+91-##########'
    },
    myRadio: {
        "myRadio": faker.helpers.arrayElement,
        "args": ['male', "female"]
    },
    myCheckbox: {
        "myCheckbox": faker.helpers.arrayElements,
        "args": ["cricket", "football", "Tabble Tennis"],
    },
    mySelect: {
        "mySelect": faker.helpers.arrayElement,
        "args": ["abc", "xyz"],
    }

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
export const getFakerData = (myConfig: IFormConfig[], fakerMap: any,) => {

    const values: { [key: string]: string } = {}
    
    myConfig.forEach((config: IFormConfig) => {
        if (fakerMap.hasOwnProperty(config.valueKey)) {
            if (typeof fakerMap[config.valueKey] === 'function') {
                values[config.valueKey] = fakerMap[config.valueKey]();
            } else {
                values[config.valueKey] = fakerMap[config.valueKey][config.valueKey](fakerMap[config.valueKey].args)
            }
        }
    });
    return values;
}