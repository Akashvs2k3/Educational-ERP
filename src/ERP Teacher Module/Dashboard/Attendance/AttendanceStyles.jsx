import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card, Col, Row } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { FaChevronLeft } from "react-icons/fa";
import Calender from "../../assets/Calender.png";

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

  overflow: auto;
`;
export const Cards = styled(Card)`
  background: none;
  border: none;
`;
export const CardHeader = styled(Card.Header)`
  position: relative;
`;
export const Search = styled.div`
  position: absolute;
  bottom: 40px;
  left: 160px;
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
export const SearchInput = styled.input`
  position: absolute;
  width: 240px;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #e0e3e9;
  padding: 0 10px;
  padding-left: 25px;
  outline: 0;
  font-size: 11px;
  font-weight: 400;
`;
export const SIcon = styled(CiSearch)`
  position: absolute;
  left: 210px;
  cursor: pointer;
  top: 10px;
`;
export const BackIcon = styled(FaChevronLeft)`
  width: 13px;
  height: 13px;
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 17px;
`;

export const CardBody = styled(Card.Body)`
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: auto;
`;
export const Atag = styled.a`
  text-decoration: none;
  color: black;
`;
export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 55vw;
  height: 74vh;
  background-color: white;
  border-radius: 10px;
`;
export const Tbody = styled.tbody`
  & :hover {
    background-color: #ebdbff;
  }
  align-items: center;
`;
export const Thead = styled.th`
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const THeadRow = styled.tr`
  border-radius: 10px;
`;
export const Tdata = styled.td`
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: #5f5f5f;
`;
export const ChartCard = styled(Card)`
  width: 300px;
  height: 230px;
  border-radius: 20px;
  background-color: white;
  align-items: center;
`;
export const ChartsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;
export const DoughnutChart = styled.div`
  position: absolute;
  width: 135px;
  height: 135px;
  top: 25px;
`;
export const ChartHeading = styled.p`
  font-size: 15px;
  color: #2f2828;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  color: #2f2828;
`;
export const ChartFoot = styled(Row)`
  position: absolute;
  bottom: 10px;
`;
export const ChartFootText = styled.p`
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #858585;
`;
export const ChartFootCol = styled(Col)`
  width: 125px;
  height: 45px;
  align-items: center;
`;
export const ChartFootAttendence = styled.p`
  color: #ef0000;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  position: absolute;
  top: 20px;
  left: 50px;
`;
export const ChartFootLeaves = styled.p`
  color: #0019ff;
  font-size: 15px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  position: absolute;
  top: 20px;
  right: 70px;
`;
export const ChartAttendance = styled.p`
  position: absolute;
  color: #0019ff;
  background: #ffd0d080;
  border-radius: 10px;
  bottom: 0px;
  right: -25px;
  font-size: 11px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const Chartleave = styled.p`
  position: absolute;
  color: #ef0000;
  background: #d5e3ff99;
  border-radius: 10px;
  top: 10px;
  left: 0px;
  font-size: 11px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
`;

export const BarChartdIv = styled.div`
  width: 320px;
  height: 230px;
  position: absolute;
  right: 5px;
  top: 10px;
`;
export const StyledSpan = styled.div`
  text-align: center;
  border-radius: 10px;
  height: 25px;
  width: 60px;
  padding-top: 2px;
  margin-left: 40px;
`;
export const BarChart = styled.div`
  width: 200px;
  height: 200px;
`;
export const DateFeild = styled.input`
  top: 9px;
  right: 25px;
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
  // background-image: url(${Calender});
  // background-repeat: no-repeat;
  // background-position: right center;

  padding-right: 10px; /* Adjust as needed */
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
  gap: 15px;
`;
export const TextPagination = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const SubmitButton = styled.button`
  width: 100px;
  height: 33px;
  border-radius: 20px;
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  background: linear-gradient(270deg, #7200ff 18.46%, #b376ff 83.85%);
`;
