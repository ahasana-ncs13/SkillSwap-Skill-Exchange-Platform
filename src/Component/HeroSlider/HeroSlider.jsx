// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import React from 'react';
import { Navigation} from 'swiper/modules';



const HeroSlider = ({data}) => {
    // console.log(data)
   
    return (
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
       navigation={true} modules={[Navigation]}
        className="heroSwiper mx-auto h-150 object-cover my-5 w-11/12" 
    >

     { data.map(slides => <SwiperSlide  >
        <div className="mt-10">
            <div className="flex justify-center items-center">
            <img src={slides.image} alt=""  /> 
            </div>
        </div>
        
        </SwiperSlide>)
        }

    </Swiper>
        
    );
};

export default HeroSlider;