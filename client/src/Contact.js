import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import axios from 'axios'

// core components

const MapWrapper = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
      defaultOptions={{
        scrollwheel: false,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [{ color: "#ffffff" }, { lightness: 17 }],
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 18 }],
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }, { lightness: 16 }],
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#dedede" }, { lightness: 21 }],
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              { visibility: "on" },
              { color: "#ffffff" },
              { lightness: 16 },
            ],
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              { saturation: 36 },
              { color: "#333333" },
              { lightness: 40 },
            ],
          },
          { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [{ color: "#fefefe" }, { lightness: 20 }],
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
          },
        ],
      }}
    >
      <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
    </GoogleMap>
  ))
);

function ContactUs() {
  const [first1Focus, setFirst1Focus] = React.useState(false);
  const [last1Focus, setLast1Focus] = React.useState(false);
  const [email1Focus, setEmail1Focus] = React.useState(false);
  const [first2Focus, setFirst2Focus] = React.useState(false);
  const [email2Focus, setEmail2Focus] = React.useState(false);
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [notice, setNotice] = React.useState('');
  const [toggleNotice, setToggleNotice] = React.useState('');

const handleFirstName = e =>{
  const {value} = e.target
  setFirstName(value)
}

const handleLastName = e =>{
  const {value} = e.target
  setLastName(value)
}

const handleEmail = e =>{
  const {value} = e.target
  setEmail(value)
}

const handleMessage = e =>{
  const {value} = e.target
  setMessage(value)
}

const handleSubmit = e =>{
  e.preventDefault()
  const myObj = {firstName,lastName,email,message}
  console.log(myObj)
  axios.post('/send-email',{myObj})
  setFirstName('')
  setLastName('')
  setEmail('')
  setMessage('')
  setNotice(`Your message has been sent. We'll get back to you very shortly.`)
  setToggleNotice(true)
}

  return (
    <>
      <div className="cd-section" id="contact-us">
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg')",
          }}
        >
          <Container>
            <Row>
              <Col md="5">
                <h2 className="title">Get in Touch</h2>
                <h4 className="description">
                  You need more information? Check what other persons are saying
                  about our product. They are very happy with their purchase.
                </h4>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons location_pin"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p className="description">
                      Bld Mihail Kogalniceanu, nr. 8, <br></br>
                      7652 Bucharest, <br></br>
                      Romania
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-info">
                    <i className="now-ui-icons tech_mobile"></i>
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p className="description">
                      Michael Jordan <br></br>
                      +40 762 321 762 <br></br>
                      Mon - Fri, 8:00-22:00
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-contact card-raised">
                  <Form id="contact-form1" method="post" role="form">
                    <CardHeader className="text-center">
                      <CardTitle tag="h4">Contact Us</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Row>
                        <Col className="pr-2" md="6">
                          <label>First name</label>
                          <InputGroup
                            className={first1Focus ? "input-group-focus" : ""}
                          >
                            <InputGroup addonType="prepend">
                              <InputGroupText>
                                <i className="now-ui-icons users_circle-08"></i>
                              </InputGroupText>
                            </InputGroup>
                            <Input
                              aria-label="First Name..."
                              autoComplete="given-name"
                              placeholder="First Name..."
                              type="text"
                              onFocus={() => setFirst1Focus(true)}
                              onBlur={() => setFirst1Focus(false)}
                              onChange={e => handleFirstName(e)}
                              value={firstName}
                            ></Input>
                          </InputGroup>
                        </Col>
                        <Col className="pl-2" md="6">
                          <FormGroup>
                            <label>Last name</label>
                            <InputGroup
                              className={last1Focus ? "input-group-focus" : ""}
                            >
                              <InputGroup addonType="prepend">
                                <InputGroupText>
                                  <i className="now-ui-icons text_caps-small"></i>
                                </InputGroupText>
                              </InputGroup>
                              <Input
                                aria-label="Last Name..."
                                autoComplete="family-name"
                                placeholder="Last Name..."
                                type="text"
                                onFocus={() => setLast1Focus(true)}
                                onBlur={() => setLast1Focus(false)}
                                onChange={e => handleLastName(e)}
                                value={lastName}
                              ></Input>
                            </InputGroup>
                          </FormGroup>
                        </Col>
                      </Row>
                      <FormGroup>
                        <label>Email address</label>
                        <InputGroup
                          className={email1Focus ? "input-group-focus" : ""}
                        >
                          <InputGroup addonType="prepend">
                            <InputGroupText>
                              <i className="now-ui-icons ui-1_email-85"></i>
                            </InputGroupText>
                          </InputGroup>
                          <Input
                            autoComplete="email"
                            placeholder="Email Here..."
                            type="email"
                            onFocus={() => setEmail1Focus(true)}
                            onBlur={() => setEmail1Focus(false)}
                            onChange={e => handleEmail(e)}
                            value={email}
                          ></Input>
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <label>Your message</label>
                        <Input
                          id="message"
                          name="message"
                          rows="6"
                          type="textarea"
                          onChange={handleMessage}
                          value={message}
                        ></Input>
                      </FormGroup>
                      <Row>
                        <Col xs="9">
                          <Button
                            className="btn-round pull-right"
                            color="info"
                            type="submit"
                            onClick={handleSubmit}
                          >
                            Send Message
                          </Button>
                        </Col>
                          {toggleNotice ? (<div>{notice}</div>) : null}
                      </Row>
                    </CardBody>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
