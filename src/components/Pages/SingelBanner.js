import React from 'react';
import { Container } from 'reactstrap';

const SingelBanner = (props) =>{
  return(
    <React.Fragment>
      <div className="singel-banner">
      <img src={props.bannerImg} alt="" className="img-fluid" />
        <div className="singel-caption">
          <Container>
            <h1 className={props.classNameAli}>{props.bannerTitle}</h1>
          </Container>
        </div>
      </div>
    </React.Fragment>
  )
}
export default SingelBanner;