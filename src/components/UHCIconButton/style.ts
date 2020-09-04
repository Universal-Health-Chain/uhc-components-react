import styled from "@emotion/styled";
import theme from "uhc-themes";
import "../global.css";

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5em;
  height: 5em;
  padding: 1em;
  border-radius: 50px;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${theme.color.primary},
    ${theme.color.secondary}
  );
  outline: none;

  &:hover {
    filter: brightness(98%);
  }

  &:active {
    filter: brightness(94%);
  }
`;

export const SButton = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  background: linear-gradient(
    to right,
    ${theme.color.primary},
    ${theme.color.secondary}
  );

  outline: none;
  
  &:hover {
    filter: brightness(98%);
  }

  &:active {
    filter: brightness(94%);
  }
`;

export const SSpan = styled.span`
  display: flex;
  align-items: center;
  padding: 0.5em 1em;
  color: ${theme.color.white};
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 600;
  & > svg {
    margin-right: 5px;
  }
`;
