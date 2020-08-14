import React from 'react';
import { ImagePath } from '../../../ImagePath';
import { Container } from 'reactstrap';

const UserSignupStepOne = () =>{
  return(
    <React.Fragment>
      <div className="bannerLess"></div>
      
      <div className="findChef-map">
        <iframe className="map" title="Find Chef" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d446225.55674463406!2d-75.80799244355055!3d42.71472506867751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sin!4v1596551594761!5m2!1sen!2sin" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>

      <Container className="my-5">
        <div className="mapResults">
          <div className="map-head">
            <h4 className="mb-0">Searching by location</h4>
            <span>Showing 3-12</span>
          </div>
          <div className="chefbox">
            <img src={ImagePath.avtar} alt="" className="avtar" />
            <div>
              <h6 className="mb-0">Jhone Smith</h6>
              <p className="mb-0">jhone@email.com<br /> +123456789</p>
              <button className="chatnow mb-2"><img src={ImagePath.chat} alt="" /> Start Chat Now</button>
              <button className="booknow">Book now</button>
            </div>
            <button className="wishlist"><img src={ImagePath.wishlist} alt="" /></button>
          </div>
          <div className="chefbox">
            <img src={ImagePath.avtar} alt="" className="avtar" />
            <div>
              <h6 className="mb-0">Jhone Smith</h6>
              <p className="mb-0">jhone@email.com<br /> +123456789</p>
              <button className="chatnow mb-2"><img src={ImagePath.chat} alt="" /> Start Chat Now</button>
              <button className="booknow">Book now</button>
            </div>
            <button className="wishlist"><img src={ImagePath.wishlist} alt="" /></button>
          </div>
          <div className="chefbox">
            <img src={ImagePath.avtar} alt="" className="avtar" />
            <div>
              <h6 className="mb-0">Jhone Smith</h6>
              <p className="mb-0">jhone@email.com<br /> +123456789</p>
              <button className="chatnow mb-2"><img src={ImagePath.chat} alt="" /> Start Chat Now</button>
              <button className="booknow">Book now</button>
            </div>
            <button className="wishlist"><img src={ImagePath.wishlist} alt="" /></button>
          </div>
        </div>
      </Container>

    </React.Fragment>
  )
}

export default UserSignupStepOne;