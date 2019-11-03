import React from "react";
import Navbar from "./components/Navbar";
import BookList from "./components/Booklist";
import ThemeContextProvider from "./contexts/theme-context";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/auth-context";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
