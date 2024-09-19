import React, { useState } from "react";
import {
  Atag,
  BackIcon,
  BarChartdIv,
  CardBody,
  CardHeader,
  Cards,
  ChartAttendance,
  ChartCard,
  ChartFoot,
  ChartFootAttendence,
  ChartFootCol,
  ChartFootLeaves,
  ChartFootText,
  ChartHeading,
  Chartleave,
  ChartsDiv,
  Content,
  DateFeild,
  DoughnutChart,
  Heading,
  MainBackground,
  PageSize,
  Pagination,
  PaginationDiv,
  SIcon,
  Search,
  SearchInput,
  StyledSpan,
  StyledTable,
  SubmitButton,
  THeadRow,
  Tbody,
  Tdata,
  TextPagination,
  Thead,
} from "./AttendanceStyles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js/auto";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function Attendance() {
  const attendanceData = [
    {
      RollNo: 101,
      AdmissionNo: "A101",
      StudentName: "John Doe",
      MorningStatus: "Present",
      AFNoonstatus: "Absent",
    },
    {
      RollNo: 102,
      AdmissionNo: "A102",
      StudentName: "Jane Smith",
      MorningStatus: "Absent",
      AFNoonstatus: "Present",
    },
    {
      RollNo: 103,
      AdmissionNo: "A103",
      StudentName: "Alice Johnson",
      MorningStatus: "Present",
      AFNoonstatus: "Present",
    },
    {
      RollNo: 104,
      AdmissionNo: "A104",
      StudentName: "Bob Brown",
      MorningStatus: "Absent",
      AFNoonstatus: "Absent",
    },
    {
      RollNo: 105,
      AdmissionNo: "A105",
      StudentName: "Emily Davis",
      MorningStatus: "Present",
      AFNoonstatus: "Absent",
    },
    {
      RollNo: 106,
      AdmissionNo: "A106",
      StudentName: "Michael Wilson",
      MorningStatus: "Absent",
      AFNoonstatus: "Present",
    },
    {
      RollNo: 107,
      AdmissionNo: "A107",
      StudentName: "Sophia Lee",
      MorningStatus: "Present",
      AFNoonstatus: "Absent",
    },
    {
      RollNo: 108,
      AdmissionNo: "A108",
      StudentName: "David Martinez",
      MorningStatus: "Absent",
      AFNoonstatus: "Present",
    },
  ];
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    datasets: [
      {
        labels: ["Attendance", "leave"],

        data: [88, 12],
        backgroundColor: ["#B0CBFF", "#FFB0B0"],
      },
    ],
  };
  const Bardata = [
    {
      name: "Mon",
      uv: 10,
      pv: 50,
      amt: 10,
    },
    {
      name: "Tue",
      uv: 30,
      pv: 20,
      amt: 50,
    },
    {
      name: "Wed",
      uv: 10,
      pv: 20,
      amt: 50,
    },
    {
      name: "Thu",
      uv: 50,
      pv: 10,
      amt: 50,
    },
    {
      name: "Fri",
      uv: 20,
      pv: 10,
      amt: 50,
    },
    {
      name: "Sat",
      uv: 10,
      pv: 20,
      amt: 50,
    },
  ];

  const [date, setDate] = useState(new Date().toISOString().substr(0, 10));

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * rowsPerPage;

  // Calculate index of the first row
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Slice the current rows to display
  const currentRows = attendanceData.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total number of pages
  const totalPages = Math.ceil(attendanceData.length / rowsPerPage);

  // Function to handle pagination button clicks
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
            <Heading>Attendance</Heading>
            <Search>
              <SearchInput
                type="text"
                placeholder="Search Student"
                className="me-2"
                aria-label="Search"
              />

              <SIcon />
            </Search>
            <DateFeild
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />
          </CardHeader>
          <CardBody>
            <StyledTable>
              <THeadRow>
                <th style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                  <input type="checkbox" style={{ width: "20px" }} />
                </th>
                <Thead>Roll No</Thead>
                <Thead>Admission No</Thead>
                <Thead>Student Name</Thead>
                <Thead>Morning Status</Thead>
                <Thead>AF-Noon Status</Thead>
              </THeadRow>
              <Tbody>
                {currentRows.map((Datas) => (
                  <tr>
                    <td style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                      <input type="checkbox" style={{ width: "20px" }} />
                    </td>
                    <Tdata>{Datas.RollNo}</Tdata>
                    <Tdata>{Datas.AdmissionNo}</Tdata>
                    <Tdata>{Datas.StudentName}</Tdata>
                    <Tdata>
                      <StyledSpan
                        style={{
                          color:
                            Datas.MorningStatus === "Present"
                              ? "#0057FF"
                              : Datas.MorningStatus === "Absent"
                              ? "#FF0000"
                              : "black",
                          backgroundColor:
                            Datas.MorningStatus === "Present"
                              ? "#C6DDFF"
                              : Datas.MorningStatus === "Absent"
                              ? "#FFF2F2"
                              : "black",
                        }}
                      >
                        {Datas.MorningStatus}
                      </StyledSpan>
                    </Tdata>
                    <Tdata>
                      <StyledSpan
                        style={{
                          color:
                            Datas.AFNoonstatus === "Present"
                              ? "#0057FF"
                              : Datas.AFNoonstatus === "Absent"
                              ? "#FF0000"
                              : "black",
                          backgroundColor:
                            Datas.AFNoonstatus === "Present"
                              ? "#C6DDFF"
                              : Datas.AFNoonstatus === "Absent"
                              ? "#FFF2F2"
                              : "black",
                        }}
                      >
                        {Datas.AFNoonstatus}
                      </StyledSpan>
                    </Tdata>
                  </tr>
                ))}
              </Tbody>
              <tfoot>
                <tr>
                  <td colSpan="6">
                    <PaginationDiv>
                      <SubmitButton>Submit</SubmitButton>
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
                          onClick={() => handlePaginationClick(currentPage - 1)}
                          disabled={currentPage === 1}
                        />
                        <TextPagination>
                          Page {currentPage} of {totalPages}
                        </TextPagination>
                        <FaAngleRight
                          onClick={() => handlePaginationClick(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        />
                      </Pagination>
                    </PaginationDiv>
                  </td>
                </tr>
              </tfoot>
            </StyledTable>

            <ChartsDiv>
              <ChartCard>
                <ChartHeading>Today’s Attendance</ChartHeading>
                <DoughnutChart>
                  <Chartleave>12% Leave</Chartleave>
                  <Doughnut data={data} />
                  <ChartAttendance>88% Attended</ChartAttendance>
                </DoughnutChart>
                <ChartFoot>
                  <ChartFootCol>
                    <ChartFootText>Present Students</ChartFootText>
                    <ChartFootAttendence>60</ChartFootAttendence>
                  </ChartFootCol>
                  <ChartFootCol>
                    <ChartFootText>Absent Student</ChartFootText>
                    <ChartFootLeaves>7</ChartFootLeaves>
                  </ChartFootCol>
                </ChartFoot>
              </ChartCard>

              <ChartCard>
                <ChartHeading>Weekly Attendance Report</ChartHeading>
                <BarChartdIv>
                  <ResponsiveContainer width="100%" height="80%">
                    <BarChart
                      data={Bardata}
                      margin={{
                        top: 25,
                        right: 15,
                        left: 2,
                        bottom: 25,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="pv" stackId="a" fill="#FFB0B0" />
                      <Bar dataKey="uv" stackId="a" fill="#B0CBFF" />
                    </BarChart>
                  </ResponsiveContainer>
                </BarChartdIv>
                <ChartFoot>
                  <ChartFootCol>
                    <ChartFootText>Present Students</ChartFootText>
                    <ChartFootAttendence>60</ChartFootAttendence>
                  </ChartFootCol>
                  <ChartFootCol>
                    <ChartFootText>Absent Student</ChartFootText>
                    <ChartFootLeaves>7</ChartFootLeaves>
                  </ChartFootCol>
                </ChartFoot>
              </ChartCard>
            </ChartsDiv>
          </CardBody>
        </Cards>
      </Content>
    </MainBackground>
  );
}

export default Attendance;
