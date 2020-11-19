import * as types from "./actions";
import { isNBetween } from "../utils/utils";

export default function moviesReducer(
  state = { movies: [] },
  { type, payload }
) {
  const { SET_MOVIES, FILTER_BY_RATING } = types;
  switch (type) {
    case SET_MOVIES:
      return { ...state, movies: payload, lastResults: payload };
    case FILTER_BY_RATING:
      if (payload) {
        const filteredMovies = state.lastResults.filter(({ vote_average }) =>
          isNBetween(vote_average, payload - 2, payload)
        );
        return { ...state, movies: filteredMovies };
      } else {
        return { ...state, movies: state.lastResults };
      }
    default:
      return state;
  }
}
