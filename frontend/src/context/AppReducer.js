import React from "react";

export default (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        boardGameList: [action.payload, ...state.boardGameList],
      };
    case "REMOVE_ITEM":
      return {
        boardGameList: state.boardGameList.filter(
          (item) => item !== action.payload
        ),
      };
    default:
      return state;
  }
};
