import React, { useState } from "react";
import {
  Atag,
  BackIcon,
  CardBody,
  CardHeader,
  Cards,
  ClassP,
  Content,
  Heading,
  IconButton,
  MainBackground,
  MessageIcon,
  PageSize,
  Pagination,
  PaginationDiv,
  SIcon,
  Search,
  SearchInput,
  SelectClass,
  StyledSpan,
  StyledTable,
  THeadRow,
  Tbody,
  Tdata,
  TextPagination,
  Thead,
} from "./PromotionStyles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Promotion() {
  const attendanceData = [
    {
      RollNo: 101,
      AdmissionNo: "A101",
      StudentName: "John Doe",
      Status: "Transfer",
    },
    {
      RollNo: 102,
      AdmissionNo: "A102",
      StudentName: "Jane Smith",
      Status: "Transfer",
    },
    {
      RollNo: 103,
      AdmissionNo: "A103",
      StudentName: "Alice Johnson",
      Status: "Transfer",
    },
    {
      RollNo: 104,
      AdmissionNo: "A104",
      StudentName: "Bob Brown",
      Status: "Transfer",
    },
    {
      RollNo: 105,
      AdmissionNo: "A105",
      StudentName: "Emily Davis",
      Status: "Transfer",
    },
    {
      RollNo: 106,
      AdmissionNo: "A106",
      StudentName: "Michael Wilson",
      Status: "Transfer",
    },
    {
      RollNo: 107,
      AdmissionNo: "A107",
      StudentName: "Sophia Lee",
      Status: "Transfer",
    },
    {
      RollNo: 108,
      AdmissionNo: "A108",
      StudentName: "David Martinez",
      Status: "Transfer",
    },
  ];

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
            <Heading>Yearly Promotion</Heading>
            <Search>
              <SearchInput
                type="text"
                placeholder="Search Student"
                className="me-2"
                aria-label="Search"
              />

              <SIcon />
            </Search>
            <ClassP>
              Class: <span style={{ color: "#000000" }}> 7A </span>
            </ClassP>
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
                <Thead>Status</Thead>
                <Thead>Transfer To</Thead>
                <Thead>Comments</Thead>
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
                            Datas.Status === "Transfer"
                              ? "#0669FF"
                              : Datas.Status === "Absent"
                              ? "#FF0000"
                              : "black",
                          backgroundColor:
                            Datas.Status === "Transfer"
                              ? "#E0E5FF"
                              : Datas.Status === "Absent"
                              ? "#FFF2F2"
                              : "black",
                        }}
                      >
                        {Datas.Status}
                      </StyledSpan>
                    </Tdata>
                    <Tdata>
                      <SelectClass id="Exams" name="Exams">
                        <option value="SA-1">7B </option>
                        <option value="SA-1">6A </option>
                      </SelectClass>
                    </Tdata>
                    <Tdata>
                      <IconButton>
                        <MessageIcon />
                      </IconButton>
                    </Tdata>
                  </tr>
                ))}
              </Tbody>
              <tfoot>
                <tr>
                  <td colSpan="7">
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
          </CardBody>
        </Cards>
      </Content>
    </MainBackground>
  );
}

export default Promotion;
