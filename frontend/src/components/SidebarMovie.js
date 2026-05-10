function SidebarMovie({ movie }) {
  return (
    <div className="
      relative
      h-[100px] 
      md:h-[120px]
      overflow-hidden
      rounded-md
      cursor-pointer
    ">

      <img
        src={movie.image?.original}
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
        <h3 className="font-semibold">
          {movie.name}
        </h3>

        <p className="text-sm text-gray-300">
          2025
        </p>
      </div>

    </div>
  );
}

export default SidebarMovie;