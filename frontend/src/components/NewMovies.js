import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import MovieCard from "./MovieCard";
import { fetchMovies } from "../services/api";

import "swiper/css";
import "swiper/css/navigation";

function NewMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchMovies("new"); // 🆕 NOW PLAYING
      setMovies(data || []);
    };

    load();
  }, []);

  return (
    <div className="mt-12">

      {/* HEADER */}
      <div className="
        flex items-center justify-between mb-6
      ">

        <h2 className="
          text-4xl font-bold
          border-l-4 border-[#d89b6d]
          pl-4
        ">
          🆕 Phim mới
        </h2>

        {/* NAV */}
        <div className="flex gap-3">

          <button className="new-prev w-[40px] h-[40px] bg-[#2a2a2a] hover:bg-[#d89b6d] rounded-full flex items-center justify-center">
            <FiChevronLeft size={22} />
          </button>

          <button className="new-next w-[40px] h-[40px] bg-[#2a2a2a] hover:bg-[#d89b6d] rounded-full flex items-center justify-center">
            <FiChevronRight size={22} />
          </button>

        </div>

      </div>

      {/* SWIPER */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        navigation={{
          prevEl: ".new-prev",
          nextEl: ".new-next",
        }}
        breakpoints={{
          0: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >

        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}

      </Swiper>

    </div>
  );
}

export default NewMovies;