import styled from "@emotion/styled";
import theme from "../theme";
import "../global.css";

interface IContainerProps {
  isFocused: boolean;
  multiline?: boolean;
}

interface ILabelProps {
  isFocused: boolean;
}

export const SContainer = styled.div<IContainerProps>`
  display: inline-block;
  padding: 1px;
  position: relative;

  background: ${(props) =>
    props.isFocused
      ? `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary})`
      : `grey`};

  border-radius: ${(props) => (props.multiline ? "10px" : "50px")};
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

  &:not([value=""]) ~ label,
  &:focus ~ label {
    top: -28px;
    font-size: 14px;
  }
`;

export const STextArea = styled.textarea`
  display: block;
  padding: 0.5em 1em;
  width: 17em;

  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 16px;

  color: black;
  background: white;

  border-radius: 10px;

  border: none;
  outline: none;
  resize: vertical;
`;

export const SLabel = styled.label<ILabelProps>`
  position: absolute;
  top: 0;
  left: 0;
  padding: 0.5em 1.2em;
  color: grey;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 16px;
  transition: 0.2s;
  pointer-events: none;
`;
