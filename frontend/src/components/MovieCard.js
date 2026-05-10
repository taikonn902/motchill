import {
  FiPlay,
  FiStar,
} from "react-icons/fi";

function MovieCard({ movie }) {
  return (
    <div className="group cursor-pointer">

      {/* IMAGE */}
      <div className="
        relative
        overflow-hidden
        rounded-md
      ">

        {/* POSTER */}
        <img
          src={movie.image?.medium}
          alt=""
          className="
            w-full
            h-[240px] 
            md:h-[340px]
            object-cover
            transition
            duration-500
            group-hover:scale-110
            group-hover:blur-[2px]
            group-hover:brightness-50
          "
        />

        {/* PLAY ICON */}
        <div className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
        ">

          <div className="
            w-[55px] 
            h-[55px]
            md:w-[80px] 
            md:h-[80px]
            rounded-full
            border-4
            border-white
            flex
            items-center
            justify-center
          ">
            <FiPlay
              size={38}
              className="text-white ml-1"
            />
          </div>

        </div>

        {/* TOP TAG */}
        <div className="
          absolute
          top-0
          left-0
          bg-[#d89b6d]
          text-white
          text-sm
          px-3
          py-1
          font-semibold
        ">
          NỔI BẬT
        </div>

        {/* EP */}
        <div className="
          absolute
          bottom-2
          left-2
          bg-[#3b82f6]
          text-white
          text-sm
          px-3
          py-1
          font-semibold
        ">
          TẬP 5
        </div>

        {/* RATING */}
        <div className="
          absolute
          bottom-2
          right-2
          bg-black/70
          text-white
          px-3
          py-1
          flex
          items-center
          gap-1
          text-sm
        ">

          <FiStar className="fill-white" />

          <span>
            9.8
          </span>

        </div>

      </div>

      {/* INFO */}
      <div className="mt-4">

        <h3 className="
          text-[20px]
          font-semibold
          line-clamp-1
        ">
          {movie.name}
        </h3>

        <p className="
          text-gray-400
          text-lg
          line-clamp-1
        ">
          {movie.genres?.[0]} 2026
        </p>

      </div>

    </div>
  );
}

export default MovieCard;