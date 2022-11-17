import React from "react";
import { getFakerData, myConfig, fakerMap } from "./fakerData";
import {MLFormBuilder } from "react-forms";
import { Formik} from 'formik';


function App() {
 	const myInitialValues = {
		myFirstName: "",
		myLastName: "",
		myEmail: "",
		myName:"",
		myGender: "",
		myCheckbox: [],
		myAge: "",
		myPassword: "",
		myWebsite: "",
		phoneNumber: "",
		mySelect: "",
	}

	const handleAutofill =async (e:React.FormEvent, formikProps:any) => {
		e.preventDefault();
	const fakeValues =  getFakerData(myConfig, fakerMap);
	 formikProps.setValues(fakeValues);
	}
	
	const handleSubmit = (values: object, formikProps: any) => {
		formikProps.setSubmitting(false);
	}

	return (
		<div className="bg-blue-50 pl-60 mt-12">

			 <Formik
            initialValues={myInitialValues}
            onSubmit={handleSubmit}
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
