import React, {useState} from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";

const ChefProfile = () =>{
  
  const [startDate, setStartDate] = useState(new Date());

  return(
    <React.Fragment>
      <div className="singel-banner">
        <img src={ImagePath.banner3} alt="" className="img-fluid" />
        <div className="singel-caption text-center">
          <Container>
            <h1>Chef Profile</h1>
            <button className="red-book-now-btn mt-lg-3">Book Now</button>
          </Container>
        </div>
      </div>

      <Container>
        <Row className="no-gutters mt-5 mt-lg-2">
          <Col xs={12} sm={12} md={12} lg={4} className="personal-info order-2 order-md-2 order-lg-1">
            <div className="p-3">
              <h2 className="mb-4">Personal Info:</h2>
              <h6>Name: Jhone Smith</h6>
              <p>Email: jhone@email.com</p>
              <p>Phone: +123456789</p>
              <p>DOB: 03/05/1978</p>
              <p>Address: 1234 Street road City name,</p>
              <p>pin-154-5632</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="chef-info order-1 order-md-1 order-lg-2">
            <div className="text-center p-3">
              <div className="chefImg mx-auto">
                <img src={ImagePath.chefPic} alt="" />
              </div>
              <p className="like-comment mt-3"><FontAwesomeIcon icon={faThumbsUp} /> 42 likes <img src={ImagePath.chat2} alt="" /> 42 comments</p>
              <p className="rating">Rating: <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <span> (7 reviews)</span></p>
              <p className="font-weight-bold"><img src={ImagePath.verified} alt="" /> Verified Chef <img src={ImagePath.certified} alt="" className="ml-lg-2" /> Food safety certified</p>
              <p className="chef-social">Share this chef with friends and contacts <FontAwesomeIcon icon={faFacebookF} className="fa-w-16" /> <FontAwesomeIcon icon={faTwitter} className="fa-w-16" /> <FontAwesomeIcon icon={faEnvelope} className="fa-w-16" /></p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4} className="my-expertise order-3 order-md-3 order-lg-3">
            <div className="p-3">
              <h2 className="mb-4">Personal Info:</h2>
              <p className="font-weight-bold mb-1">Lorem Ipsum, you need:</p>
              <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
              <p className="font-weight-bold mb-1">Lorem Ipsum, you need:</p>
              <p>It uses a dictionary of over 200 Latin words, com bined with a handful of model sentence.</p>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Container className="my-5">
        <Row>
          <Col xs={12} sm={12} md={12} lg={8}>
            <div className="descriptions">
              <h3 className="heading3">Descriptions:</h3>
              <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sen tence structures, to generate Lorem Ipsum which looks reasonable. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet to generate Lorem Ipsum which looks reasonable.</p>
              <h3 className="mt-4 heading3">Cooking Skills:</h3>
              <strong className="font-weight-bold mb-0">Experience</strong>
              <p>generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet with a handful of model sentence structures with a handful of model sentence structures with a hand ful of model sentence structures.</p>
              <strong className="font-weight-bold mb-0">Services Offered</strong>
              <p>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reason able.All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,</p>
              <strong className="font-weight-bold mb-0">Menu</strong>
              <p>making this the first true generator on the Internet to generate Lorem Ipsum which looks reasonable. Lorem Ipsum generators on the Internet tend to repeat with a handful of model sentence structures.</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
            <h3 className="heading3">Price per hour for each service: <span>$11.22</span></h3>
            <h3 className="heading3 mt-5">Availability Calendar:</h3>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} inline />
          </Col>
        </Row>
      </Container>

      <Container>
        <h3 className="heading3">Pictures of the meal:</h3>
        <div className="inlineGallery">
        <SimpleReactLightbox>
          <SRLWrapper>
            <a href={ImagePath.galery1} data-attribute="SRL">
              <img src={ImagePath.galery1} alt="" />
            </a>
            <a href={ImagePath.galery2} data-attribute="SRL">
              <img src={ImagePath.galery2} alt="" />
            </a>
            <a href={ImagePath.galery3} data-attribute="SRL">
              <img src={ImagePath.galery3} alt="" />
            </a>
            <a href={ImagePath.galery4} data-attribute="SRL">
              <img src={ImagePath.galery4} alt="" />
            </a>
            <a href={ImagePath.galery5} data-attribute="SRL">
              <img src={ImagePath.galery5} alt="" />
            </a>
            <a href={ImagePath.galery6} data-attribute="SRL">
              <img src={ImagePath.galery6} alt="" />
            </a>
            <a href={ImagePath.galery7} data-attribute="SRL">
              <img src={ImagePath.galery7} alt="" />
            </a>
            <a href={ImagePath.galery8} data-attribute="SRL">
              <img src={ImagePath.galery8} alt="" />
            </a>
          </SRLWrapper>
        </SimpleReactLightbox>
        </div>
      </Container>

    

    </React.Fragment>
  )
}

export default ChefProfile;