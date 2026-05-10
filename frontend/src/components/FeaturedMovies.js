import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  Navigation,
} from "swiper/modules";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import MovieCard from "./MovieCard";

import "swiper/css";
import "swiper/css/navigation";

function FeaturedMovies({ movies }) {
  return (
    <div className="mt-12">

      {/* HEADER */}
      <div className="
        flex
        items-center
        justify-between
        mb-8
      ">

        <h2 className="
          text-4xl
          font-bold
          border-l-4
          border-[#d89b6d]
          pl-4
        ">
          Phim nổi bật
        </h2>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">

          <button className="
            featured-prev
            w-[40px]
            h-[40px]
            bg-[#2a2a2a]
            hover:bg-[#d89b6d]
            transition
            rounded-full
            flex
            items-center
            justify-center
          ">
            <FiChevronLeft size={22} />
          </button>

          <button className="
            featured-next
            w-[40px]
            h-[40px]
            bg-[#2a2a2a]
            hover:bg-[#d89b6d]
            transition
            rounded-full
            flex
            items-center
            justify-center
          ">
            <FiChevronRight size={22} />
          </button>

        </div>

      </div>

      {/* SLIDER */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: ".featured-prev",
          nextEl: ".featured-next",
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },

          640: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 5,
          },
        }}
      >
        {movies.map(movie => (

          <SwiperSlide key={movie.id}>

            <MovieCard movie={movie} />

          </SwiperSlide>

        ))}

      </Swiper>

    </div>
  );
}

export default FeaturedMovies;