import "./App.css";
import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/NavBar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookForm />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
