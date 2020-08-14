import React from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col, Label, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";
import SingelBanner from '../SingelBanner';

const UserSignupStepOne = () =>{
  return(
    <React.Fragment>
      {/* <div className="singel-banner">
        <img src={ImagePath.banner2} alt="" className="img-fluid" />
        <div className="singel-caption">
          <Container>
            <h1>Looking for a Chef</h1>
          </Container>
        </div>
      </div> */}

      <SingelBanner
        bannerImg={ImagePath.banner2}
        bannerTitle="Looking for a Chef"
        classNameAli="text-left"
      />

      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={7}>
            <div className="threeStep">
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span className="active">1</span>
                    <h3>Create your profile</h3>
                    <p>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span>2</span>
                    <h3>Chef Search</h3>
                    <p>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span>3</span>
                    <h3>Start Eating</h3>
                    <p>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <div className="formBox">
              <h2>User Register New Account</h2>
              <button className="loginwithfacebook"><FontAwesomeIcon icon={faFacebookSquare} className="mr-2" /> Facebook</button>
              <div className="orDivider"><span>OR</span></div>
              <Label className="label">Signup with email</Label>
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
              <input type="email" placeholder="Email" />
              <input type="email" placeholder="Confirm Email" />
              <input type="Password" placeholder="Password" />
              <input type="Password" placeholder="Confirm Password" />
              <textarea placeholder="Favorite Dish" className="mb-0"></textarea>
              <Label className="condition">Description in 300 characters and less</Label>
              {/* button comment out for validation */}
              {/* <button className="defaualt">Next</button> */}

              {/* Comment this NavLink remove after validation. */}
              <NavLink to="/UserSignupStepTwo" className="defaualt">Next</NavLink>
              
            </div>
          </Col>
        </Row>
      </Container>

    </React.Fragment>
  )
}

export default UserSignupStepOne;