import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #456;
  font-size: 1.3em;
  border: none;
  border-radius: 5px;
`;

const StyledComponentExample = () => {
  return <StyledButton>Clique em mim</StyledButton>;
};

export default StyledComponentExample;
