// src/pages/Home.jsx

import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import SidebarMovie from "../components/SidebarMovie";
import FeaturedMovies from "../components/FeaturedMovies";
import Footer from "../components/Footer";

import { fetchMovies } from "../services/api";

function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const loadMovies = async () => {

      const data = await fetchMovies();

      setMovies(data);

    };

    loadMovies();

  }, []);

  return (
    <div className="
      bg-[#1a1a1a]
      min-h-screen
      text-white
    ">

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN */}
      <div className="
        max-w-[1400px]
        mx-auto
        pt-[100px]
        px-5
        grid
        grid-cols-1 lg:grid-cols-12
        gap-8
      ">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-9">

          {/* HERO SLIDER */}
          <HeroSlider movies={movies} />

          {/* FEATURED MOVIES */}
          <FeaturedMovies movies={movies} />

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="lg:col-span-3">

          {/* TITLE */}
          <h2 className="
            text-4xl
            font-bold
            mb-8
          ">
            Phim đề xuất
          </h2>

          {/* SIDEBAR MOVIES */}
          <div className="flex flex-col gap-5">

            {movies.slice(0, 6).map(movie => (

              <SidebarMovie
                key={movie.id}
                movie={movie}
              />

            ))}

          </div>

        </div>

      </div>
      <Footer />
    </div>


  );
}

export default Home;