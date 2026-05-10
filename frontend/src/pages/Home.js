import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import SidebarMovie from "../components/SidebarMovie";
import NewMovies from "../components/NewMovies";
import FeaturedMovies from "../components/FeaturedMovies";
import Footer from "../components/Footer";

import { fetchMovies } from "../services/api";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);

        const data = await fetchMovies();

        // ❗ KHÔNG set error ở đây nữa
        setMovies(Array.isArray(data) ? data : []);

      } catch (err) {
        console.log("❌ ERROR:", err);
        setMovies([]); // fallback
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  // loading UI
  if (loading) {
    return (
      <div className="text-white p-10">
        Loading movies...
      </div>
    );
  }

  return (
    <div className="bg-[#1a1a1a] min-h-screen text-white">

      <Navbar />

      <div className="max-w-[1400px] mx-auto pt-[100px] px-5 grid grid-cols-1 lg:grid-cols-12 gap-8">

        {/* LEFT */}
        <div className="lg:col-span-9">

          <HeroSlider movies={movies.slice(0, 5)} />

          <NewMovies />

          <FeaturedMovies movies={movies.slice(5, 15)} />

        </div>

        {/* RIGHT */}
        <div className="lg:col-span-3">

          <h2 className="text-3xl font-bold mb-6">
            Phim đề xuất
          </h2>

          <div className="flex flex-col gap-4">

            {movies.slice(0, 6).map((m) => (
              <SidebarMovie key={m.id} movie={m} />
            ))}

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Home;