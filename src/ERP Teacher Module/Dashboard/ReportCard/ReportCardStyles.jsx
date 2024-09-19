import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card, ListGroup } from "react-bootstrap";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  z-index:999;
`;
export const Content = styled.div`
  padding: 15px;
  display: flex;
  position: absolute;
  top: 70px;
  left: 38px;
  overflow: hidden;
`;
export const ListCards = styled(Card)`
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  height: 84vh;
  width: 250px;
`;
export const ListHeading = styled(Card.Header)`
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const ListView = styled(ListGroup)`
  text-decoration: none;
  color: #5f5f5f;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  & :hover {
    background: #ebdbff;
  }
`;
export const ListViewItem = styled(ListGroup.Item)`
  border: none;
  height: 50px;
`;
export const ListViewImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const ProgresReport = styled(Card)`
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  width: 70vw;
  border-radius: 20px;
  overflow: auto;
  background: #ffffff80;
  margin-left: 20px;
  border: none;
`;
export const ProgresReportHead = styled(Card.Header)`
  border: 1px solid #0000001a;
`;
export const ReportHeading = styled.h5`
  position: relative;
  left: 15px;
  top: 5px;
  font-size: 20px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  color: #000000;
`;
export const TermButtonsDiv = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 40%;
  top: 10px;
`;
export const TermButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #00000040;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #00000080;
`;

export const SelectExam = styled.select`
  position: absolute;
  right: 30px;
  top: 10px;
  width: 140px;
  height: 30px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #00000080;
  padding-left: 10px;
  padding-right: 10px;
`;
