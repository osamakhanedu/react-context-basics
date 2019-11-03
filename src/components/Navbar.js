import React, { Component } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { AuthContext } from "../contexts/auth-context";

class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {authcontext => {
          return (
            <ThemeContext.Consumer>
              {themecontext => {
                const { isLightTheme, light, dark } = themecontext;
                const theme = isLightTheme ? light : dark;
                const { isAuthenticated, toggleAuth } = authcontext;
                return (
                  <nav style={{ background: theme.ui, color: theme.syntax }}>
                    <h1>Context App</h1>
                    <div onClick={toggleAuth} style={{ cursor: "pointer" }}>
                      {isAuthenticated ? "Logged in" : "Logged out"}
                    </div>
                    <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </nav>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Navbar;
