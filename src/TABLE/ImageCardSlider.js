import React ,{useRef}from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { faArrowLeft,faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const ImageCardSlider = () => {
  const sliderRef = useRef(null);
    const images = [
        {
          id: 1,
          image: "Images/BIRDS.jpg",
          Description: "This is the first image in the list"
        },
        {
          id: 2,
          image: "Images/BOOK.jpg",
          Description: "this is one of the best images I love here "
        },
        {
          id: 3,
          image: "Images/CHRISTMAS TREE.jpg",
          Description: "Why would someone code from scratch without using ChatGPT"
        },
        {
          id: 4,
          image: "Images/BLACK DOG.webp",
          Description: "Many people are afraid of learning programming"
        },
        {
          id: 5,
          image: "Images/HAWK.jpg",
          Description: "Animals are one of the best creatures in the world"
        },
        {
          id: 6,
          image: "Images/INSECTS.jpg",
          Description: "They are very lovely to the eyes"
        },
      ];
    
      const goToNext = () => {
        sliderRef.current.slickNext();
      };
    
      const goToPrev = () => {
        sliderRef.current.slickPrev();
      };
    //this is the setting for how we want it to be 
    const settings={
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '22%', // Adjust the padding to control the portion of visible slides
    
    }
  return (
   
<div>

    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div className="" key={index}>
          <img
            src={image.image}
            alt={`Slide ${index + 1}`}
            className='w-11/12   rounded-xl mt-8 mx-2'
          />
          {image.Description && <p className='ml-5 font-bold'>{image.Description}</p>}
        </div>
      ))}
    </Slider>
    <div className="text-center mt-10 font-bold text-2xl">
      <button className="cursor-pointer mx-4" onClick={goToPrev}>
      <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <button className="cursor-pointer mx-4" onClick={goToNext}>
      <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>

</div>
  )
}
