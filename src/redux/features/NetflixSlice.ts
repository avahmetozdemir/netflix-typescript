import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
export interface NetflixState {
  movies: Array<Movie>;
  genres: Array<Genre>;
}

interface Movie {
  genre_ids: Array<number>;
  backdrop_path: string;
  id: number;
  original_name?: string;
  original_title: string;
}

interface Genre {
  id: number;
  name: string;
}

interface FetchMoviePayload {
  type: string;
}

const initialState: NetflixState = {
  movies: [],
  genres: [],
};

export const getGenres = createAsyncThunk(
  "netflix/genres",
  async (thunkAPI) => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=fe79489919db98a9fc08a558f2e3c398"
    );

    const genres = await response.data.genres;

    return genres;
  }
);

const createArrayFromRawData = (
  array: Array<Movie>,
  moviesArray: Array<Object>,
  genres: Array<Genre>
) => {
  array.forEach((movie) => {
    const movieGenres = [] as Array<Object>;
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) movieGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: movieGenres.slice(0, 3),
      });
  });
};

const getRawData = async (
  api: string,
  genres: Array<Genre>,
  paging = false
) => {
  const moviesArray = [] as Array<Movie>;
  for (let i = 1; moviesArray.length < 60 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    createArrayFromRawData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchMovies = createAsyncThunk(
  "netflix/movies",
  async ({ type }: FetchMoviePayload, thunkAPI) => {
    const { netflix }: any = thunkAPI.getState(); // ??? netflix type?

    const genres = netflix.genres;

    return getRawData(
      `https://api.themoviedb.org/3/trending/${type}/week?api_key=fe79489919db98a9fc08a558f2e3c398`,
      genres,
      true
    );
  }
);

export const netflixSlice = createSlice({
  name: "netflix",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const {} = netflixSlice.actions;

export default netflixSlice.reducer;
