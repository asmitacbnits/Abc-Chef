import React from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import {ImagePath} from '../../ImagePath';

const Footer = () =>{

  return(
    <React.Fragment>
      <footer>
        <Container>
          <Row>
            <Col xs={6} sm={4} md={3} lg={2}>
              <h6>About</h6>
              <ul>
                <li><NavLink to="#">Team</NavLink></li>
                <li><NavLink to="#">Legal & Privacy</NavLink></li>
              </ul>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
              <h6>Chefs</h6>
              <ul>
                <li><NavLink to="#">Apply Now</NavLink></li>
                <li><NavLink to="#">How it works</NavLink></li>
                <li><NavLink to="#">Resources</NavLink></li>
              </ul>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
              <h6>Diners</h6>
              <ul>
                <li><NavLink to="#">How it works</NavLink></li>
                <li><NavLink to="#">Find a chef</NavLink></li>
                <li><NavLink to="#">Resources</NavLink></li>
              </ul>
            </Col>
            <Col xs={6} sm={4} md={3} lg={2}>
              <h6>Support</h6>
              <ul>
                <li><NavLink to="#">Diner Support</NavLink></li>
                <li><NavLink to="#">Chef Support</NavLink></li>
                <li><NavLink to="#">Mobile App</NavLink></li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="flogo text-center text-lg-right">
                <NavLink to="/"><img src={ImagePath.logo} alt="" className="mb-2 img-fluid" /></NavLink><br />
                <div className="d-flex justify-content-center">
                  <NavLink to="/"><img src={ImagePath.appleStore} alt="" className="img-fluid" /></NavLink>
                  <NavLink to="/"><img src={ImagePath.googlePlay} alt="" className="ml-2 img-fluid" /></NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  )
}
export default Footer;