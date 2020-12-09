import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const TurnOnGPSContainer = styled.TouchableOpacity`
  position: absolute;
  top: ${(props) => props.marginTop}px;
  right: 40px;
  width: 40px;
  height: 40px;
  border-radius: 16px;
  background-color: #ffffff;
  z-index: 5;
  justify-content: center;
  align-items: center;
`;
