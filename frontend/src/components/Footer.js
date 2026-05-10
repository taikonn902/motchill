import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiTwitter,
} from "react-icons/fi";

function Footer() {
  return (

    <footer className="
      mt-20
      border-t
      border-[#222]
      bg-[#111]
    ">

      <div className="
        max-w-[1400px]
        mx-auto
        px-5
        py-14
      ">

        {/* TOP */}
        <div className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-4
          gap-10
        ">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <div className="
              flex
              items-center
              gap-3
              mb-5
            ">

              {/* ICON */}
              <div className="
                w-[48px]
                h-[48px]
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

              {/* TEXT */}
              <div className="leading-none">

                <h1 className="
                  text-[28px]
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

            </div>

            {/* DESC */}
            <p className="
              text-gray-400
              leading-7
              text-[14px]
            ">
              Website xem phim online chất lượng cao,
              cập nhật phim mới nhanh chóng với trải nghiệm
              điện ảnh mượt mà trên mọi thiết bị.
            </p>

          </div>

          {/* MENU */}
          <div>

            <h3 className="
              text-[20px]
              font-bold
              mb-5
            ">
              Danh mục
            </h3>

            <div className="
              flex
              flex-col
              gap-4
              text-gray-400
              text-[15px]
            ">

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                Phim bộ
              </a>

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                Phim lẻ
              </a>

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                Anime
              </a>

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                TV Shows
              </a>

            </div>

          </div>

          {/* COUNTRY */}
          <div>

            <h3 className="
              text-[20px]
              font-bold
              mb-5
            ">
              Quốc gia
            </h3>

            <div className="
              flex
              flex-col
              gap-4
              text-gray-400
              text-[15px]
            ">

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                Việt Nam
              </a>

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                Hàn Quốc
              </a>

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                Trung Quốc
              </a>

              <a
                href="/"
                className="hover:text-[#f5c16c] transition"
              >
                Nhật Bản
              </a>

            </div>

          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="
              text-[20px]
              font-bold
              mb-5
            ">
              Theo dõi
            </h3>

            <div className="
              flex
              items-center
              gap-4
            ">

              <a
                href="/"
                className="
                  w-[45px]
                  h-[45px]
                  rounded-full
                  bg-[#1d1d1d]
                  border
                  border-[#2a2a2a]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#f5c16c]
                  hover:text-black
                  transition
                "
              >
                <FiFacebook size={20} />
              </a>

              <a
                href="/"
                className="
                  w-[45px]
                  h-[45px]
                  rounded-full
                  bg-[#1d1d1d]
                  border
                  border-[#2a2a2a]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#f5c16c]
                  hover:text-black
                  transition
                "
              >
                <FiInstagram size={20} />
              </a>

              <a
                href="/"
                className="
                  w-[45px]
                  h-[45px]
                  rounded-full
                  bg-[#1d1d1d]
                  border
                  border-[#2a2a2a]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#f5c16c]
                  hover:text-black
                  transition
                "
              >
                <FiYoutube size={20} />
              </a>

              <a
                href="/"
                className="
                  w-[45px]
                  h-[45px]
                  rounded-full
                  bg-[#1d1d1d]
                  border
                  border-[#2a2a2a]
                  flex
                  items-center
                  justify-center
                  hover:bg-[#f5c16c]
                  hover:text-black
                  transition
                "
              >
                <FiTwitter size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          mt-12
          pt-6
          border-t
          border-[#222]
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
          text-gray-500
          text-[14px]
        ">

          <p>
            © 2026 FilmsChill
          </p>

          <div className="
            flex
            items-center
            gap-6
          ">

            <a
              href="/"
              className="hover:text-[#f5c16c] transition"
            >
              Điều khoản
            </a>

            <a
              href="/"
              className="hover:text-[#f5c16c] transition"
            >
              Chính sách
            </a>

            <a
              href="/"
              className="hover:text-[#f5c16c] transition"
            >
              Liên hệ
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;