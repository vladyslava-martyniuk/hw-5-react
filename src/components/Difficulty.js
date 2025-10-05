import styled from "styled-components";

const colors = {
  0: "#4caf50",
  1: "#ff9800",
  3: "#f44336",
};

const Difficulty = styled.div`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  background-color: ${({ difficulty }) => colors[difficulty] || "#999"};
  ${({ difficulty }) =>
    difficulty === 3 && "box-shadow: 0 0 10px red;"}// виділення складного
`;

export default Difficulty;
