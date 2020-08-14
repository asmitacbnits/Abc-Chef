import React from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from "react-router-dom";
import SingelBanner from '../SingelBanner';

const ChefSignupStepTwo = () =>{
  return(
    <React.Fragment>
      {/* <div className="singel-banner">
        <img src={ImagePath.banner4} alt="" className="img-fluid" />
        <div className="singel-caption">
          <Container>
            <h1>Start Cooking Now</h1>
          </Container>
        </div>
      </div> */}

      <SingelBanner
        bannerImg={ImagePath.banner4}
        bannerTitle="Start Cooking Now"
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
                    <p>Sign up and register to cook either online or by downloading our mobile app in stores.</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span className="active">2</span>
                    <h3>Submit Requirements</h3>
                    <p>Chefs must submit a valid Food Safety Certificate as well as pass a mandatory background assessment.</p>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <div className="ts-box">
                    <span>3</span>
                    <h3>Your Business, Your Way</h3>
                    <p>Once approved your business is yours to manage.  Create the schedule you want with the clients you want to serve.</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={5}>
            <div className="formBox">
              <div className="booxInfo">basic info</div>
              <h2>Chef Register New Account</h2>
              <input type="text" placeholder="Address" />
              <input type="text" placeholder="Street" />
              <select>
                <option>City</option>
              </select>
              <input type="number" placeholder="Postal Code" />
              <select>
                <option>Province</option>
              </select>
              <input type="number" placeholder="Phone Number" />
              {/* button comment out for validation */}
              {/* <button className="defaualt">Next</button> */}

              {/* Comment this NavLink remove after validation. */}
              <NavLink to="/ChefSignupStepThird" className="defaualt">Next</NavLink>
              
            </div>
          </Col>
        </Row>
      </Container>

      <div className="features">
        <Container>
          <h3 className="heading2">Join a cooking revolution!!!</h3>
          <p className="subheading mb-5">Connect with thousands of food lovers looking to bring the culinary experience to another level.</p>
          <Row>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="features-box">
                <img src={ImagePath.lowfees} alt="" />
                <h4 className="my-4">Marketplace Leading Low Fees</h4>
                <p>Earn what you deserve while exercising your passion!</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="features-box">
                <img src={ImagePath.schedule} alt="" />
                <h4 className="my-4">Your Schedule</h4>
                <p>Manage your bookings and work when its convenient for you!</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <div className="features-box">
                <img src={ImagePath.menu} alt="" />
                <h4 className="my-4">Your Menu</h4>
                <p>Create and prepare meals that reflect you and that you carefully choose!</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={3} lg={3}>
              <div className="features-box">
                <img src={ImagePath.support} alt="" />
                <h4 className="my-4">Our Support</h4>
                <p>You are backed with industry leading App and 24/7 customer service</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </React.Fragment>
  )
}

export default ChefSignupStepTwo;