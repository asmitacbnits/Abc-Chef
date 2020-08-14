import React from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faGoogle } from '@fortawesome/free-brands-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import SingelBanner from '../SingelBanner';

const ChefDashboard = () =>{
  
  return(
    <React.Fragment>
      {/* <div className="singel-banner">
        <img src={ImagePath.banner5} alt="" className="img-fluid" />
        <div className="singel-caption text-center">
          <Container>
            <h1>Chef Dashboard</h1>
          </Container>
        </div>
      </div> */}

      <SingelBanner
        bannerImg={ImagePath.banner5}
        bannerTitle="Chef Dashboard"
        classNameAli="text-center"
      />

      <Container>
        <section className="basic-into">
          <Row className="align-items-center">
            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="chefImg mt-0 mx-auto">
                <img src={ImagePath.chefPic} alt="" />
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="chef-data">
                <h6>Name: Jhone Smith</h6>
                <p>Email: jhone@email.com</p>
                <p>Phone: +123456789</p>
                <p>DOB: 03/05/1978</p>
                <p>Address: 1234 Street road City name,</p>
                <p>pin-154-5632</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={4}>
              <div className="chef-data">
                <p>Total log: 103 Time (Today 5 Times)</p>
                <p>Last log: 3 February, 2020, 10:00 PM</p>
                <p className="chef-social mt-4">
                  <FontAwesomeIcon icon={faFacebookF} className="fa-w-16" />
                  <FontAwesomeIcon icon={faTwitter} className="fa-w-16" />
                  <FontAwesomeIcon icon={faEnvelope} className="fa-w-16" />
                  <FontAwesomeIcon icon={faGoogle} className="fa-w-16" />
                </p>
              </div>
            </Col>
          </Row>
        </section>
      </Container>

      <div className="myskill-bg my-5 py-5">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="myskill-box p-4">
                <h3 className="heading3 mb-3">My Work Experience:</h3>
                <strong className="font-weight-bold mb-0">Lorem Ipsum, you need:</strong>
                <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
                <strong className="font-weight-bold mb-0">Lorem Ipsum, you need:</strong>
                <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
                <strong className="font-weight-bold mb-0">Lorem Ipsum, you need:</strong>
                <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="myskill-box mt-4 mt-lg-0 p-4">
                <h3 className="heading3 mb-3">My Expertise:</h3>
                <strong className="font-weight-bold mb-0">Lorem Ipsum, you need:</strong>
                <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
                <strong className="font-weight-bold mb-0">Lorem Ipsum, you need:</strong>
                <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
                <strong className="font-weight-bold mb-0">Lorem Ipsum, you need:</strong>
                <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="mb-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="">
              <h3 className="heading3 mb-3">My Work Experience:</h3>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
 All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={6}>
            <div className="">
              <h3 className="heading3 mb-3">My Cooking Classes:</h3>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <img src={ImagePath.mycook1} alt="" className="img-fluid mycook1 mb-2 mb-lg-2" />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte ration in some form.
By injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={12} md={4} lg={4}>
                  <img src={ImagePath.mycook1} alt="" className="img-fluid mycook1 mb-2 mb-lg-2" />
                </Col>
                <Col xs={12} sm={12} md={8} lg={8}>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alte ration in some form.
By injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      

    </React.Fragment>
  )
}

export default ChefDashboard;