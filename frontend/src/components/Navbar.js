import {
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  useState,
} from "react";

import {
  Link,
} from "react-router-dom";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <header className="
        fixed
        top-0
        left-0
        w-full
        h-[70px]
        bg-[#111]
        border-b
        border-[#222]
        z-50
      ">

        <div className="
          max-w-[1400px]
          h-full
          mx-auto
          px-5
          flex
          items-center
          justify-between
          gap-10
        ">

          {/* LEFT */}
          <div className="
            flex
            items-center
            justify-between
            w-full
          ">

            {/* LOGO */}
            <Link
              to="/"
              className="
                cursor-pointer
                flex
                items-center
                gap-3
                shrink-0
              "
            >

              {/* ICON */}
              <div className="
                w-[42px]
                h-[42px]
                md:w-[50px]
                md:h-[50px]
                rounded-xl
                bg-gradient-to-br
                from-[#f5c16c]
                to-[#d89b6d]
                flex
                items-center
                justify-center
                shadow-lg
              ">

                <span className="
                  text-black
                  text-[22px]
                  md:text-[26px]
                  font-black
                ">
                  F
                </span>

              </div>

              {/* TEXT */}
              <div className="leading-none">

                <h1 className="
                  text-[22px]
                  sm:text-[26px]
                  md:text-[30px]
                  lg:text-[34px]
                  font-extrabold
                  tracking-wide
                ">

                  <span className="text-white">
                    Films
                  </span>

                  <span className="text-[#f5c16c]">
                    Chill
                  </span>

                </h1>

                <span className="
                  text-[8px]
                  md:text-[9px]
                  uppercase
                  tracking-[5px]
                  text-gray-400
                  font-medium
                ">
                  Movie Streaming
                </span>

              </div>

            </Link>

            {/* DESKTOP MENU */}
            <nav className="
              hidden
              xl:flex
              items-center
              gap-8
              text-[15px]
              xl:text-[16px]
              text-gray-200
              font-medium
            ">

              {/* HOME */}
              <Link
                to="/"
                className="
                  hover:text-[#f5c16c]
                  transition
                "
              >
                Trang chủ
              </Link>

              {/* PHIM BO */}
              <Link
                to="/"
                className="
                  hover:text-[#f5c16c]
                  transition
                "
              >
                Phim bộ
              </Link>

              {/* PHIM LE */}
              <Link
                to="/"
                className="
                  hover:text-[#f5c16c]
                  transition
                "
              >
                Phim lẻ
              </Link>

              {/* THE LOAI */}
              <div className="
                relative
                group
              ">

                <div className="
                  flex
                  items-center
                  gap-1
                  cursor-pointer
                  hover:text-[#f5c16c]
                  transition
                ">

                  <span>
                    Thể loại
                  </span>

                  <FiChevronDown
                    className="
                      transition
                      duration-300
                      group-hover:rotate-180
                    "
                  />

                </div>

                {/* SUBMENU */}
                <div className="
                  absolute
                  top-[40px]
                  left-0
                  w-[340px]
                  bg-[#1a1a1a]
                  border
                  border-[#2a2a2a]
                  rounded-xl
                  p-3
                  opacity-0
                  invisible
                  translate-y-3
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  shadow-2xl
                ">

                  <div className="
                    grid
                    grid-cols-2
                    gap-2
                    w-full
                  ">

                    {[
                      "Hành động",
                      "Anime",
                      "Tình cảm",
                      "Kinh dị",
                      "Viễn tưởng",
                      "Hài hước",
                    ].map((item) => (

                      <Link
                        key={item}
                        to="/"
                        className="
                          w-full
                          block
                          px-4
                          py-3
                          rounded-lg
                          hover:bg-[#2a2a2a]
                          hover:text-[#f5c16c]
                          transition
                        "
                      >
                        {item}
                      </Link>

                    ))}

                  </div>

                </div>

              </div>

              {/* QUOC GIA */}
              <div className="
                relative
                group
              ">

                <div className="
                  flex
                  items-center
                  gap-1
                  cursor-pointer
                  hover:text-[#f5c16c]
                  transition
                ">

                  <span>
                    Quốc gia
                  </span>

                  <FiChevronDown
                    className="
                      transition
                      duration-300
                      group-hover:rotate-180
                    "
                  />

                </div>

                {/* SUBMENU */}
                <div className="
                  absolute
                  top-[40px]
                  left-0
                  w-[220px]
                  bg-[#1a1a1a]
                  border
                  border-[#2a2a2a]
                  rounded-xl
                  p-3
                  opacity-0
                  invisible
                  translate-y-3
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  shadow-2xl
                ">

                  <div className="
                    flex
                    flex-col
                    gap-1
                  ">

                    {[
                      "Việt Nam",
                      "Hàn Quốc",
                      "Trung Quốc",
                      "Nhật Bản",
                    ].map((item) => (

                      <Link
                        key={item}
                        to="/"
                        className="
                          w-full
                          block
                          px-4
                          py-3
                          rounded-lg
                          hover:bg-[#2a2a2a]
                          hover:text-[#f5c16c]
                          transition
                        "
                      >
                        {item}
                      </Link>

                    ))}

                  </div>

                </div>

              </div>

              {/* KHAC */}
              <div className="
                relative
                group
              ">

                <div className="
                  flex
                  items-center
                  gap-1
                  cursor-pointer
                  hover:text-[#f5c16c]
                  transition
                ">

                  <span>
                    Khác
                  </span>

                  <FiChevronDown
                    className="
                      transition
                      duration-300
                      group-hover:rotate-180
                    "
                  />

                </div>

                {/* SUBMENU */}
                <div className="
                  absolute
                  top-[40px]
                  left-0
                  w-[240px]
                  bg-[#1a1a1a]
                  border
                  border-[#2a2a2a]
                  rounded-xl
                  p-3
                  opacity-0
                  invisible
                  translate-y-3
                  group-hover:opacity-100
                  group-hover:visible
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                  shadow-2xl
                ">

                  <div className="
                    flex
                    flex-col
                    gap-1
                  ">

                    {[
                      "Top IMDb",
                      "Phim chiếu rạp",
                      "Sắp ra mắt",
                    ].map((item) => (

                      <Link
                        key={item}
                        to="/"
                        className="
                          w-full
                          block
                          px-4
                          py-3
                          rounded-lg
                          hover:bg-[#2a2a2a]
                          hover:text-[#f5c16c]
                          transition
                        "
                      >
                        {item}
                      </Link>

                    ))}

                  </div>

                </div>

              </div>

            </nav>

            {/* MOBILE MENU BTN */}
            <button
              onClick={() => setShowMenu(true)}
              className="
                xl:hidden
                text-white
              "
            >
              <FiMenu size={28} />
            </button>

          </div>

          {/* SEARCH */}
          <div className="
            relative
            hidden
            lg:block
            w-[300px]
          ">

            <input
              type="text"
              placeholder="Tìm kiếm..."
              className="
                w-full
                h-[45px]
                bg-[#1c1c1c]
                border
                border-[#2a2a2a]
                rounded-md
                px-4
                pr-12
                text-white
                outline-none
                focus:border-[#f5c16c]
                transition
              "
            />

            <FiSearch
              size={20}
              className="
                absolute
                top-1/2
                right-4
                -translate-y-1/2
                text-gray-400
              "
            />

          </div>

        </div>
      </header>

      {/* MOBILE MENU */}
      <div className={`
        fixed
        top-0
        right-0
        w-full
        h-screen
        bg-[#111]
        z-[999]
        transition-all
        duration-300
        p-6

        ${showMenu
          ? "translate-x-0"
          : "translate-x-full"
        }
      `}>

        {/* TOP */}
        <div className="
          flex
          items-center
          justify-between
          mb-14
        ">

          {/* LOGO */}
          <Link
            to="/"
            onClick={() => setShowMenu(false)}
            className="
              flex
              items-center
              gap-3
            "
          >

            <div className="
              w-[45px]
              h-[45px]
              rounded-xl
              bg-gradient-to-br
              from-[#f5c16c]
              to-[#d89b6d]
              flex
              items-center
              justify-center
            ">

              <span className="
                text-black
                text-[24px]
                font-black
              ">
                F
              </span>

            </div>

            <div className="leading-none">

              <h1 className="
                text-[30px]
                font-extrabold
              ">

                <span className="text-white">
                  Films
                </span>

                <span className="text-[#f5c16c]">
                  Chill
                </span>

              </h1>

              <span className="
                text-[8px]
                uppercase
                tracking-[4px]
                text-gray-400
              ">
                Movie Streaming
              </span>

            </div>

          </Link>

          {/* CLOSE */}
          <button
            onClick={() => setShowMenu(false)}
            className="text-white"
          >
            <FiX size={32} />
          </button>

        </div>

      </div>

      {/* OVERLAY */}
      {showMenu && (

        <div
          onClick={() => setShowMenu(false)}
          className="
            fixed
            inset-0
            bg-black/70
            z-[998]
          "
        />

      )}
    </>
  );
}

export default Navbar;