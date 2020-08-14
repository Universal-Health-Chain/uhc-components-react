import styled from "@emotion/styled";
import theme from "../theme";
import "../global.css";

type IType = "primary" | "secondary" | undefined;

interface ISpanProps {
  type?: IType;
}

const getSpanColor = (type: IType) => {
  switch (type) {
    case "secondary":
      return theme.color.black;
    default:
      return theme.color.white;
  }
};

const getSpanBackground = (type: IType) => {
  switch (type) {
    case "secondary":
      return theme.color.white;
    default:
      return `linear-gradient(to right, ${theme.color.primary}, ${theme.color.secondary});`;
  }
};

export const SButton = styled.button`
  display: inline-block;
  width: 13em;
  padding: 1px;

  background: linear-gradient(
    to right,
    ${theme.color.primary},
    ${theme.color.secondary}
  );

  font-size: 16px;

  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  outline: none;

  & > span {
  }
`;

export const SSpan = styled.span<ISpanProps>`
  display: block;
  padding: 0.5em 1em;

  font-family: "Titillium Web", sans-serif;
  font-weight: 600;

  border-radius: 50px;

  color: ${(props) => getSpanColor(props.type)};
  background: ${(props) => getSpanBackground(props.type)};
`;
