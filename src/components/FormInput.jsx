import "../styles/formInput.css";

/**
 * 
 * let defaultValue = {
    defaultPhone: "0944032128",
    defaultEmail: "Joelthousend@gmail.com",
    defaultAddress: "Addis Ababa, Ethiopia",
    defaultName: "Eyoel Seleshi",
    defaultEducationLevel: "Degree",
    defaultEducationInstitution: "Unity",
  };

   let setter = {
    setEmail,
    setPhone,
    setAddress,
    setEducationInstitution,
    setEducationLevel,
    setName,
  };

 */

let FormInput = (props) => {
  return (
    <div className="formContainer">
      <div className="personalInfo form">
        <h1>Personal Information</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={props.getter.name}
          onChange={(event) => props.setter.setName(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          placeholder="Joelthousend"
          onChange={(event) => props.setter.setEmail(event.target.value)}
          value={props.getter.email}
        />

        <label htmlFor="phone">Phone Number:</label>
        <input
          type="number"
          id="phone"
          onChange={(event) => props.setter.setPhone(event.target.value)}
          value={props.getter.phone}
        />

        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          onChange={(event) => props.setter.setAddress(event.target.value)}
          value={props.getter.address}
        />
      </div>

      <div className="education form">
        <h1>Education</h1>
        <label htmlFor="edLevel">Education Level</label>
        <input
          type="text"
          id="edLevel"
          onChange={(event) =>
            props.setter.setEducationLevel(event.target.value)
          }
          value={props.getter.educationLevel}
        />

        <label htmlFor="edInstitution">Education Received Institution</label>
        <input
          type="text"
          id="edInstitution"
          onChange={(event) =>
            props.setter.setEducationInstitution(event.target.value)
          }
          value={props.getter.educationInstitution}
        />
      </div>

      <div className="practical form">
        <h1>Practical Experience</h1>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          id="companyName"
          onChange={(event) => props.setter.setCompanyName(event.target.value)}
          value={props.getter.companyName}
        />

        <label htmlFor="position">Position Title</label>
        <input
          type="text"
          id="position"
          onChange={(event) =>
            props.setter.setPositionTitle(event.target.value)
          }
          value={props.getter.positionTitle}
        />

        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          onChange={(event) => props.setter.setLocation(event.target.value)}
          value={props.getter.location}
        />
      </div>
    </div>
  );
};

export default FormInput;
