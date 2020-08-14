import React from 'react';
import { Container, Row, Col, CustomInput, FormGroup, Input } from 'reactstrap';
import {NavLink} from 'react-router-dom';

const PaymentMethod = () =>{
  return(
    <React.Fragment>
      <div className="bannerLess"></div>
      <div className="gray-bg">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={10} lg={10} className="mx-auto mt-5">
            <div className="from-wrapper mb-5">
              <h1 className="mb-4">Payment Method</h1>
              <FormGroup className="ml-3">
                <CustomInput type="radio" id="credit-card" name="customRadio" label="Credit Card" />
              </FormGroup>
              <FormGroup>
                <Input type="text" placeholder="Name on Card" />
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="number" placeholder="Card Number" />
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="select">
                  <option>Expiry Month</option>
                </Input>
              </FormGroup>
              <FormGroup className="pt-2">
                <Input type="number" max="4" placeholder="Expiry Year" />
              </FormGroup>
              <FormGroup className="ml-3">
                <CustomInput type="radio" id="paypal" name="customRadio" label="Credit Card" />
              </FormGroup>
              <FormGroup>
                <div className="ml-3 d-flex align-items-center">
                  <CustomInput type="checkbox" id="terms-and-conditions" label="I have read and accept" className="mt-2" />
                  <NavLink to="#" className="red-text mt-2 ml-2">Terms and Conditions</NavLink>
                </div>
              </FormGroup>
              {/* button comment out for validation */}
              {/* <button className="defaualt">Submit</button> */}

              {/* Comment this NavLink remove before validation. */}
              <NavLink to="#" className="defaualt">Confirm and pay</NavLink>

            </div>
          </Col>
        </Row>
      </Container>
      </div>

    </React.Fragment>
  )
}

export default PaymentMethod;