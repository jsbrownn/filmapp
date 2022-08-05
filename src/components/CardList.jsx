import React,{useState,useEffect,useRef} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Card } from '../components'
const CardList = ({ cards, title }) => {

  const [current,setCurrent] = useState(1)
  const slider = useRef(null)

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
    lazyLoad: true,
    swipeToSlide:true,
    beforeChange: function (current) { 
      setCurrent(current)
      console.info(slider.current)
    }
    ,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    
  };
// useEffect(()=>{
//   console.log(current)
//   if(current >= cards.length){
//     console.log('redirect')
//   }
// },[current])
  return (
    <>
      <h1 className="text-xl">{title}</h1>
      <Slider {...settings} ref={slider}>
        {
        cards?
        cards.map((card) => (
          <Card key={card.id} card={card} />
        )):
        <p>no cards</p>
}
      </Slider>
    </>
  )
}

export default CardList
