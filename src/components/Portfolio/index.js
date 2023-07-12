import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";


const Projects = () => { 
    return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">
        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://github.com/alexiaValen/Anime4You"
            alt="Anime 4 You"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Anime 4 You</MDBCardTitle>
            <MDBCardText>
              As anime lovers we wanted to create a website to find new anime to watch.
            </MDBCardText>
            <MDBBtn
              href="https://github.com/AtimaB/The-Fight-Club"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        </MDBCardGroup>
    </MDBContainer>
    ); 
}; 