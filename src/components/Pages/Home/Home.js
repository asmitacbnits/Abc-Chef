import React from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col } from 'reactstrap';
import BannerSlider from '../Home/BannerSlider';
//import Header from '../../common/Header';
//import Footer from '../../common/Footer';
import { NavLink } from "react-router-dom";

const Home = () =>{
  return(
    <React.Fragment>
      {/* <Header /> */}
      <div className="banner">
        <BannerSlider />
        <div className="baanerCaption">
          <Container>
            <h1>Food made with love</h1>
            <p className="bannerText"><strong>Lorem ipsum dolor</strong> sit amet, consec teturadisc ingelit. In utullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis montes...</p>
          </Container>
        </div>
      </div>

      <Container>
        <div className="chooseYourOptions">
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={4} lg={4}>
              <h2 className="heading1">Choose your options :</h2>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="cIcon">
                <NavLink to="/UserSignupStepOne"><img src={ImagePath.cIcon1} alt="" /></NavLink>
                <p>I am looking for a Chef</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
              <div className="cIcon">
                <NavLink to="/ChefSignupStepOne"><img src={ImagePath.cIcon2} alt="" /></NavLink>
                <p>I am a Chef</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      <Container>
        <div className="videofream">
          <img src={ImagePath.video} alt="video" />
          <span>Dining with my table</span>
        </div>
      </Container>

      <div className="professional">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} sm={12} md={12} lg={8}>
            <h2>A platform to connect with and hire a certified and professional chef.</h2>
            <p>Morbi pharetr se id lectus iaculis, nec commodo mauris interdum. Quisque ipsum neque, ullamcorper in diam nec. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            <p>Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the rem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <div className="d-flex">
              <div className="professionalBox">
                <img src={ImagePath.dinner} alt="" />
                <span>Dinner</span>
              </div>
              <div className="professionalBox">
                <img src={ImagePath.checf} alt="" />
                <span>Dinner</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
   {/* <Footer /> */}
    </React.Fragment>
  )
}
export default Home;