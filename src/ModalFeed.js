import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import Link from "react-router-dom"

const ModalFeed = (props) => {
    const { id, caption, media_type, media_url , username } = props.mypost;
  
  return (
    <div>
      <div className='instam-header'>
         <h2 className='iuser-name' onClick={() => window.open("https://www.instagram.com/belgium_webnet/", "_blank")}><span className='iuser-icon'> <BsInstagram /> </span> {username}</h2>
         <h4>Follow</h4>
         </div>
         {media_type == "VIDEO" ? (
        <video
          width="100%"
          height="auto"
          src={media_url}
          type="video/mp4"
          autoPlay={true}
          muted
          controls
          playsinline
        ></video>
      ) : (
        <img width="100%" height="auto" id={id} src={media_url} alt={caption} />
      )} 
        <p><b>{username}</b>{caption}</p> 
    </div>
  )
}

export default ModalFeed