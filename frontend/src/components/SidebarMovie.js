import { FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getImage } from "../services/api";

function SidebarMovie({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="block">

      <div className="
        group relative h-[120px] sm:h-[135px]
        rounded-2xl overflow-hidden cursor-pointer
      ">

        {/* IMAGE */}
        <img
          src={getImage(movie.backdrop_path || movie.poster_path)}
          alt={movie.title}
          className="
            w-full h-full object-cover
            transition duration-500
            group-hover:scale-110
            group-hover:brightness-50
          "
        />

        {/* OVERLAY */}
        <div className="
          absolute inset-0
          bg-gradient-to-r from-black/90 via-black/50 to-transparent
        " />

        {/* CONTENT */}
        <div className="
          absolute left-5 top-1/2
          -translate-y-1/2 z-10
          max-w-[70%]
        ">

          <div className="
            inline-block bg-[#d89b6d]
            text-white text-[10px]
            font-bold px-2 py-1 rounded-md mb-3
          ">
            MOVIE
          </div>

          <h3 className="
            text-[16px] font-bold
            line-clamp-1
            group-hover:text-[#f5c16c]
          ">
            {movie.title}
          </h3>

          <div className="
            flex items-center gap-3 mt-2
            text-[12px] text-gray-300
          ">

            <span>
              {movie.release_date?.slice(0, 4) || "N/A"}
            </span>

            <div className="flex items-center gap-1 text-yellow-400">

              <FiStar className="fill-yellow-400" />

              <span>
                {movie.vote_average?.toFixed(1) || "0"}
              </span>

            </div>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default SidebarMovie;