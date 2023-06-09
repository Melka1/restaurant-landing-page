import React, { useRef, useState } from 'react';
import {restaurant} from '../../constants'

import './Intro.css';
import { BsPauseFill, BsFillPlayFill } from 'react-icons/bs';

const Intro = () => {

  const vidRef = useRef()
  const [playVideo, setPlayVideo] = useState(false)

  function handleVideo(){
    setPlayVideo(prev=>!prev)

    if(playVideo){
      vidRef.current.pause();
    } else {
      vidRef.current.play()
    }
  }

  return (
  <div className='app__video'>
    <video
      src={restaurant}
      ref={vidRef}
      itemType='video/mp4'
      loop
      controls={false}
      muted
      
    />
    <div className="app__video-overlay flex__center">
      <div 
        className="app__video-overlay_circle flex__center"
        onClick={handleVideo}
      >
        {
          playVideo?
            <BsPauseFill color='#fff' fontSize={30}/>
            :<BsFillPlayFill color='#fff' fontSize={30}/>
        }
      </div>
    </div>
  </div>
)};

export default Intro;
