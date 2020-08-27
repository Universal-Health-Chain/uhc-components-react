import styled from "@emotion/styled";

interface IRadioProps {
  isSelected?: boolean;
  selectedColor: string;
  containerColorUnselected: string;
  containerColorSelected: string;
}

export const SRadioButton = styled.div<IRadioProps>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${(props) =>
    props.isSelected
      ? `1px solid ${props.containerColorSelected}`
      : `1px solid ${props.containerColorUnselected}`};
  border-radius: 50px;

  & > div {
    border-radius: 50px;
    width: 16px;
    height: 16px;
    background: ${(props) =>
      props.isSelected ? props.selectedColor : "transparent"};
  }
`;
