import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 999;
`;
export const Content = styled.div`
  height: 87vh;
  width: 90vw;
  position: absolute;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 15px;
  border: 1px solid #7e3bd133;
  background: #f9f9f959;
  top: 70px;
  left: 38px;
  overflow: hidden;
`;
export const Cards = styled(Card)`
  background: none;
  border: none;
`;
export const CardHeader = styled(Card.Header)`
  position: relative;
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
  top: 17px;
`;
export const Heading = styled.h5`
  width: 300px;
  height: 25px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  margin-left: 35px;
`;
export const StyledTable = styled.table`
  width: 87vw;
  height: 74vh;
  border-radius: 15px;
  background: #ffffff66;
`;

export const Thead = styled.th`
  border: 1px solid #0000001a;
  border: none;
  text-align: center;
`;

export const Tdata = styled.td`
  align-items: center;
  text-align: center;
`;
export const Trow = styled.tr`
  padding: 10px;
`;
export const Subject = styled.div`
  width: 100px;
  height: 65px;
  background: #f8f8f8;
  border: 1px solid #0000001a;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: #000000cc;
`;
export const TableHeadear = styled.thead`
  height: 35px;
  background: #f5f7fb;
  border-radius: 15px;
`;
export const Days = styled.td`
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
