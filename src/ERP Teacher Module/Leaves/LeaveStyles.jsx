import styled from "styled-components";
import background from "../assets/LoginBackground.png";
import { Card, Nav } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow: scroll;
  scrollbar-width: thin;
  padding: 75px 50px 10px 30px;
`;
export const Content = styled.div`
  width: 90vw;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 15px;
  border: 1px solid #7e3bd133;
  background: #f9f9f959;
  top: 70px;
  left: 38px;
`;
export const Cards = styled(Card)`
  background: none;
  border: none;
`;
export const CardHeader = styled(Card.Header)`
  position: relative;
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
export const BackIcon = styled(FaChevronLeft)`
  width: 13px;
  height: 13px;
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 17px;
`;
export const Atag = styled.a`
  text-decoration: none;
  color: black;
`;
export const StyledProfile = styled.img`
  width: 90px;
  height: 90px;
`;
export const Name = styled.h5`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: #000000;
`;
export const Email = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #00000080;
`;
export const Role = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 14px;
  text-align: left;
  color: #7e3bd1;
`;
export const Subject = styled.div`
  width: 90px;
  height: 35px;
  border: none;
  border-radius: 10px;
  background: #e4ceff;
  font-size: 16px;
  font-weight: 400;
  line-height: 14px;
  text-align: center;
  padding-top: 10px;
  color: #7e3bd1;
`;
export const StyledSpan = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  margin-left: -25px;
  margin-top: 5px;
  border: none;
`;

export const LeaveType = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #00000080;
`;
export const NavLink = styled(Nav.Link)`
  text-decoration: none;
  color: black;
  width: auto;
  height: auto;
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
`;
export const TotalDiv = styled.div`
  width: 120px;
  height: 70px;
  border-radius: 10px;
  background: #fcfcfce5;
  text-align: center;
`;
export const TotalType = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #00000099;
  padding-top: 15px;
`;
export const TotalNumber = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #000000;
  margin-top: -8px;
`;
export const RequestedLeave = styled.div`
  width: 28vw;
  height: 50vh;
  border-radius: 15px;
  background: #fcfcfce5;
`;
export const Days = styled.div`
  background: #fcfcfc;
  border: 1px solid #0000001a;
  border-radius: 5px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  color: #000000cc;
`;
export const StyledTable = styled.table`
  width: 58vw;
  height: 60vh;
  overflow: auto;
`;
export const TableHead = styled.tr`
  padding-top: 10px;
`;
export const DateFeild = styled.input`
  top: 5px;
  left: 20px;
  position: absolute;
  width: 120px;
  height: 30px;
  padding-left: 10px;
  border-radius: 10px;
  border: none;
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #00000066;
  // appearance: none;
  //
  // background-repeat: no-repeat;
  // background-position: right center;

  padding-right: 10px; /* Adjust as needed */
`;
export const CalenderText = styled.h5`
  font-size: 16px;
  font-weight: 500;
  line-height: 21px;
  text-align: center;
  color: #7200ff;
  position: absolute;
  left: 45%;
`;
export const TableCardHeader = styled(Card.Header)`
  display: flex;
  border: none;
  height: 35px;
  background: none;
`;

export const LeaveHistoryTable = styled.table`
  border-collapse: collapse;
  width: 86vw;
  height: 55vh;
  border-radius: 10px;
  background: #ffffff;
  overflow: auto;
`;
export const Tbody = styled.tbody`
  & :hover {
    background-color: #ebdbff;
  }
  align-items: center;
`;
export const Thead = styled.th`
  color: #000000;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 10px;
`;
export const THeadRow = styled.tr`
  border-radius: 10px;
`;
export const Tdata = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
  max-width: 200px;
`;
export const PaginationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 5px;
`;
export const PageSize = styled.label`
  margin-right: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #000000b2;
`;
export const Pagination = styled.div`
  display: flex;
  gap: 10px;
`;
export const TextPagination = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const StyledStatus = styled.div`
  text-align: center;
  border-radius: 10px;
  height: 30px;
  width: 120px;
  padding-top: 5px;
  color: white;
`;
export const LeaveTypeSpan = styled.div`
  text-align: center;
  border-radius: 10px;
  height: 30px;
  width: 110px;
  padding-top: 5px;
`;
