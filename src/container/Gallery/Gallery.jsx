import React, { useRef } from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Gallery.css';
import {BsInstagram, BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

const imageList = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05]

const Gallery = () => {
  const scrollRef = useRef(null)

  function scroll(direction){
    const {current} = scrollRef

    if(direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

return (
  <div className="app__gallery flex__center">
    <div className="app__gallery-content">
      <SubHeading title={'Instagram'} />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{color:'#AAA'}}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolorum quidem aut blanditiis et eos.
      </p>
      <button className='custom__button'>View more</button>
    </div>

    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {
          imageList.map((image, index)=>(
            <div className="app__gallery-images_card flex__center" key={`gallery-image-${index+1}`}>
              <img src={image} alt="gallery" loading='lazy' />
              <BsInstagram className='gallery__image-icon'/>
            </div>
          ))
        }
      </div>

      <div className="app__gallery-images_arrow">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=>scroll('left')} />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={()=>scroll('right')} />
      </div>
    </div>
  </div>  
)};

export default Gallery;
