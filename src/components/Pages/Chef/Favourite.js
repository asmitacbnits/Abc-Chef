import React from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col, } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";


const Favourite = () =>{
  return(
    <React.Fragment>
      <div className="singel-banner">
        <img src={ImagePath.banner3} alt="" className="img-fluid" />
        <div className="singel-caption">
          <Container>
            <h1 className="text-center">Favorites</h1>
          </Container>
        </div>
      </div>

      <Container>
        <div className="febBox">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={ImagePath.chef} alt="" className="img-fluid br-5" />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <h2>Jhone Smith</h2>
              <h6>Email: jhone@email.com</h6>
              <h6>Phone: +123456789</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.</p>
              <NavLink to="#" className="viewbtn">view profile</NavLink>
              <button className="wishbtn"><FontAwesomeIcon icon={faHeart} /></button>
            </Col>
          </Row>
        </div>
        <div className="febBox">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={ImagePath.chef} alt="" className="img-fluid br-5" />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <h2>Jhone Smith</h2>
              <h6>Email: jhone@email.com</h6>
              <h6>Phone: +123456789</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.</p>
              <NavLink to="#" className="viewbtn">view profile</NavLink>
              <button className="wishbtn"><FontAwesomeIcon icon={faHeart} /></button>
            </Col>
          </Row>
        </div>
        <div className="febBox">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={ImagePath.chef} alt="" className="img-fluid br-5" />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <h2>Jhone Smith</h2>
              <h6>Email: jhone@email.com</h6>
              <h6>Phone: +123456789</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.</p>
              <NavLink to="#" className="viewbtn">view profile</NavLink>
              <button className="wishbtn"><FontAwesomeIcon icon={faHeart} /></button>
            </Col>
          </Row>
        </div>
        <div className="febBox">
          <Row>
            <Col xs={12} sm={12} md={4} lg={4}>
              <img src={ImagePath.chef} alt="" className="img-fluid br-5" />
            </Col>
            <Col xs={12} sm={12} md={8} lg={8}>
              <h2>Jhone Smith</h2>
              <h6>Email: jhone@email.com</h6>
              <h6>Phone: +123456789</h6>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words.</p>
              <NavLink to="#" className="viewbtn">view profile</NavLink>
              <button className="wishbtn"><FontAwesomeIcon icon={faHeart} /></button>
            </Col>
          </Row>
        </div>
      </Container>

     

    </React.Fragment>
  )
}

export default Favourite;