import { useState } from "react";
import "../styles/cv.css";

let CV = (props) => {
  return (
    <div className="cv">
      <h1 className="toper">Personal Details</h1>
      <div className="listp">
        <p>{props.name}</p>
        <p>{props.email}</p>
        <p>{props.phone}</p>
        <p>{props.address}</p>
      </div>

      <h1>Education</h1>
      <div className="listp">
        <p>{props.educationLevel}</p>
        <p>{props.educationInstitution}</p>
      </div>

      <h1>Experience</h1>
      <div className="listp">
        <p>{props.companyName}</p>
        <p>{props.positionTitle}</p>
        <p>{props.location}</p>
      </div>
    </div>
  );
};

export default CV;
