import React from 'react';
import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='aboutus'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="abut-spoon" className='spoon__image' />
        <p className='p_opensans' style={{color:'white'}}>
          Vertragliche Laufzeitinkongruenz: Um zu einem Verständnis der grundlegenden Aspekte ihres Liquiditätsbedarfs zu kommen, sollten die Banken darüber hinaus die geografische.
        </p>
        <button className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus-content_knife">
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="abut-spoon" className='spoon__image' />
        <p className='p_opensans' style={{color:'white'}}>
          Um zu einem Verständnis der grundlegenden Aspekte ihres Liquiditätsbedarfs zu kommen, sollten die Banken darüber hinaus die geografische.
        </p>
        <button className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
