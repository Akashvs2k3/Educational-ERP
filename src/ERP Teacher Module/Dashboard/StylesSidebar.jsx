import styled from "styled-components";
import background from "../assets/LoginBackground.png";
import { MdOutlineClose } from "react-icons/md";
import { Card, Col, Offcanvas } from "react-bootstrap";

export const StyledSidebar = styled.div`
  margin: 0;
  padding: 0;
  width: 50px;
  background: url(${background});
  position: fixed;
  height: 96%;
  overflow: auto;
  right: 0;
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  margin-top: 57px;
  z-index: 999;
`;
export const StyledButton = styled.button`
  width: 28px;
  height: 28px;
  margin-top: 13px;
  border-radius: 5px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: 700;
  padding: 0;
  background: #ddc3ff;
  border: none;
  z-index: 999;
`;
export const StyledOffCanvas = styled(Offcanvas)`
  height: 86vh;
  border-radius: 20px;
  overflow: auto;
`;
export const CanvasCard = styled(Card)`
  border: none;
`;
export const CanvasOptions = styled(Card.Body)`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;
export const CanvasItemsBtn = styled.button`
  background: white;
  border: none;
  width: 105px;
  height: 74px;
  align-items: center;
  border-radius: 10px;
  &:hover {
    background: #f4f0ff;
  }
`;

export const CloseIcon = styled(MdOutlineClose)`
  position: absolute;
  width: 20px;
  height: 20px;
  right: 10px;
  top: 10px;
`;
export const CanvasHeading = styled.h6`
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0em;
  text-align: left;
`;
export const CanvasItmCol = styled(Col)`
  align-items: center;
`;
