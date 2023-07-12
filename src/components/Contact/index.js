import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12" className="text-center">
          <h2>Contact Information</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "250px" }}
            src="https://user-images.githubusercontent.com/64516562/97791200-5b411100-1b95-11eb-97e6-8efaef754975.JPG"
            class="pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
          />
          <h4>
            I recently gradated a Full Stack Web Development Bootcamp at the
            University of Arizona. I was given a certificate of completion. Now I am actively looking for a Junior Web Development
            position, below I have linked my e-mail and cell phone number.
            
          </h4>
          <hr className="hr-light w-25" />
          <h3>Cell Phone</h3>
          <hr className="hr-dark w-25" />
          <a href="tel:801-792-5502">
            <MDBIcon icon="phone-alt" /> 520-334-0610
          </a>
          <hr className="hr-light w-25" />
          <h3>E-mail</h3>
          <hr className="hr-dark w-25" />
          <a href="mailto:collinhodgs@gmail.com">
            <MDBIcon icon="envelope" /> thacker.kl.01@gmail.com
          </a>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ContactInfo;