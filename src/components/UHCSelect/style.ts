import styled from "@emotion/styled";
import theme from "uhc-themes";

interface ISelectProps {
  visible: boolean;
}

export const SExternalContainer = styled.div`
  display: flex;
  padding: 1px;
  height: 2.5em;
  width: 100%;
  border-radius: 8px;
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
  margin-left: 15px;
`;
export const SIcon = styled.div`
  margin-right: 15px;
  height: 16px;
  width: 16px;
`;

export const SSelect = styled.ul<ISelectProps>`
  display: ${(props) => (props.visible ? "flex" : "none")};
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

export const SLabel = styled.label`
  font-size: 12px;
  padding: 0.5em 1.2em;
  color: grey;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  pointer-events: none;
`;