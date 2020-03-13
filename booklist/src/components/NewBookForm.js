import React, { useContext, useState, useEffect } from "react";
import { BookContext } from "../contexts/BookContext";

const NewBookForm = () => {
  const { state, dispatch } = useContext(BookContext);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (id) {
      dispatch({ type: "EDIT_BOOK", book: { id, title, author } });
      return resetForm();
    }
    dispatch({ type: "ADD_BOOK", book: { title, author } });
    resetForm();
  };

  const resetForm = () => {
    setId("");
    setTitle("");
    setAuthor("");
  };

  useEffect(() => {
    const { selected } = state;
    setId(selected ? selected.id : "");
    setTitle(selected ? selected.title : "");
    setAuthor(selected ? selected.author : "");
  }, [state]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" value={id}></input>
      <input
        type="text"
        placeholder="book title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="author name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
      />
      <input type="submit" value="add book" />
    </form>
  );
};

export default NewBookForm;
