import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle
} from "reactstrap";

function Sections(){
  return (
    <>
      <Card
        className="card-background"
        style={{
          width: "10rem",
          margin:'10px',
          backgroundImage: "url('https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/napavalley/Chappellet_Vineyard_Sunset_in_Fall_42eaa7cf-a1f1-4f6b-a260-b6890a6762db.jpg')"
        }}
      >
        <CardBody>
          <CardTitle className="text-center" tag="div">
            <h3>Infants</h3>
          </CardTitle>
          <CardFooter className="text-left">
            <div className="stats">
              <span>
                <i className="now-ui-icons media-2_sound-wave"></i>
                SPACE.com
              </span>
              <span>
                <i className="now-ui-icons tech_watch-time"></i>
                20min ago
              </span>
            </div>
            <div className="stats-link pull-right">
              <a
                className="footer-link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Environment
              </a>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
      <Card
        className="card-background"
        style={{
            width: "10rem",
            margin:'10px',
          backgroundImage: "url('https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/napavalley/Chappellet_Vineyard_Sunset_in_Fall_42eaa7cf-a1f1-4f6b-a260-b6890a6762db.jpg')"
        }}
      >
        <CardBody>
          <CardTitle className="text-center" tag="div">
            <h3>Toddlers</h3>
          </CardTitle>
          <CardFooter className="text-left">
            <div className="stats">
              <span>
                <i className="now-ui-icons media-2_sound-wave"></i>
                SPACE.com
              </span>
              <span>
                <i className="now-ui-icons tech_watch-time"></i>
                20min ago
              </span>
            </div>
            <div className="stats-link pull-right">
              <a
                className="footer-link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Environment
              </a>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
      <Card
        className="card-background"
        style={{
            width: "10rem",
            margin:'10px',
          backgroundImage: "url('https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,h_1200,q_75,w_1200/v1/clients/napavalley/Chappellet_Vineyard_Sunset_in_Fall_42eaa7cf-a1f1-4f6b-a260-b6890a6762db.jpg')"
        }}
      >
        <CardBody>
          <CardTitle className="text-center" tag="div">
            <h3>Preschool</h3>
          </CardTitle>
          <CardFooter className="text-left">
            <div className="stats">
              <span>
                <i className="now-ui-icons media-2_sound-wave"></i>
                SPACE.com
              </span>
              <span>
                <i className="now-ui-icons tech_watch-time"></i>
                20min ago
              </span>
            </div>
            <div className="stats-link pull-right">
              <a
                className="footer-link"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Environment
              </a>
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
}

export default Sections;