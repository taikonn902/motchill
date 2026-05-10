import {
  useEffect,
  useState,
} from "react";

import {
  useParams,
} from "react-router-dom";

import Navbar from "../components/Navbar";

import {
  fetchMovieDetail,
  fetchMovies,
} from "../services/api";

function MovieDetail() {

  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  const [sidebarMovies, setSidebarMovies] = useState([]);

  useEffect(() => {

    const loadData = async () => {

      const detail = await fetchMovieDetail(id);

      const movies = await fetchMovies();

      setMovie(detail);

      setSidebarMovies(movies.slice(0, 5));
    };

    loadData();

  }, [id]);

  if (!movie) return null;

  return (
    <div className="
      bg-[#161616]
      min-h-screen
      text-white
    ">

      <Navbar />

      <div className="
        max-w-[1400px]
        mx-auto
        pt-[100px]
        px-5
        grid
        grid-cols-12
        gap-8
      ">

        {/* LEFT */}
        <div className="col-span-9">

          {/* INFO */}
          <div className="
            bg-[#1d1d1d]
            border
            border-[#2a2a2a]
            p-6
          ">

            <div className="flex gap-6">

              {/* POSTER */}
              <img
                src={movie.image?.original}
                alt=""
                className="
                  w-[220px]
                  h-[320px]
                  object-cover
                  rounded-md
                "
              />

              {/* CONTENT */}
              <div className="flex-1">

                <h1 className="
                  text-5xl
                  font-bold
                  mb-3
                ">
                  {movie.name}
                </h1>

                <p className="
                  text-2xl
                  text-gray-300
                  mb-5
                ">
                  {movie.genres?.join(" • ")}
                </p>

                {/* META */}
                <div className="
                  flex
                  gap-10
                  text-gray-400
                  mb-5
                ">

                  <span>
                    ⭐ 9.1
                  </span>

                  <span>
                    🇯🇵 Japan
                  </span>

                  <span>
                    ⏱ 45 phút/tập
                  </span>

                </div>

                {/* BUTTON */}
                <button className="
                  bg-[#d89b6d]
                  hover:bg-[#c78658]
                  px-8
                  py-4
                  rounded-md
                  font-semibold
                  text-lg
                  transition
                ">
                  Xem Phim
                </button>

                {/* DESC */}
                <div
                  className="
                    mt-8
                    text-gray-300
                    leading-8
                  "
                  dangerouslySetInnerHTML={{
                    __html: movie.summary
                  }}
                />

              </div>
            </div>

          </div>

          {/* EPISODES */}
          <div className="
            mt-8
            bg-[#1d1d1d]
            border
            border-[#2a2a2a]
            p-6
          ">

            <h2 className="
              text-3xl
              font-bold
              mb-6
            ">
              Danh sách tập
            </h2>

            <div className="
              flex
              flex-wrap
              gap-3
            ">

              {Array.from({ length: 35 }).map((_, index) => (

                <button
                  key={index}
                  className="
                    bg-[#2a2a2a]
                    hover:bg-[#d89b6d]
                    transition
                    px-5
                    py-3
                    rounded-md
                  "
                >
                  Tập {index + 1}
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="col-span-3">

          <h2 className="
            text-3xl
            font-bold
            mb-6
          ">
            Phim hot
          </h2>

          <div className="flex flex-col gap-5">

            {sidebarMovies.map(item => (

              <div
                key={item.id}
                className="
                  relative
                  h-[140px]
                  overflow-hidden
                  rounded-md
                  cursor-pointer
                "
              >

                <img
                  src={item.image?.original}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-cover
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-black/40
                " />

                <div className="
                  absolute
                  bottom-4
                  left-4
                ">

                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-gray-300">
                    2026
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default MovieDetail;