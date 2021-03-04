
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui icons
import Subject from "@material-ui/icons/Subject";
import Delete from "@material-ui/icons/Delete";
// core components
import GridContainer from "./components/Grid/GridContainer.js";
import GridItem from "./components/Grid/GridItem.js";
import Card from "./components/Card/Card.js";
import CardBody from "./components/Card/CardBody.js";
import Button from "./components/CustomButtons/Button.js";
import useMediaQuery from '@material-ui/core/useMediaQuery';

import cardsStyle from "./assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";
import {
  CardTitle
} from "reactstrap";
const style = {
  ...cardsStyle
};

const useStyles = makeStyles(style);

export default function MyCards() {
  const mobileSize = useMediaQuery('(max-width:930px)');
  React.useEffect(() => {
    addStylesForRotatingCards();
    return function cleanup() {};
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  const classes = useStyles();
  return (
    !mobileSize ? (<>
    <GridContainer spacing={3}>
      <GridItem item xs>
        <div className={classes.rotatingCardContainer}>
          <Card background className={classes.cardRotate}>
            <div
              className={`${classes.front} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url('https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg')`
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h6 className={classes.cardCategoryWhite}>
                  Title
                </h6>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <h3 className={classes.cardTitleWhite}>
                    Liliana
                  </h3>
                </a>
                <p className={classes.cardDescriptionWhite}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth
                </p>
              </CardBody>
            </div>
            <div
              className={`${classes.back} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url('https://my.alfred.edu/zoom/_images/fall-drone-shot-thumbnail.jpg')`
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                <p className={classes.cardDescriptionWhite}>
                  As an Admin, you have shortcuts to edit, view or delete the
                  posts.
                </p>
                <div className={classes.textCenter}>
                  <Button round justIcon color="primary">
                    <Subject />
                  </Button>
                  <Button round justIcon color="success">
                    <Icon>mode_edit</Icon>
                  </Button>
                  <Button round justIcon color="danger">
                    <Delete />
                  </Button>
                </div>
              </CardBody>
            </div>
          </Card>
        </div>
      </GridItem>
      <GridItem item xs>
        <div className={classes.rotatingCardContainer}>
          <Card background className={classes.cardRotate}>
            <div
              className={`${classes.front} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url('https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg')`
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h6 className={classes.cardCategoryWhite}>
                  Title
                </h6>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <h3 className={classes.cardTitleWhite}>
                    Martha
                  </h3>
                </a>
                <p className={classes.cardDescriptionWhite}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth
                </p>
              </CardBody>
            </div>
            <div
              className={`${classes.back} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url('https://my.alfred.edu/zoom/_images/fall-drone-shot-thumbnail.jpg')`
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                <p className={classes.cardDescriptionWhite}>
                  As an Admin, you have shortcuts to edit, view or delete the
                  posts.
                </p>
                <div className={classes.textCenter}>
                  <Button round justIcon color="primary">
                    <Subject />
                  </Button>
                  <Button round justIcon color="success">
                    <Icon>mode_edit</Icon>
                  </Button>
                  <Button round justIcon color="danger">
                    <Delete />
                  </Button>
                </div>
              </CardBody>
            </div>
          </Card>
        </div>
      </GridItem>
      <GridItem item xs>
        <div className={classes.rotatingCardContainer}>
          <Card background className={classes.cardRotate}>
            <div
              className={`${classes.front} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url('https://i.pinimg.com/originals/af/8d/63/af8d63a477078732b79ff9d9fc60873f.jpg')`
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h6 className={classes.cardCategoryWhite}>
                  Title
                </h6>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <h3 className={classes.cardTitleWhite}>
                    Rocky
                  </h3>
                </a>
                <p className={classes.cardDescriptionWhite}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth
                </p>
              </CardBody>
            </div>
            <div
              className={`${classes.back} ${classes.wrapperBackground}`}
              style={{
                backgroundImage: `url('https://my.alfred.edu/zoom/_images/fall-drone-shot-thumbnail.jpg')`
              }}
            >
              <CardBody background className={classes.cardBodyRotate}>
                <h5 className={classes.cardTitleWhite}>Manage Post</h5>
                <p className={classes.cardDescriptionWhite}>
                  As an Admin, you have shortcuts to edit, view or delete the
                  posts.
                </p>
                <div className={classes.textCenter}>
                  <Button round justIcon color="primary">
                    <Subject />
                  </Button>
                  <Button round justIcon color="success">
                    <Icon>mode_edit</Icon>
                  </Button>
                  <Button round justIcon color="danger">
                    <Delete />
                  </Button>
                </div>
              </CardBody>
            </div>
          </Card>
        </div>
      </GridItem>
    </GridContainer>
    </>):(    <>
      <Card className="card-profile" data-background-color="black" style={{marginBottom:'100px'}}>
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised"
              src="https://my.alfred.edu/zoom/_images/fall-drone-shot-thumbnail.jpg"
            ></img>
          </a>
        </div>
        <CardBody>
          <h6 className="card-category" style={{textColor:'black'}}>CEO / Co-Founder</h6>
          <CardTitle tag="h4" style={{color:'black'}}>Liliana Alvarez</CardTitle>
          <p className="card-description" style={{color:'black'}}>
            Don't be scared of the truth because we need to restart the human
            foundation in truth.
          </p>
          <Button
            className="btn-round"
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Read More
          </Button>
        </CardBody>
      </Card>
      <Card className="card-profile" data-background-color="black" style={{marginBottom:'100px'}}>
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised"
              src="https://my.alfred.edu/zoom/_images/fall-drone-shot-thumbnail.jpg"
            ></img>
          </a>
        </div>
        <CardBody>
          <h6 className="card-category" style={{textColor:'black'}}>CEO / Co-Founder</h6>
          <CardTitle tag="h4" style={{color:'black'}}>Martha</CardTitle>
          <p className="card-description" style={{color:'black'}}>
            Don't be scared of the truth because we need to restart the human
            foundation in truth.
          </p>
          <Button
            className="btn-round"
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Read More
          </Button>
        </CardBody>
      </Card>
      <Card className="card-profile" data-background-color="black" style={{marginBottom:'100px'}}>
        <div className="card-avatar">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img
              alt="..."
              className="img img-raised"
              src="https://my.alfred.edu/zoom/_images/fall-drone-shot-thumbnail.jpg"
            ></img>
          </a>
        </div>
        <CardBody>
          <h6 className="card-category" style={{textColor:'black'}}>CEO / Co-Founder</h6>
          <CardTitle tag="h4" style={{color:'black'}}>Liliana Alvarez</CardTitle>
          <p className="card-description" style={{color:'black'}}>
            Don't be scared of the truth because we need to restart the human
            foundation in truth.
          </p>
          <Button
            className="btn-round"
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Read More
          </Button>
        </CardBody>
      </Card>
    </>) )}