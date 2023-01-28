import React from "react";

export default (state, action) => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        favouriteList: [action.payload, ...state.favouriteList],
      };
    case "REMOVE_FAVOURITE":
      return {
        favouriteList: state.favouriteList.filter(
          (item) => item !== action.payload
        ),
      };
    default:
      return state;
  }
};
