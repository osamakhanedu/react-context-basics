import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/Booklist";
import ThemeContextProvider from "./contexts/theme-context";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
