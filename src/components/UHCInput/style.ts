import styled from "@emotion/styled";
import theme from "uhc-themes";
import DatePicker from "react-datepicker";

import "../global.css";
import { css, keyframes } from "@emotion/core";

interface IContainerProps {
  isFocused: boolean;
  multiline?: boolean;
  error?: string;
}

interface ILabelProps {
  isFocused: boolean;
  value: string;
}

export const SContainer = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background: ${(props) =>
    props.isFocused
      ? `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary})`
      : props.error
      ? `red`
      : `grey`};
  position: relative;
  border-radius: 8px;
`;

export const SDateContainer = styled.div<IContainerProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background: transparent;
  position: relative;
  border-radius: 8px;

  & > .react-datepicker-wrapper {
    width: 100%;
  }
`;

export const SInput = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  font-size: 14px;

  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  border-radius: 8px;
  padding-left: 1rem;
  border: none;
  outline: none;

  &[type="date"][value=""]::-webkit-datetime-edit-text {
    color: transparent;
  }
  &[type="date"][value=""]::-webkit-datetime-edit-month-field {
    color: transparent;
  }
  &[type="date"][value=""]::-webkit-datetime-edit-day-field {
    color: transparent;
  }

  &[type="date"][value=""]::-webkit-datetime-edit-year-field {
    color: transparent;
  }

  color: black;
`;

export const SDatePicker = styled(DatePicker)`
  width: 100%;
  background: red;
`;

export const STextArea = styled.textarea`
  width: 100%;
  height: 150px;
  outline: none;
  padding: 0.5rem;
  font-size: 14px;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  border-radius: 8px;
  padding-left: 1rem;
  border: none;
  outline: none;

  resize: vertical;

  & + label {
    top: 0.5rem;
  }
`;

export const SLabel = styled.label<ILabelProps>`
  background: white;
  position: absolute;
  left: 0;
  padding: 0 5px;
  color: grey;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 14px;
  pointer-events: none;
  transform: translateY(0);
  transition: all 0.15s ease-out;
  margin-left: 1rem;
  ${(props) =>
    (props.isFocused || props.value !== "") &&
    css`
      transform: translateY(-100%);
      font-size: 12px;
    `};
`;

export const SError = styled.span`
  display: block;
  padding: 0.1em 1rem;
  color: red;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 12px;
`;
