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
            src="https://avatars0.githubusercontent.com/u/64516562?s=460&u=2778809b5be3b0ba187454d6c12564c0e67c369b&v=4"
            class="float-left pr-4 pb-3 img-fluid"
            alt="Collin Hodgson"
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