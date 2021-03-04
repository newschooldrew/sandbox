import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle
} from "reactstrap";

function ProfileCards(){
  return (
    <>
      <Card className="card-profile" data-background-color="black">
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised"
              src="https://i.pinimg.com/originals/dc/57/d8/dc57d8def6fc1edd531bc2b611cbaca1.jpg"
            ></img>
          </a>
        </div>
        <CardBody>
          <h6 className="card-category">CEO / Co-Founder</h6>
          <CardTitle tag="h4">James Thompson</CardTitle>
          <p className="card-description">
            Don't be scared of the truth because we need to restart the human
            foundation in truth.
          </p>
          <Button
            className="btn-round"
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Follow
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default ProfileCards;