import React, { useEffect, useState } from "react";
import {
  Atag,
  BackIcon,
  CalenderText,
  CardHeader,
  Cards,
  Content,
  DateFeild,
  Days,
  Email,
  Heading,
  LeaveHistoryTable,
  LeaveType,
  LeaveTypeSpan,
  MainBackground,
  Name,
  NavLink,
  PageSize,
  Pagination,
  PaginationDiv,
  RequestedLeave,
  Role,
  StyledProfile,
  StyledSpan,
  StyledStatus,
  StyledTable,
  Subject,
  THeadRow,
  TableCardHeader,
  TableHead,
  Tbody,
  Tdata,
  TextPagination,
  Thead,
  TotalDiv,
  TotalNumber,
  TotalType,
} from "./LeaveStyles";
import { Card, Col, Nav, Row } from "react-bootstrap";
import Profile from "../assets/ProfilePic.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Leaves() {
  const [activeKey, setActiveKey] = useState("link-1");

  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };
  const currentDate = new Date(); // Get current date
  const [year, setYear] = useState(currentDate.getFullYear());
  const [month, setMonth] = useState(currentDate.getMonth());
  const [selectedDate, setSelectedDate] = useState(
    currentDate.toISOString().split("T")[0]
  );
  const calendar = generateCalendar(year, month);

  function getDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  function getFirstDayOfMonth(year, month) {
    return new Date(year, month, 1).getDay();
  }

  function generateCalendar(year, month) {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1);
    const startingDay = firstDayOfMonth.getDay(); // Get the index of the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)

    let calendar = [[]]; // Start with one row
    let day = 1;

    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startingDay) {
          // Add empty cells before the first day of the month
          calendar[i][j] = null;
        } else if (day <= daysInMonth) {
          // Add days of the month
          if (!calendar[i]) calendar[i] = [];
          calendar[i][j] = day;
          day++;
        } else {
          // If all days are filled, break out of the loop
          break;
        }
      }
    }

    return calendar;
  }

  useEffect(() => {
    setSelectedDate(new Date().toISOString().split("T")[0]); // Set current date initially
  }, []);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const Leavehistory = [
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Casual Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Requested",
    },
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Maternity Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Accepted",
    },
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Casual Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Declined",
    },
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Long Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Requested",
    },
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Sick Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Pending",
    },
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Sick Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Declined",
    },
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Long Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Requested",
    },
    {
      FromDate: "12 Jan 2024",
      ToDate: "12 Jan 2024",
      LeaveType: "Casual Leave",
      Reason:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ",
      Status: "Accepted",
    },
  ];
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;

  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = Leavehistory.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(Leavehistory.length / rowsPerPage);

  const handlePaginationClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <MainBackground>
      <Content>
        <Cards>
          <CardHeader>
            <Atag href="/dashboard">
              <BackIcon />
            </Atag>
            <Heading>My Leave</Heading>
          </CardHeader>
          <Card.Body>
            <Row>
              <Col>
                <div className="d-flex gap-2">
                  <StyledProfile src={Profile} alt="" />
                  <div>
                    <Name>Asnaf </Name>
                    <Email>Asdsafsf@gmail.com</Email>
                    <Role>Teacher</Role>
                  </div>
                </div>
              </Col>
              <Col>
                <Subject>Hindi</Subject>
              </Col>

              <Col>
                <div className="d-flex gap-5">
                  <div>
                    <LeaveType>
                      <StyledSpan
                        style={{ background: "#BEFF7E" }}
                      ></StyledSpan>{" "}
                      Casual Leave
                    </LeaveType>
                    <LeaveType>
                      <StyledSpan
                        style={{ background: "#7FAEC8" }}
                      ></StyledSpan>
                      Sick Leave
                    </LeaveType>
                  </div>

                  <div>
                    <LeaveType>
                      <StyledSpan
                        style={{ background: "#774E98" }}
                      ></StyledSpan>
                      Maternity leave
                    </LeaveType>
                    <LeaveType>
                      <StyledSpan
                        style={{ background: "#48A27C" }}
                      ></StyledSpan>
                      Long Leave
                    </LeaveType>
                  </div>
                </div>
              </Col>
            </Row>
            <div>
              <Nav
                variant="underline"
                activeKey={activeKey}
                onSelect={handleSelect}
              >
                <Nav.Item>
                  <NavLink eventKey="link-1">Overview</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink eventKey="link-2">Leave History</NavLink>
                </Nav.Item>
              </Nav>

              {activeKey === "link-1" && (
                <div className="d-flex gap-3 flex-wrap">
                  <div>
                    <Row style={{ marginTop: "10px" }}>
                      <Col className="d-flex gap-2 flex-wrap">
                        <TotalDiv>
                          <TotalType>Total Attendance</TotalType>
                          <TotalNumber>10</TotalNumber>
                        </TotalDiv>
                        <TotalDiv>
                          <TotalType>Total Leave Taken</TotalType>
                          <TotalNumber>10</TotalNumber>
                        </TotalDiv>
                        <TotalDiv>
                          <TotalType>Balance Leave </TotalType>
                          <TotalNumber>10</TotalNumber>
                        </TotalDiv>
                      </Col>
                    </Row>
                    <Row style={{ marginTop: "10px" }}>
                      <Col>
                        <RequestedLeave></RequestedLeave>
                      </Col>
                    </Row>
                  </div>
                  <div>
                    <Card
                      style={{
                        marginTop: "-10px",
                        backgroundColor: "#ffffff80",
                      }}
                    >
                      <TableCardHeader>
                        <DateFeild
                          type="date"
                          value={selectedDate}
                          onChange={handleDateChange}
                        />
                        <CalenderText>Calendar</CalenderText>
                      </TableCardHeader>
                      <StyledTable>
                        <thead>
                          <TableHead>
                            <th style={{ paddingLeft: "20px" }}>Mon</th>
                            <th style={{ paddingLeft: "20px" }}>Tue</th>
                            <th style={{ paddingLeft: "20px" }}>Wed</th>
                            <th style={{ paddingLeft: "20px" }}>Thu</th>
                            <th style={{ paddingLeft: "20px" }}>Fri</th>
                            <th style={{ paddingLeft: "20px" }}>Sat</th>
                            <th style={{ paddingLeft: "20px" }}>Sun</th>
                          </TableHead>
                        </thead>
                        <tbody>
                          {calendar.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((day, index) => (
                                <td key={index} style={{ paddingLeft: "20px" }}>
                                  {day !== null && <Days>{day}</Days>}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </StyledTable>
                    </Card>
                  </div>
                </div>
              )}
              {activeKey === "link-2" && (
                <div>
                  <LeaveHistoryTable>
                    <THeadRow>
                      <Thead style={{ paddingLeft: "35px" }}>From Date </Thead>
                      <Thead>To Date</Thead>
                      <Thead>Leave Type</Thead>
                      <Thead>Reason </Thead>
                      <Thead style={{ paddingLeft: "25px" }}>Status </Thead>
                    </THeadRow>
                    <Tbody>
                      {currentRows.map((Datas) => (
                        <tr>
                          <Tdata style={{ paddingLeft: "35px" }}>
                            {Datas.FromDate}
                          </Tdata>
                          <Tdata>{Datas.ToDate}</Tdata>
                          <Tdata>
                            <LeaveTypeSpan
                              style={{
                                backgroundColor:
                                  Datas.LeaveType === "Sick Leave"
                                    ? "#EFF9FF"
                                    : Datas.LeaveType === "Casual Leave"
                                    ? "#F1FFD5"
                                    : Datas.LeaveType === "Maternity Leave"
                                    ? "#F7EEFF"
                                    : Datas.LeaveType === "Long Leave"
                                    ? "#E5FFF4"
                                    : "black",
                                color:
                                  Datas.LeaveType === "Sick Leave"
                                    ? "#0094FF"
                                    : Datas.LeaveType === "Casual Leave"
                                    ? "#659700"
                                    : Datas.LeaveType === "Maternity Leave"
                                    ? "#5200FF"
                                    : Datas.LeaveType === "Long Leave"
                                    ? "#00B066"
                                    : "black",
                              }}
                            >
                              {Datas.LeaveType}
                            </LeaveTypeSpan>
                          </Tdata>
                          <Tdata>{Datas.Reason}</Tdata>

                          <Tdata style={{ paddingLeft: "25px" }}>
                            <StyledStatus
                              style={{
                                backgroundColor:
                                  Datas.Status === "Requested"
                                    ? "#06C045"
                                    : Datas.Status === "Accepted"
                                    ? "#7098FF"
                                    : Datas.Status === "Declined"
                                    ? "#FF7070"
                                    : Datas.Status === "Pending"
                                    ? "#FFA370"
                                    : "black",
                              }}
                            >
                              {Datas.Status}
                            </StyledStatus>
                          </Tdata>
                        </tr>
                      ))}
                    </Tbody>

                    <tfoot>
                      <tr>
                        <td colSpan="8">
                          <PaginationDiv>
                            <div>
                              <PageSize>Page Size</PageSize>
                              <select
                                value={rowsPerPage}
                                onChange={(e) =>
                                  setRowsPerPage(Number(e.target.value))
                                }
                              >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                              </select>
                            </div>
                            <Pagination>
                              <FaAngleLeft
                                onClick={() =>
                                  handlePaginationClick(currentPage - 1)
                                }
                                disabled={currentPage === 1}
                              />
                              <TextPagination>
                                Page {currentPage} of {totalPages}
                              </TextPagination>
                              <FaAngleRight
                                onClick={() =>
                                  handlePaginationClick(currentPage + 1)
                                }
                                disabled={currentPage === totalPages}
                              />
                            </Pagination>
                          </PaginationDiv>
                        </td>
                      </tr>
                    </tfoot>
                  </LeaveHistoryTable>
                </div>
              )}
            </div>
          </Card.Body>
        </Cards>
      </Content>
    </MainBackground>
  );
}

export default Leaves;
