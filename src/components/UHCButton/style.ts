import styled from "@emotion/styled";
import theme from "../theme";
import "../global.css";

type IButtonType = "primary" | "secondary" | "danger" | undefined;
type ISize = "big" | "small" | undefined;

interface ISpanProps {
  buttonType?: IButtonType;
  disabled?: boolean;
}

interface IButtonProps {
  buttonType?: IButtonType;
  size?: ISize;
  disabled?: boolean;
}

const getButtonBackground = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "grey";
  }

  switch (buttonType) {
    case "secondary":
      return `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary});`;
    case "danger":
      return `linear-gradient(to right, ${theme.color.dangerPrimary}, ${theme.color.dangerSecondary});`;
    default:
      return `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary});`;
  }
};

const getButtonSize = (size: ISize) => {
  switch (size) {
    case "small":
      return "10em";
    default:
      return "15em";
  }
};

const getSpanColor = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "grey";
  }

  switch (buttonType) {
    case "secondary":
      return theme.color.black;
    case "danger":
      return theme.color.white;
    default:
      return theme.color.white;
  }
};

const getSpanBackground = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "lightgrey";
  }

  switch (buttonType) {
    case "secondary":
      return theme.color.white;
    case "danger":
      return `linear-gradient(to right, ${theme.color.dangerPrimary}, ${theme.color.dangerSecondary});`;
    default:
      return `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary});`;
  }
};

export const SButton = styled.button<IButtonProps>`
  display: inline-block;
  width: ${(props) => getButtonSize(props.size)};
  padding: 1px;

  background: ${(props) =>
    getButtonBackground(props.disabled, props.buttonType)};

  font-size: 16px;

  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  outline: none;

  &:hover {
    filter: brightness(98%);
  }

  &:active {
    filter: brightness(94%);
  }
`;

export const SSpan = styled.span<ISpanProps>`
  display: block;
  padding: 0.5em 1em;

  font-family: "Titillium Web", sans-serif;
  font-weight: 600;

  border-radius: 50px;

  color: ${(props) => getSpanColor(props.disabled, props.buttonType)};
  background: ${(props) => getSpanBackground(props.disabled, props.buttonType)};
`;
