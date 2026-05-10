import axios from "axios";

export const fetchMovies = async () => {
  try {
    const res = await axios.get(
      "https://api.tvmaze.com/shows"
    );

    return res.data.slice(0, 20);
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const fetchMovieDetail = async (id) => {
  try {
    const res = await axios.get(
      `https://api.tvmaze.com/shows/${id}`
    );

    return res.data;
  } catch (err) {
    console.log(err);
    return null;
  }
};