import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { MdTune } from "react-icons/md";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  z-index: 999;
`;
export const MarkCard = styled(Card)`
  left: 65px;
  top:70px;
  positon: absolute;
  border: none;
  width: 88vw;
  background: none;
  overflow: auto;
`;

export const Atag = styled.a`
  text-decoration: none;
  color: black;
`;
export const BackIcon = styled(FaChevronLeft)`
  width: 13px;
  height: 13px;
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 10px;
`;
export const Heading = styled.h5`
  width: 300px;
  height: 25px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  margin-left: 40px;
`;
export const AddButton = styled.button`
  top: 7px;
  right: 25px;
  position: absolute;
  width: 140px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(270deg, #7e3bd1 12.67%, #b375ff 76.71%);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
`;
export const FilterButon = styled.button`
  top: 7px;
  right: 180px;
  position: absolute;
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const FIcon = styled(MdTune)`
  margin-right: 5px;
`;

export const MainCardBody = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MessageCard = styled(Card)`
  border: none;
  border-radius: 15px;
  height: 130px;
  background: #ffffff66;
  &:hover {
    background: white;
  }
`;
export const CardHeading = styled.h5`
  position: absolute;
  top: 12px;
  left: 55px;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0em;
  color: #000000;
`;

export const MessageDate = styled.p`
  position: absolute;
  right: 45px;
  top: 12px;
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #595959;
`;
export const MessageCardHead = styled(Card.Header)`
  border: none;
`;
export const MessageCardBody = styled(Card.Body)`
  border: none;
  position: relative;
  top: -17px;
`;
export const MessageTitle = styled(Card.Title)`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  color: #000000;
  position: absolute;
  left: 55px;
  top: 12px;
`;
export const MessageText = styled(Card.Text)`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  color: #000000;
  position: absolute;
  left: 55px;
  top: 40px;
`;
export const SubmitButton = styled.button`
  width: 140px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(270deg, #7e3bd1 12.67%, #b375ff 76.71%);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
`;