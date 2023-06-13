import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";


const InstaFeeds = (props) => {
    let settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        prevArrow: <BsChevronLeft />, 
        nextArrow: <BsChevronRight />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
              slidesToShow: 5,
              slidesToScroll: 5, 
              }
            },
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 2, 
                slidesToScroll: 2
              }
            }
          ]
    };

    const [feeds, setFeedsData] = useState([])
    const [modalFeeds , setModalFeeds] = useState([])

    useEffect(() => {
        const abortController = new AbortController();
        async function fetchInstagramPost () {
          try{
            axios
                .get(`https://graph.instagram.com/me/media?fields=id,thumbnail_url,username,follows_count,media_count,profile_pic_url,name,media_type,media_url,caption&limit=${props.limit}&access_token=${props.token}`)
                .then((resp) => {
                    setFeedsData(resp?.data?.data)
                    setModalFeeds(resp?.data?.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        fetchInstagramPost();
  
        return () => {
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="feed_container">
            <Slider className='slider-insta' {...settings}>
                {feeds.map((feed) => (
                    <div className='slide-items'>
                        <Feed key={feed.id} feed={feed}  modalFeeds = {modalFeeds}  setModalFeeds = {setModalFeeds}  />
                        </div>
                ))}
            </Slider>
        </div>
    );
}
export default InstaFeeds;