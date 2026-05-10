import {
  FiStar,
} from "react-icons/fi";

import {
  Link,
} from "react-router-dom";

function SidebarMovie({ movie }) {
  return (

    <Link
      to={`/movie/${movie.id}`}
      className="block"
    >

      <div className="
        group
        relative
        h-[120px]
        sm:h-[135px]
        rounded-2xl
        overflow-hidden
        cursor-pointer
      ">

        {/* BACKGROUND IMAGE */}
        <img
          src={movie.image?.original}
          alt=""
          className="
            w-full
            h-full
            object-cover
            transition
            duration-500
            group-hover:scale-110
            group-hover:brightness-50
          "
        />

        {/* OVERLAY */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/90
          via-black/50
          to-transparent
        " />

        {/* CONTENT */}
        <div className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          z-10
          max-w-[70%]
        ">

          {/* QUALITY */}
          <div className="
            inline-block
            bg-[#d89b6d]
            text-white
            text-[10px]
            sm:text-[11px]
            font-bold
            px-2
            py-1
            rounded-md
            mb-3
          ">
            FULL HD
          </div>

          {/* TITLE */}
          <h3 className="
            text-[16px]
            sm:text-[18px]
            font-bold
            line-clamp-1
            group-hover:text-[#f5c16c]
            transition
          ">
            {movie.name}
          </h3>

          {/* INFO */}
          <div className="
            flex
            items-center
            gap-3
            mt-2
            text-[12px]
            sm:text-[13px]
            text-gray-300
          ">

            <span>
              2026
            </span>

            <span>
              {movie.genres?.[0]}
            </span>

            <div className="
              flex
              items-center
              gap-1
              text-yellow-400
            ">

              <FiStar className="fill-yellow-400" />

              <span>
                9.2
              </span>

            </div>

          </div>

        </div>

      </div>

    </Link>
  );
}

export default SidebarMovie;