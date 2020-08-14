import React from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col, Label, Input } from 'reactstrap';
import { NavLink } from "react-router-dom";
import SingelBanner from '../SingelBanner';

const UserSignupStepTwo = () =>{
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
                    <span className="active">2</span>
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
              <h2>Chef Search</h2>
              <Label className="label">What are you looking for :</Label>
              <Input type="select">
                <option>Type of Food</option>
              </Input>
              <Input type="text" placeholder="Select a Date or Date Range" />
              <Input type="textarea" placeholder="Food Allergies or Intolerances" className="mb-0" />
              <Label className="condition">Description in 300 characters and less</Label>
              {/* button comment out for validation*/}
              {/* <button className="defaualt">Search chef now</button> */}

              {/* Comment this NavLink remove after validation. */}
              <NavLink to="/FindChef" className="defaualt">Next</NavLink>

            </div>
          </Col>
        </Row>
      </Container>

    </React.Fragment>
  )
}

export default UserSignupStepTwo;