import React,{useState} from "react";
import {formConfig, getFakerData} from "./fakerData";
import { IFormInput } from "./model";

function App() {
  const [inputData, setInputData]=useState<IFormInput>({
    firstName:"",
    lastName:"",
    email:"",
    phoneNumber:"",
    website:"",
    password:"",
    rePassword:"",
    name:"",
     age:0,
  })
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputData({...inputData,[e.target.name]:e.target.value})
}
  const handleAutofill=(e:React.FormEvent)=>{
    e.preventDefault();
    const fakerData=getFakerData(formConfig);
    console.log(fakerData);
    setInputData({...inputData,
      firstName:fakerData.firstName,
      lastName:fakerData.lastName,
      email:fakerData.email,
      website:fakerData.website,
      password:fakerData.password,
      phoneNumber:fakerData.phoneNumber,
      rePassword:fakerData.password
    })
  
  }
 const handleRegister=(e:React.FormEvent)=>{
  e.preventDefault();
 }
  return (
    <div className="bg-blue-50 pl-60">
      <div className="pl-60 py-40 h-screen">
        <div className="text-2xl">
          <h1>Register</h1>
        </div>
        <div className="text-slate-400 mb-4">
          <p>Lorem Ipsum is simply dummy text typesetting industry</p>
        </div>
        <form >
          <div className="flex mb-6">
            <div className="flex flex-col pr-10">
              <label >First Name</label>
              <input
               className="h-10 px-4 rounded-sm mt-2 shadow-md" 
               placeholder="e.g. Sanjay" 
               name="firstName"
               type="text"
               value={inputData.firstName}
               onChange={handleChange}
               />
            </div>
            <div className="flex flex-col">
              <label>Last Name</label>
              <input 
              className="h-10 px-4 rounded-sm mt-2 shadow-md" 
              placeholder="e.g. Kumar" 
              name="lastName"
              type="text"
              value={inputData.lastName}
              onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Email Address</label>
            <input 
            className="h-10 w-[470px] px-4 rounded-sm mt-2 shadow-md"
             placeholder="e.g. 2408sanjay@gmail.com" 
             name="email"
             type="email"
             value={inputData.email}
             onChange={handleChange}
             />
          </div>
          <div className="flex mt-4 mb-6">
            <div className="flex flex-col pr-10">
              <label>Phone Number</label>
              <input
               className="h-10 px-4 rounded-sm mt-2 shadow-md" 
               placeholder="+91-99999-99999"
               type="tel"
               name="phoneNumber"
               value={inputData.phoneNumber}
               onChange={handleChange}
               />
            </div>
            <div className="flex flex-col">
              <label>Website</label>
              <input
               className="h-10 px-4 rounded-sm mt-2 shadow-md"
                placeholder="https://www.google.com" 
                type="text"
                name="website"
                value={inputData.website}
                onChange={handleChange}/>
            </div>
          </div>
          <div className="flex mt-4 mb-6">
            <div className="flex flex-col pr-10">
              <label>Your Password</label>
              <input 
              className="h-10 px-4 rounded-sm mt-2 shadow-md" 
              placeholder="******"
              type="password" 
              name="password"
              value={inputData.password}
              onChange={handleChange}
              />
            </div>
            <div className="flex flex-col">
              <label>Re-type Password</label>
              <input 
              className="h-10 px-4 rounded-sm mt-2 shadow-md" 
              type="password"
              placeholder="******" 
              name="rePassword"
              value={inputData.rePassword}
              onChange={handleChange}
              />
            </div>
          </div>
        </form>
        <div className="flex">
          <div className=" flex flex-col">
            <button className="bg-orange-500 rounded-md mb-4 h-11 p-3 text-white" onClick={handleAutofill} >AutoFill</button>
            <button className="bg-orange-500 rounded-md text-white h-11" onClick={handleRegister}>Register</button>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;