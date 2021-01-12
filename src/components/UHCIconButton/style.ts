import styled from "@emotion/styled";
import theme from "uhc-themes";
import "../global.css";

type IButtonType = "primary" | "secondary" | "danger" | undefined;

interface IContainerProps {
  buttonType?: IButtonType;
  disabled?: boolean;
}

interface IButtonProps {
  buttonType?: IButtonType;
  disabled?: boolean;
}

interface ISpanProps {
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

export const SInnerContainer = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  border-radius: 50px;
  cursor: pointer;
  background: ${props => getSpanBackground(props.disabled, props.buttonType)};
  outline: none;

  &:hover {
    filter: brightness(98%);
  }

  &:active {
    filter: brightness(94%);
  }
`;
export const SContainer = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5em;
  height: 5.5em;
  padding: 0.5em;
  border-radius: 50px;
  cursor: pointer;
  background: ${props => getButtonBackground(props.disabled, props.buttonType)};
  outline: none;

  &:hover {
    filter: brightness(98%);
  }

  &:active {
    filter: brightness(94%);
  }
`;

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
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1em;
  color: ${props => getSpanColor(props.disabled, props.buttonType)};
  background: ${props => getSpanBackground(props.disabled, props.buttonType)};
  border-radius: 50px;
  font-family: "Titillium Web", sans-serif;
  font-size: 16px;
  font-weight: 600;
  & > svg {
    margin-right: 5px;
  }
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

export const SIconBadge = styled.span<IBadgeProps>`
  position: absolute;
  display: flex;
  top:-5px;
  right: -5px;
  text-align: center;
  justify-content: center;
  align-items: center;
  vertical-align: text-top;

  height: 35px;
  width: 35px;
  font-size: ${props => {
    return props.badgeNumber && props.badgeNumber > 99 ? "16px" : "20px";
  }};
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;

  border: 3px solid;
  border-color: grey;
  border-radius: 50px;
  //color: ${theme.color.tertiary};
  color: ${props => {
    if (props.disabled) return "grey";
    return props.buttonType === "danger"
      ? theme.color.dangerSecondary
      : theme.color.tertiary;
  }};
  background: ${theme.color.white};
`;
