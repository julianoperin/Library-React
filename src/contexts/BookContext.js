import React, { createContext, useState } from "react";
import uuid from "uuid/v1";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "aaaaaaaa", author: "11111", id: 1 },
    { title: "bbbbbbbb", author: "22222", id: 2 },
    { title: "ccccccccc", author: "ddddd", id: 3 },
    { title: "ddddddddd", author: "aaa", id: 4 },
  ]);
  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: uuid() }]);
  };
  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
