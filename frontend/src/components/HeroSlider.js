import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function HeroSlider({ movies }) {
  return (
    <div className="hero-slider">

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },
        }}
      >

        {movies.slice(0, 6).map(movie => (

          <SwiperSlide key={movie.id}>

            <div className="
              relative
              h-[260px]
              overflow-hidden
              rounded-md
              cursor-pointer
              group
            ">

              {/* IMAGE */}
              <img
                src={movie.image?.original}
                alt=""
                className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition
                  duration-500
                "
              />

              {/* OVERLAY */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
              " />

              {/* INFO */}
              <div className="
                absolute
                bottom-5
                left-5
              ">

                <h2 className="
                  text-4xl
                  font-bold
                  mb-2
                ">
                  {movie.name}
                </h2>

                <p className="
                  text-gray-300
                  text-xl
                ">
                  2026
                </p>

              </div>

              {/* TAG */}
              <div className="
                absolute
                bottom-5
                right-0
                bg-[#d89b6d]
                px-4
                py-2
                text-white
                text-sm
                font-semibold
              ">
                PHIM BỘ
              </div>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}

export default HeroSlider;