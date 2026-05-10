import {
  FiSearch,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

import {
  useState,
} from "react";

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
        ">

          {/* LEFT */}
          <div className="
  flex
  items-center
  justify-between
  w-full
">

  {/* LOGO */}
  <div className="cursor-pointer leading-none">

    <h1 className="
      text-[30px]
      md:text-[38px]
      font-black
    ">

      <span className="text-[#f5c16c]">
        MOT
      </span>

      <span className="text-white">
        CHILL
      </span>

    </h1>

    <span className="
      text-[8px]
      md:text-[10px]
      tracking-[4px]
      md:tracking-[6px]
      text-[#f5c16c]
    ">
      PHIM ONLINE
    </span>

  </div>

  {/* DESKTOP MENU */}
  <nav className="
    hidden
    xl:flex
    items-center
    gap-8
    text-gray-200
  ">

    <a href="/">
      Motchill
    </a>

    <a href="/">
      Phim bộ
    </a>

    <a href="/">
      Phim lẻ
    </a>

    <div className="
      flex
      items-center
      gap-1
    ">
      <span>Thể loại</span>
      <FiChevronDown />
    </div>

    <div className="
      flex
      items-center
      gap-1
    ">
      <span>Quốc gia</span>
      <FiChevronDown />
    </div>

    <div className="
      flex
      items-center
      gap-1
    ">
      <span>Khác</span>
      <FiChevronDown />
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

      {/* MOBILE SIDEBAR */}
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
    <div className="leading-none">

      <h1 className="
        text-[34px]
        font-black
      ">

        <span className="text-[#f5c16c]">
          MOT
        </span>

        <span className="text-white">
          CHILL
        </span>

      </h1>

      <span className="
        text-[9px]
        tracking-[5px]
        text-[#f5c16c]
      ">
        PHIM ONLINE
      </span>

    </div>

    {/* CLOSE */}
    <button
      onClick={() => setShowMenu(false)}
      className="
        text-white
      "
    >
      <FiX size={32} />
    </button>

  </div>

  {/* SEARCH */}
  <div className="relative mb-10">

    <input
      type="text"
      placeholder="Tìm kiếm..."
      className="
        w-full
        h-[50px]
        bg-[#1d1d1d]
        border
        border-[#2a2a2a]
        rounded-md
        px-4
        pr-12
        text-white
        outline-none
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

  {/* MENU */}
  <nav className="
    flex
    flex-col
    gap-8
    text-[24px]
    font-semibold
  ">

    <a
      href="/"
      onClick={() => setShowMenu(false)}
    >
      Motchill
    </a>

    <a
      href="/"
      onClick={() => setShowMenu(false)}
    >
      Phim bộ
    </a>

    <a
      href="/"
      onClick={() => setShowMenu(false)}
    >
      Phim lẻ
    </a>

    <a
      href="/"
      onClick={() => setShowMenu(false)}
    >
      Thể loại
    </a>

    <a
      href="/"
      onClick={() => setShowMenu(false)}
    >
      Quốc gia
    </a>

    <a
      href="/"
      onClick={() => setShowMenu(false)}
    >
      Khác
    </a>

  </nav>

</div>

      
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