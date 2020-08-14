import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, Nav, NavItem, } from 'reactstrap';
import {ImagePath} from '../../ImagePath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faInstagram, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Header = () =>{
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return(
    <React.Fragment>
      
      <header>
        <Container>
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={4} lg={4}><div className="logo"><NavLink to="/"><img src={ImagePath.logo} alt="ABC Chef Logo" /></NavLink></div></Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <div className="header-right">
                <div className="social-icons">
                  <ul>
                    <li><NavLink to="#"><FontAwesomeIcon icon={faFacebookF} /></NavLink></li>
                    <li><NavLink to="#"><FontAwesomeIcon icon={faTwitter} /></NavLink></li>
                    <li><NavLink to="#"><FontAwesomeIcon icon={faInstagram} /></NavLink></li>
                    <li><NavLink to="#"><FontAwesomeIcon icon={faPinterest} /></NavLink></li>
                    <li><NavLink to="#"><FontAwesomeIcon icon={faYoutube} /></NavLink></li>
                  </ul>
                </div>
                <Navbar expand="md" className="px-0">
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                  <Nav className="ml-auto mr-0" navbar>
                    <NavItem>
                      <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/ChefSignupStepOne">Become a Chef</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink to="/FindChef">Find a Chef</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      
    </React.Fragment>
  )
}
export default Header;