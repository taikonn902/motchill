import axios from "axios";

const API_KEY =
  process.env.REACT_APP_TMDB_API_KEY ||
  import.meta.env?.VITE_TMDB_API_KEY ||
  "";

const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/original";

/* =========================
   AXIOS INSTANCE
========================= */
const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

/* =========================
   IMAGE
========================= */
export const getImage = (path) =>
  path ? `${IMAGE_BASE}${path}` : "";

/* =========================
   MOVIES
========================= */
export const fetchMovies = async () => {
  try {
    const res = await api.get("/movie/popular");
    return res.data?.results || [];
  } catch {
    return [];
  }
};

/* =========================
   DETAIL
========================= */
export const fetchMovieDetail = async (id) => {
  try {
    const res = await api.get(`/movie/${id}`);
    return res.data || null;
  } catch {
    return null;
  }
};

/* =========================
   CREDITS
========================= */
export const fetchMovieCredits = async (id) => {
  try {
    const res = await api.get(`/movie/${id}/credits`);
    return res.data || null;
  } catch {
    return null;
  }
};

/* =========================
   VIDEOS
========================= */
export const fetchMovieVideos = async (id) => {
  try {
    const res = await api.get(`/movie/${id}/videos`);
    return res.data || null;
  } catch {
    return null;
  }
};

/* =========================
   🎥 TRAILER PICKER (FIX IMPORTANT)
========================= */
export const getTrailer = (videos) => {
  if (!videos?.results?.length) return null;

  return (
    videos.results.find(
      (v) => v.site === "YouTube" && v.type === "Trailer"
    ) ||
    videos.results.find(
      (v) => v.site === "YouTube"
    ) ||
    null
  );
};

