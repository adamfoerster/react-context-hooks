import uuid from "uuid/v4";

export const initialState = { books: [], selected: null };

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
        books: [
          ...state.books,
          {
            title: action.book.title,
            author: action.book.author,
            id: uuid()
          }
        ]
      };
    case "EDIT_BOOK":
      return {
        selected: null,
        books: [
          ...state.books.filter(book => book.id !== action.book.id),
          action.book
        ]
      };
    case "SELECT_BOOK":
      return { ...state, selected: action.book };
    case "REMOVE_BOOK":
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.id)
      };
    default:
      return state;
  }
};
