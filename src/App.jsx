import { useState } from "react";
import CV from "./components/CV";
import FormInput from "./components/FormInput";

let App = () => {
  let defaultValue = {
    defaultPhone: "0944032128",
    defaultEmail: "Joelthousend@gmail.com",
    defaultAddress: "Addis Ababa, Ethiopia",
    defaultName: "Eyoel Seleshi",
    defaultEducationLevel: "Degree",
    defaultEducationInstitution: "Unity",
    defaultCompanyName: "ULT",
    defaultPositionTitle: "junior Developer",
    defaultLocation: "Addis Ababa",
  };

  let [email, setEmail] = useState(defaultValue.defaultEmail);
  let [phone, setPhone] = useState(defaultValue.defaultPhone);
  let [address, setAddress] = useState(defaultValue.defaultAddress);
  let [positionTitle, setPositionTitle] = useState(
    defaultValue.defaultPositionTitle
  );
  let [location, setLocation] = useState(defaultValue.defaultLocation);
  let [companyName, setCompanyName] = useState(defaultValue.defaultCompanyName);
  let [name, setName] = useState(defaultValue.defaultName);
  let [educationLevel, setEducationLevel] = useState(
    defaultValue.defaultEducationLevel
  );
  let [educationInstitution, setEducationInstitution] = useState(
    defaultValue.defaultEducationInstitution
  );

  let setter = {
    setEmail,
    setPhone,
    setAddress,
    setEducationInstitution,
    setEducationLevel,
    setName,
    setPositionTitle,
    setLocation,
    setCompanyName,
  };

  let getter = {
    name,
    companyName,
    educationInstitution,
    educationLevel,
    positionTitle,
    address,
    email,
    phone,
    location,
  };

  return (
    <>
      <FormInput getter={getter} setter={setter}></FormInput>

      <CV
        email={email}
        phone={phone}
        address={address}
        name={name}
        educationLevel={educationLevel}
        educationInstitution={educationInstitution}
        companyName={companyName}
        location={location}
        positionTitle={positionTitle}
      />
    </>
  );
};

export default App;
