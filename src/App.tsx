import React, { useState } from "react";
import { getFakerData, myConfig } from "./fakerData";
import { IFakeValues } from "./model";
import { ReactForm } from "react-forms";
function App() {
	const myInitialValues = {
		myFirstName: "",
		myLastName: "",
		myEmail: "",
		myGender: "",
		myCheckbox: [],
		myAge: "",
		myPassword: "",
		myWebsite:"",
		myFile:"",
	}
	const [formFakeValues, setFormFakeValues] = useState<IFakeValues>(myInitialValues);

	const fakeValues: IFakeValues = myInitialValues;
	const handleAutofill = async (e: React.FormEvent) => {
		e.preventDefault();
		const fakerData = await getFakerData(myConfig);
		console.log(fakerData);
		fakeValues.myFirstName = fakerData.myFirstName;
		fakeValues.myLastName = fakerData.myLastName;
		fakeValues.myEmail = fakerData.myEmail;
		fakeValues.myGender = fakerData.myGender;
		fakeValues.myCheckbox.push(fakerData.myCheckbox);
		fakeValues.myAge = fakerData.myAge;
		fakeValues.myPassword = fakerData.myPassword;
		fakeValues.myWebsite=fakerData.myWebsite;
		fakeValues.myFile=fakerData.myFile;
		setFormFakeValues(fakeValues);
	}
	const handleSubmit = (values: object, submitProps: any) => {
		const { setSubmitting } = submitProps;
		setSubmitting(false);
	}

	return (
		<div className="bg-blue-50 pl-60 mt-12">
			<ReactForm
				config={myConfig}
				initialValues={formFakeValues || myInitialValues}
				enableReinitialize
				onSubmit={handleSubmit} actionConfig={{ submitButtonText: "Register" }} formId={'inputForm'} />
			<button className="bg-orange-500 rounded-md mb-4 h-11 p-3 text-white absolute right-0 top-0" onClick={handleAutofill} >Autofill</button>
		</div>

	);
}

export default App;
