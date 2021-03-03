import styled from "@emotion/styled";
import theme from "uhc-themes";
import "../global.css";

type IButtonType = "primary" | "secondary" | "danger" | undefined;

interface ISpanProps {
  buttonType?: IButtonType;
  disabled?: boolean;
}

interface IButtonProps {
  buttonType?: IButtonType;
  disabled?: boolean;
}

interface IBadgeProps {
  buttonType?: IButtonType;
  disabled?: boolean;
  badgeNumber?: number;
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
const getBadgeColor = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return theme.color.gray;
  }

  switch (buttonType) {
    case "secondary":
      return theme.color.white;
    case "danger":
      return theme.color.dangerPrimary;
    default:
      return theme.color.gray;
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

const getBadgeBackground = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "white";
  }

  switch (buttonType) {
    case "secondary":
      return theme.color.tertiary;
    case "danger":
      return "white";
    default:
      return "white";
  }
};

export const SButton = styled.button<IButtonProps>`
  display: inline-block;
  width: 100%;
  padding: 1px;

  background: ${props => getButtonBackground(props.disabled, props.buttonType)};

  font-size: 16px;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  pointer-events: ${props => (props.disabled ? "none" : "auto")};
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

  color: ${props => getSpanColor(props.disabled, props.buttonType)};
  background: ${props => getSpanBackground(props.disabled, props.buttonType)};
`;

export const SBadge = styled.span<IBadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: text-top;

  margin-left: 7px;
  height: 24px;
  width: 24px;
  font-size: ${props => {
    return props.badgeNumber && props.badgeNumber > 99 ? "12px" : "16px";
  }};
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;

  border-radius: 50px;

  color: ${props => getBadgeColor(props.disabled, props.buttonType)};
  background: ${props => getBadgeBackground(props.disabled, props.buttonType)};
`;
