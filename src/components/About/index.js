import React from "react";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            
            class="float-left pr-4 pb-3 img-fluid"
            
          />
          <p style={{ fontSize: "27px" }}>
            Hello, my name is Kelsi Thacker. I recently graduated a Full Stack
            Web Developer program at the University of Arizona and received
            certificate of completion. Currently I live in Tucson, AZ. I am
            actively looking for job opportunities as a Junior Web Developer. When I am not creating websites some of my hobbies
            include writing, video games, and listening to music.
          </p>
          <p style={{ fontSize: "27px" }}>
            I have understanding of both the front end and back end of website development. I am familar with React.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AboutMe;
