import { Swiper, SwiperSlide } from "swiper/react";
import "./testimeniol.css";
import { TestimeniolContent } from "../Assent/Data";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "./testimeniol.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
const Testimeniol = () => {
  return (
    <div className="testimeniol">
      <h1>Testimeniol</h1>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        modules={[Navigation, Pagination, EffectCoverflow]}
        coverflowEffect={{
          rotate:10,
          modifier:3,
          depth:0,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop
        effect="coverflow"
      >
        {TestimeniolContent.map((el, i) => {
          return (
            <SwiperSlide style={{ width: "fit-content" }} key={i}>
              <div className="testimeniol-box">
                <p>{el.des}</p>
                <img src={el.img} alt="" />
                <h3>{el.name}</h3>
                <h5>{el.location}</h5>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimeniol;
