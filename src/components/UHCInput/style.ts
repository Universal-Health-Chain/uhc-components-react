import styled from "@emotion/styled";
import theme from "../theme";
import "../global.css";

interface IContainerProps {
  isFocused: boolean;
}

export const SContainer = styled.div<IContainerProps>`
  display: inline-block;
  padding: 1px;

  background: ${(props) =>
    props.isFocused
      ? `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary})`
      : `grey`};

  border-radius: 50px;
`;

export const SInput = styled.input`
  display: block;
  padding: 0.5em 1em;
  width: 17em;

  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 16px;

  color: black;
  background: white;

  border-radius: 50px;

  border: none;
  outline: none;
`;
