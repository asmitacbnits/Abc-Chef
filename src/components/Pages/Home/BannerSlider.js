import React from 'react';
import { ImagePath } from '../../../ImagePath';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class BannerSlider extends React.Component{
  constructor(props){
      super(props)
      this.state={
        responsive:{
          0: {
            items: 1,
          },
          1000: {
            items: 1,
          },
        }
      }
    }
  render(){
      return(
          <div>
              <OwlCarousel className="owl-theme" loop margin={0} autoplay={true} nav={false} dotClass={true} responsive={this.state.responsive} >
              <div class="item"><img src={ImagePath.banner} alt="banner" className="img-fluid" /></div>
              <div class="item"><img src={ImagePath.banner} alt="banner" className="img-fluid" /></div>
              <div class="item"><img src={ImagePath.banner} alt="banner" className="img-fluid" /></div>
              </OwlCarousel>
          </div>
      );
  }
}

export default BannerSlider;