import React from "react";
import RecipeList from "./components/RecipeList";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "16px" }}>
        <h1>Список рецептів</h1>
        <RecipeList />
      </div>
    </>
  );
}

export default App;
