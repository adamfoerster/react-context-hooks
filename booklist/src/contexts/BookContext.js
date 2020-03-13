import React, { createContext, useReducer, useEffect } from "react";
import { bookReducer, initialState } from "../reducers/bookReducer";

export const BookContext = createContext();

const BookContextProvider = props => {
  const [state, dispatch] = useReducer(bookReducer, initialState, () => {
    const localData = localStorage.getItem("books");
    return localData
      ? { books: JSON.parse(localData), selected: null }
      : initialState;
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(state.books));
  }, [state]);
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
