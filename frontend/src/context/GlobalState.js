import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";

const initialState = {
  boardGameList: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addBoardGameToCart(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: item,
    });
  }

  function removeBoardGameFromCart(item) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: item,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        boardGameList: state.boardGameList,
        favouriteList: state.favouriteList,
        addBoardGameToCart,
        removeBoardGameFromCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
