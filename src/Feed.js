import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import ModalFeed from "./ModalFeed";
import Slider from 'react-slick'
import { RxCross1} from "react-icons/rx";
import { BsXLg } from "react-icons/bs";
import { BiVideo} from "react-icons/bi";
import { IconName, IoMdVideocam } from "react-icons/io";

const Feed = (props) => {
  const { id, caption, media_type, media_url} = props.feed;
  const [show, setShow] = useState(false);
 
 
  const handleClose = () => setShow(false);



  const handleShow = (id) => {
    const clickedItemIndex = props.modalFeeds.findIndex((item) => item.id === id);
     if (clickedItemIndex !== -1) {
     const clickedItem = props.modalFeeds.splice(clickedItemIndex, 1)[0];
     props.modalFeeds.unshift(clickedItem);
     props.setModalFeeds([...props.modalFeeds]);
     setShow(true)
  };
  }


  return (
    <>
      <div className="slide-post">
        {media_type === "VIDEO" ? <IoMdVideocam/> : "" }
        {media_type == "VIDEO" ? (
          <video
            width="100%"
            height="auto"
            src={media_url}
            type="video/mp4"
            playsinline
          ></video>
        ) : (
          <img
            width="100%"
            height="auto"
            id={id}
            src={media_url}
            alt={caption}
          />
        )}
        </div>
       <div onClick={() => handleShow(id)} className="caption">
        <p>{caption}</p>
      </div> 
      <Modal  show={show} onHide={handleClose} className="insta-modal">
        <span className="insta-modal-close" onClick={handleClose}><BsXLg /></span>
        <Modal.Body> 
          {props.modalFeeds?.map(post => (
           <ModalFeed key={post.id} mypost = {post}  />
          ))}
          </Modal.Body>
      </Modal>
    </>
  );
};

export default Feed;
