import styled from "@emotion/styled";
import theme from "uhc-themes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../global.css";

interface IContainerProps {
  isFocused: boolean;
  multiline?: boolean;
  error?: string;
}

interface ILabelProps {
  isFocused: boolean;
}

export const SContainer = styled.div<IContainerProps>`
  display: inline-block;
  padding: 1px;
  margin-top: 8px;
  position: relative;
  width: 100%;

  background: ${(props) =>
    props.isFocused
      ? `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary})`
      : props.error
      ? `red`
      : `grey`};

  border-radius: ${(props) => (props.multiline ? "10px" : "8px")};

`;

export const SInput = styled.input`
  display: block;
  padding: 0.5em 1em;
  width: 100%;

  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 14px;

  color: black;
  background: white;

  border-radius: 8px;

  border: none;
  outline: none;

  &:not([value=""]) ~ label,
  &:focus ~ label {
    top: -26px;
    font-size: 12px;
  }

`;

export const SDatePicker = styled(DatePicker)`
  &:focus ~ label {
    top: -26px;
    font-size: 12px;
  }
`;

export const STextArea = styled.textarea`
  display: block;
  padding: 0.5em 1em;
  width: 100%;

  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 16px;

  color: black;
  background: white;

  border-radius: 10px;

  border: none;
  outline: none;
  resize: vertical;

  &:not(:empty) ~ label,
  &:focus ~ label {
    top: -26px;
    font-size: 12px;
  }
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

export const SError = styled.span`
  display: block;
  padding: 0.1em 1.5em;
  color: red;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 12px;
`;
