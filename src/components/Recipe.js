import React from "react";
import Difficulty from "./Difficulty";
import styled from "styled-components";

const RecipeCard = styled.div`
  background-color: white;
  padding: 16px;
  margin: 12px 0;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Recipe = ({ img, title, difficulty, description }) => {
  return (
    <RecipeCard>
      <h3>{title}</h3>
      <img
        src={img}
        alt={title}
        style={{ width: "300px", height: "200px", objectFit: "cover" }}
      />
      <Difficulty difficulty={difficulty}>
        {difficulty === 0 ? "Легко" : difficulty === 1 ? "Середньо" : "Складно"}
      </Difficulty>
      <p>{description}</p>
    </RecipeCard>
  );
};

export default Recipe;
