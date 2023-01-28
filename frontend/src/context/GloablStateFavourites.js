import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducerFavourites.js";

const initialState = {
  favouriteList: [],
};

export const GlobalContextFavourites = createContext(initialState);

export const GlobalProviderFavourites = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addBoardGameToFavourite(item) {
    dispatch({
      type: "ADD_FAVOURITE",
      payload: item,
    });
  }

  function removeBoardGameFromFavourite(item) {
    dispatch({
      type: "REMOVE_FAVOURITE",
      payload: item,
    });
  }

  return (
    <GlobalContextFavourites.Provider
      value={{
        favouriteList: state.favouriteList,
        addBoardGameToFavourite,
        removeBoardGameFromFavourite,
      }}
    >
      {children}
    </GlobalContextFavourites.Provider>
  );
};
