import React from 'react';
import { Container, Row, Col, CustomInput, FormGroup, Label, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const ChefBook = () =>{
  return(
    <React.Fragment>
      <div className="bannerLess"></div>
      <div className="gray-bg">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={10} lg={10} className="mx-auto mt-5">
            <div className="from-wrapper mb-5">
              <h1 className="mb-4">Chef Booking Form</h1>
              <FormGroup>
                <Input type="text" placeholder="Full Name" />
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="email" placeholder="Email" />
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="tel" placeholder="Phone" />
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="text" placeholder="Select Date" />
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="text" placeholder="select Time" />
              </FormGroup>
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
                <Input type="textarea" name="text" id="" className="mb-0" placeholder="Comments" />
                <Label className="condition">Description in 300 characters and less</Label>
              </FormGroup>
              {/* button comment out for validation */}
              {/* <button className="defaualt">Submit</button> */}

              {/* Comment this NavLink remove before validation. */}
              <NavLink to="#" className="defaualt">Submit</NavLink>

            </div>
          </Col>
        </Row>
      </Container>
      </div>

    </React.Fragment>
  )
}

export default ChefBook;