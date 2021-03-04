import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Collapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";


function Headers() {

  return (
    <>
      <div className="cd-section" id="headers">
        <div className="header-1">
          <div className="page-header header-filter">
            <div
              className="page-header-image"
              style={{
                backgroundImage: "url('https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/napavalley/Chappellet_Vineyard_Sunset_in_Fall_42eaa7cf-a1f1-4f6b-a260-b6890a6762db.jpg')",
              }}
            ></div>
            <Container>
              <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                  <h1 className="title">Sandbox Collective</h1>
                  <h4 className="description">
                    The riding of waves has likely existed since humans began
                    swimming in the ocean. In this sense, bodysurfing is the
                    oldest type of wave-catching. Standing up on what is now
                    called a surfboard is a relatively recent innovation
                    developed by the Polynesians.
                  </h4>
                  <br></br>
                  <div className="buttons">
                  <Button color="info" size="lg">
                      Schedule a Tour
                  </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default Headers;
