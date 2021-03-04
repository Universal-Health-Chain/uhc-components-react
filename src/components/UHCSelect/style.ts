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
  display: flex;
  padding: 1px;
  height: 2.5em;
  width: 100%;
  border-radius: 8px;
  margin-top: 8px;
  background: linear-gradient(
    to right,
    ${theme.color.primary},
    ${theme.color.secondary}
  );
`;

export const SInternalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  background: white;
  cursor: pointer;
`;

export const SText = styled.p`
  font-family: "Titillium Web", sans-serif;
  font-weight: 600;
  font-size: 14px;
  margin: 0px;
  margin-left: 15px;
`;
export const SIcon = styled.div`
  margin-right: 15px;
  height: 16px;
  width: 16px;
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
  padding: 0.5em 1.2em;
  color: grey;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  transition: 0.3s;
  pointer-events: none;
  top: ${(props) => (props.hasSelectedValue ? "-26px" : "none")};
  font-size: ${(props) => (props.hasSelectedValue ? "12px" : "14px")};
`;

export const SOptionsList = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  max-height: 100px;
  overflow-y: scroll;
`;
