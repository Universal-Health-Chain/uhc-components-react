import { css } from "@emotion/core";
import styled from "@emotion/styled";
import theme from "uhc-themes";

interface ILabelProps {
  hasSelectedValue: boolean;
}

export const SWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const SExternalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px;
  background: linear-gradient(
    to right,
    ${theme.color.primary},
    ${theme.color.secondary}
  );
  position: relative;
  border-radius: 8px;
`;

export const SInternalContainer = styled.input`
  width: 100%;
  outline: none;
  padding: 0.5rem;
  font-size: 14px;
  background: white;

  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 14px;
  border-radius: 8px;
  padding-left: 1rem;
  border: none;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const SText = styled.p`
  position: absolute;
  left: 0;
  padding-left: 1rem;
  color: black;
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 14px;
  pointer-events: none;
  transform: translateY(0);
`;
export const SIcon = styled.div`
  position: absolute;
  right: 0;
  padding-right: 1rem;
  cursor: pointer;
  transform: translateY(0);
`;

export const SSelect = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3em;
  left: 0px;
  width: 95%;
  padding: 0;
  margin: 30px 26px;
  list-style-type: none;
  z-index: 0;
`;

export const SLabel = styled.label<ILabelProps>`
  position: absolute;
  left: 0;
  padding-left: 1rem;
  color: grey;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 14px;
  pointer-events: none;
  margin: 0;
  transform: translateY(0);
  transition: all 0.15s ease-out;
  ${(props) =>
    props.hasSelectedValue &&
    css`
      transform: translateY(-150%);
      font-size: 12px;
    `};
`;

export const SOptionsList = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  max-height: 100px;
  overflow-y: scroll;
`;
