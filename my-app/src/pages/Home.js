import React from "react"
import Slider from 'react-slick'


class Home extends React.Component{
  render() {
    var settings = {
      dots: true,
      autoplay: false,
      autoplaySpeed: 3000
    }
    return (
      <div className="Slideshow">
        <Slider {...settings}>

          <div><img className="Imageslide" src='https://files.sirclocdn.xyz/kickavenue/banners/_180208162405_soccerlegends-01_1200.png' /></div>
          <div><img className="Imageslide" src='https://files.sirclocdn.xyz/kickavenue/banners/_180211000054_SEASONOFHER-02_1200.png' /></div>
          <div><img className="Imageslide" src='https://files.sirclocdn.xyz/kickavenue/banners/_180211002138_SEASONOFHER-01_1200.png' /></div>
          <div><img className="Imageslide" src='https://files.sirclocdn.xyz/kickavenue/banners/_180211001224_PGPS-01_1200.png' /></div>


        </Slider>
      </div>
    );
  }
}

export default Home
