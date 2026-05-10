import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


import {
  fetchMovieDetail,
  fetchMovieCredits,
  fetchMovieVideos,
  fetchMovies,
  getImage,
  getTrailer,
} from "../services/api";

function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [related, setRelated] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [openTrailer, setOpenTrailer] = useState(false);

  useEffect(() => {
    const load = async () => {
      const detail = await fetchMovieDetail(id);
      const credits = await fetchMovieCredits(id);
      const videos = await fetchMovieVideos(id);
      const movies = await fetchMovies();

      setMovie(detail);
      setCast(credits?.cast?.slice(0, 10) || []);
      setRelated(movies.slice(0, 6));
      setTrailer(getTrailer(videos));
    };

    load();
  }, [id]);

  if (!movie)
    return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="bg-[#0e0e0e] text-white min-h-screen">

      <Navbar />

      {/* ================= HERO ================= */}
      <div className="relative min-h-[70vh] md:min-h-[80vh] flex items-center">

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img
            src={getImage(movie.backdrop_path)}
            className="w-full h-full object-cover"
            alt="backdrop"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {movie.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4 text-sm md:text-lg">

              <span className="text-yellow-400 font-bold">
                ⭐ {movie.vote_average?.toFixed(1)}
              </span>

              <span className="text-gray-400">|</span>

              <span className="text-gray-300">
                {movie.release_date?.slice(0, 4)}
              </span>

              <span className="border border-gray-500 px-2 py-0.5 text-xs rounded text-gray-400">
                4K ULTRA HD
              </span>

            </div>

            <p className="text-gray-300 mt-4 md:mt-6 max-w-xl mx-auto lg:mx-0 text-sm md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
              {movie.overview}
            </p>

            {/* BUTTONS */}
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">

              <button className="bg-red-600 hover:bg-red-700 px-6 md:px-8 py-3 rounded-full font-bold transition">
                Xem phim ngay
              </button>

              <button
                onClick={() => setOpenTrailer(true)}
                className="bg-white/10 hover:bg-white/20 px-6 md:px-8 py-3 rounded-full font-bold border border-white/20"
              >
                Xem Trailer
              </button>

            </div>

          </div>

          {/* RIGHT TRAILER */}
          <div className="flex-1 w-full max-w-[650px] mt-6 lg:mt-0">

            {trailer ? (
              <div className="relative group">

                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition" />

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black">

                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=0&mute=1&rel=0`}
                    title="Trailer"
                    allowFullScreen
                  />

                </div>

              </div>
            ) : (
              <div className="aspect-video bg-gray-800/50 rounded-2xl flex items-center justify-center border border-dashed border-gray-600">
                <p className="text-gray-400">Trailer không khả dụng</p>
              </div>
            )}

          </div>

        </div>
      </div>

      {/* ================= CAST ================= */}
      <div className="max-w-[1200px] mx-auto px-4 mt-8 md:mt-10">

        <h2 className="text-xl md:text-2xl font-bold mb-4">
          Cast
        </h2>

        <div className="flex gap-4 overflow-x-auto pb-2">

          {cast.map((c) => (
            <div
              key={c.id}
              className="text-center w-[80px] md:w-[100px] flex-shrink-0"
            >

              <img
                src={getImage(c.profile_path)}
                className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full object-cover mx-auto"
                alt={c.name}
              />

              <p className="text-xs md:text-sm mt-2 line-clamp-1">
                {c.name}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* ================= RELATED ================= */}
      <div className="max-w-[1200px] mx-auto px-4 mt-8 md:mt-10">

        <h2 className="text-lg md:text-2xl font-bold mb-4">
          Phim liên quan
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:flex gap-3">

          {related.slice(0, 6).map((m) => (
            <div
              key={m.id}
              className="group relative transition-all duration-300 hover:scale-105 cursor-pointer"
            >

              <div className="relative overflow-hidden rounded-md">

                <img
                  src={getImage(m.poster_path)}
                  alt={m.title}
                  className="w-full h-[200px] md:h-[260px] object-cover transition group-hover:brightness-75"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              </div>

              <div className="mt-2">

                <p className="text-sm font-medium line-clamp-1">
                  {m.title}
                </p>

                <p className="text-xs text-gray-400">
                  {m.release_date?.slice(0, 4)}
                </p>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= TRAILER POPUP ================= */}
      {openTrailer && trailer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

          <div
            className="absolute inset-0 bg-black/80"
            onClick={() => setOpenTrailer(false)}
          />

          <div className="relative w-[92%] md:w-[70%] aspect-video bg-black rounded-lg overflow-hidden">

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title="Trailer"
              allowFullScreen
            />

            <button
              onClick={() => setOpenTrailer(false)}
              className="absolute top-3 right-3 bg-red-600 px-3 py-1 rounded"
            >
              ✕
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default MovieDetail;