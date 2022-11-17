import React from "react";
import { getFakerData, myConfig, fakerMap } from "./fakerData";
import {MLFormBuilder } from "react-forms";
import { Formik} from 'formik';
import { IFormikProps } from "./model";


function App() {
 	const myInitialValues = {
		myFirstName: "",
		myLastName: "",
		myEmail: "",
		myGender: "",
		myCheckbox: [""],
		myAge: "",
		myPassword: "",
		myWebsite: "",
		phoneNumber: "",
		mySelect: "",
	}

	const handleAutofill = (e:React.FormEvent,formProps:IFormikProps) => {
		e.preventDefault();
	const fakeValues =  getFakerData(myConfig, fakerMap);
	 formProps.setValues(fakeValues);
	}
	

	return (
		<div className="bg-blue-50 pl-60 mt-12">
        <Formik
            initialValues={myInitialValues}
            onSubmit={(values)=>console.log(values)}
			enableReinitialize
        >
            {
                (formProps) =>{ 
					return (
					<>
					<MLFormBuilder
                    schema={myConfig}
                    formId={"inputForm"}
                    actionConfig={{ submitButtonText: "Register" }}
                    formikProps={formProps}
                />
				<button className="bg-orange-500 rounded-md mb-4 h-11 p-3 text-white absolute right-0 top-0" onClick={(e)=>handleAutofill(e, formProps)} >Autofill</button>
				</>
				)
            }}

        </Formik>
		</div>

	);
}

export default App;
