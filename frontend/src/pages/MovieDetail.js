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
        pt-[90px]
        md:pt-[100px]
        px-4
        md:px-5
        grid
        grid-cols-1
        lg:grid-cols-12
        gap-8
      ">

        {/* LEFT */}
        <div className="lg:col-span-9">

          {/* INFO */}
          <div className="
            bg-[#1d1d1d]
            border
            border-[#2a2a2a]
            p-4
            md:p-6
            rounded-xl
          ">

            <div className="
              flex
              flex-col
              md:flex-row
              gap-6
            ">

              {/* POSTER */}
              <img
                src={movie.image?.original}
                alt=""
                className="
                  w-full
                  md:w-[240px]
                  lg:w-[260px]
                  h-[420px]
                  md:h-[340px]
                  lg:h-[380px]
                  object-cover
                  rounded-lg
                "
              />

              {/* CONTENT */}
              <div className="flex-1">

                {/* TITLE */}
                <h1 className="
                  text-[28px]
                  sm:text-[34px]
                  md:text-[40px]
                  lg:text-[52px]
                  font-bold
                  leading-tight
                  mb-3
                ">
                  {movie.name}
                </h1>

                {/* GENRES */}
                <p className="
                  text-[15px]
                  md:text-[18px]
                  lg:text-[22px]
                  text-gray-300
                  mb-5
                ">
                  {movie.genres?.join(" • ")}
                </p>

                {/* META */}
                <div className="
                  flex
                  flex-wrap
                  gap-x-6
                  gap-y-3
                  text-[14px]
                  md:text-[16px]
                  text-gray-400
                  mb-6
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
                  w-full
                  sm:w-auto
                  bg-[#d89b6d]
                  hover:bg-[#c78658]
                  px-8
                  py-4
                  rounded-lg
                  font-semibold
                  text-[15px]
                  md:text-lg
                  transition
                ">
                  Xem Phim
                </button>

                {/* DESC */}
                <div
                  className="
                    mt-8
                    text-gray-300
                    leading-7
                    md:leading-8
                    text-[14px]
                    md:text-[16px]
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
            p-4
            md:p-6
            rounded-xl
          ">

            <h2 className="
              text-[24px]
              md:text-[32px]
              font-bold
              mb-6
            ">
              Danh sách tập
            </h2>

            <div className="
              grid
              grid-cols-3
              sm:grid-cols-4
              md:grid-cols-5
              lg:grid-cols-6
              gap-3
            ">

              {Array.from({ length: 35 }).map((_, index) => (

                <button
                  key={index}
                  className="
                    bg-[#2a2a2a]
                    hover:bg-[#d89b6d]
                    transition
                    py-3
                    rounded-md
                    text-[14px]
                    md:text-[15px]
                    font-medium
                  "
                >
                  Tập {index + 1}
                </button>

              ))}

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3">

          <h2 className="
            text-[24px]
            md:text-[32px]
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
                  h-[120px]
                  md:h-[140px]
                  overflow-hidden
                  rounded-xl
                  cursor-pointer
                  group
                "
              >

                <img
                  src={item.image?.original}
                  alt=""
                  className="
                    w-full
                    h-full
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute
                  inset-0
                  bg-black/50
                " />

                <div className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                ">

                  <h3 className="
                    font-semibold
                    text-[16px]
                    md:text-[18px]
                    line-clamp-1
                  ">
                    {item.name}
                  </h3>

                  <p className="
                    text-gray-300
                    text-[13px]
                    md:text-[15px]
                  ">
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