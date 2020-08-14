import React from 'react';
import { Container, Row, Col, CustomInput, FormGroup, Label, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const ChefSignupStepThird = () =>{
  return(
    <React.Fragment>
      <div className="bannerLess"></div>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={10} lg={6} className="mx-auto">
            <div className="threeStep fullwidth">
              <div className="ts-box d-flex justify-content-between">
                <span className="active m-0">1</span>
                <span className="active m-0">2</span>
                <span className="active m-0">3</span>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={10} lg={10} className="mx-auto">
            <div className="from-wrapper mb-5">
              <h1>Complete Profile</h1>
              <FormGroup>
                <Label for="exampleCheckbox">Services Offered</Label>
                <div className="ml-3">
                  <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Meal Preparataion" className="mt-2" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Catered Private Event (IO + People)" className="mt-2" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Dinner Experience" className="mt-2" />
                  <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Private Cooking Lessons" className="mt-2" />
                </div>
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="textarea" name="text" id="" className="mb-0" placeholder="Working Experience" />
                <Label className="condition">Description in 300 characters and less</Label>
              </FormGroup>
              <FormGroup>
                <div className="ml-3">
                  <CustomInput type="checkbox" id="background-check" label="Complete background check" className="mt-2" />
                </div>
              </FormGroup>
              <FormGroup>
                <Input type="select">
                  <option>Tell us how you want to be paid?</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleCheckbox">Chef Experience</Label>
                <div className="ml-3">
                  <CustomInput type="checkbox" id="chef-experience-beginners" label="Beginners" className="mt-2 d-md-inline-flex d-lg-inline-flex" />
                  <CustomInput type="checkbox" id="chef-experience-moderates" label="Moderates" className="mt-2 ml-md-3 ml-lg-3 d-md-inline-flex d-lg-inline-flex" />
                  <CustomInput type="checkbox" id="chef-experience-experts" label="Experts" className="mt-2 ml-md-3 ml-lg-3 d-md-inline-flex d-lg-inline-flex" />
                </div>
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Availability Calendar" className="dateicon" />
              </FormGroup>
              <FormGroup>
                <Input type="select">
                  <option>Distance Willing to Travel</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Input type="select">
                  <option>Attended Cooking School</option>
                </Input>
              </FormGroup>
              <div className="custom-file">
                <Input type="file" className="custom-file-input" id="uploadpicture" />
                <Label className="custom-file-label" for="uploadpicture" data-browse="">Upload Pictures of the meal</Label>
              </div>
              <Label className="condition mt-3">Must enter a minimum of 4 meals</Label>
              <FormGroup>
                <Input type="select">
                  <option>Enter Details</option>
                </Input>
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="textarea" name="text" id="" className="mb-0" placeholder="Enter Menu" />
              </FormGroup>
              <FormGroup>
                <Input type="select">
                  <option>Tag Food Category</option>
                </Input>
              </FormGroup>
              {/* button comment out for validation */}
              {/* <button className="defaualt">Submit</button> */}

              {/* Comment this NavLink remove before validation. */}
              <NavLink to="#" className="defaualt">Submit</NavLink>


            </div>
          </Col>
        </Row>
        
      </Container>

    </React.Fragment>
  )
}

export default ChefSignupStepThird;