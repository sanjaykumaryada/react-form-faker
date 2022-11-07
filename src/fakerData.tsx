import { faker } from '@faker-js/faker';
 export const formConfig:{type:string; name:string;}[]=[
    {
      type:"text",
      name:"firstName",
    },
    {
      type:"text",
      name:"lastName",
    },
    {
         type:"number",
         name:'age',
    },
    {
      type:"text",
      name:"email",
    },
    {
      type:"phone",
      name:"phoneNumber",
    },
    {
      type:"password",
      name:"password"
    },
    {
      type:"url",
      name:"website"
    },{
        type:"birthdate",
        name:"birthdate"
    },
    { 
        type:'sex',
        name:"gender",
    }
  ]
   export const getFakerData=(formConfig:{
    type: string;
    name: string;
}[])=>{

    const  values:{
        firstName:string,
    lastName:string,
    email:string,
    phoneNumber:string,
    website:string,
    password:string,
    rePassword:string,
    name:string,
    age:number,
    }={
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        website: '',
        password: '',
        rePassword: '',
        name:"",
        age:0,
    }
       
    
    formConfig.forEach((config:{type:string;name:string;}) => {
        switch (config.type) {
            case "text":
                switch (config.name){
                    case 'firstName':
                        values.firstName=faker.name.firstName();
                        break;
                    case 'lastName':
                        values.lastName=faker.name.lastName();
                        break;    
                    case 'email':
                        values.email=faker.internet.email();
                        break;
                    case 'name':
                        values.name=faker.name.fullName();
                        break;    
                    default:
                        break;
                }
                break;
            case 'number':
                values.age=faker.datatype.number({min:5, max:100});
                break;    
            case 'url':
                values.website=faker.internet.url();
                break;
            case 'password':
                values.password=faker.internet.password();
                break;
            case 'phone':
                values.phoneNumber=faker.phone.number('+91-#####-#####');
                break;         
            default:
                break;
        }
    });
      return values;
     }