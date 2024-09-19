import React, { useState } from "react";
import {
  ActionButton,
  Atag,
  BackIcon,
  ButtonsDiv,
  ClearButton,
  EnteringMark,
  ExamSelectBtn,
  Heading,
  IandEMarks,
  MainBackground,
  MarkCard,
  MarkTitle,
  MarksDiv,
  MarksubTitle,
  PageSize,
  Pagination,
  PaginationDiv,
  RadioInput,
  RadioInput1,
  RowDiv,
  SaveButton,
  SelectExams,
  StyledDiv,
  StyledRow,
  StyledTable,
  SubDiv,
  SubTitle,
  THeadRow,
  Tbody,
  Tdata,
  TdataBtn,
  TextPagination,
  Thead,
  Title,
  WandIMark,
} from "./HolisticReportStyles";
import { Col, Row } from "react-bootstrap";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function HolisticReport() {
  const markData = [
    {
      RollNo: 101,
      AdmissionNo: "A101",
      StudentName: "John Doe",
    },
    {
      RollNo: 102,
      AdmissionNo: "A102",
      StudentName: "Jane Smith",
    },
    {
      RollNo: 103,
      AdmissionNo: "A103",
      StudentName: "Alice Johnson",
    },
    {
      RollNo: 104,
      AdmissionNo: "A104",
      StudentName: "Bob Brown",
    },
    {
      RollNo: 105,
      AdmissionNo: "A105",
      StudentName: "Emily Davis",
    },
    {
      RollNo: 106,
      AdmissionNo: "A106",
      StudentName: "Michael Wilson",
    },
    {
      RollNo: 107,
      AdmissionNo: "A107",
      StudentName: "Sophia Lee",
    },
    {
      RollNo: 108,
      AdmissionNo: "A108",
      StudentName: "David Martinez",
    },
  ];
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRow = currentPage * rowsPerPage;

  // Calculate index of the first row
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Slice the current rows to display
  const currentRows = markData.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total number of pages
  const totalPages = Math.ceil(markData.length / rowsPerPage);

  // Function to handle pagination button clicks
  const handlePaginationClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <MainBackground>
      <MarkCard>
        <Atag href="/dashboard">
          <BackIcon />
        </Atag>
        <Heading>Mark Entry </Heading>
        <ActionButton>Actions</ActionButton>
        <div>
          <StyledRow>
            <Col>
              {" "}
              <Title>Class</Title>
              <SubTitle>Class</SubTitle>
            </Col>
            <Col>
              {" "}
              <Title>Division</Title>
              <SubTitle>Division</SubTitle>
            </Col>
            <Col>
              {" "}
              <Title>Teacher Name</Title>
              <SubTitle>Teacher Name</SubTitle>
            </Col>
            <Col>
              {" "}
              <Title>Subject Name</Title>
              <SubTitle>Subject Name </SubTitle>
            </Col>
          </StyledRow>
          <RowDiv>
            <Col>
              <Title>Select Exams Category</Title>
              <ButtonsDiv>
                <ExamSelectBtn>Scholastic</ExamSelectBtn>
                <ExamSelectBtn>Co-Scholastic</ExamSelectBtn>
                <ExamSelectBtn>Class Test</ExamSelectBtn>
                <ExamSelectBtn>Others</ExamSelectBtn>
              </ButtonsDiv>
            </Col>
            <Col>
              <Row>
                <Col>
                  <Title>Select Term </Title>
                  <SubDiv>
                    <input type="radio" id="Term1" value="Term1" name="term" />
                    <RadioInput1 for="html">Term 1</RadioInput1>
                    <RadioInput
                      type="radio"
                      id="Term2"
                      value="Term2"
                      name="term"
                    />
                    <RadioInput1>Term 2</RadioInput1>
                  </SubDiv>
                </Col>
                <Col>
                  {" "}
                  <Title>Select Exams</Title>
                  <SubTitle>
                    {" "}
                    <SelectExams id="Exams" name="Exams">
                      <option value="SA-1">SA-1</option>
                    </SelectExams>
                  </SubTitle>
                </Col>
              </Row>
            </Col>
          </RowDiv>
          <RowDiv>
            <Col>
              <MarkTitle>Written Exam</MarkTitle>
              <MarksDiv>
                <MarksubTitle>Total Mark</MarksubTitle>
                <IandEMarks>100</IandEMarks>
              </MarksDiv>
            </Col>
            <Col>
              <MarkTitle>Written Exam</MarkTitle>
              <MarksDiv>
                <MarksubTitle>Total Mark</MarksubTitle>
                <IandEMarks>100</IandEMarks>
              </MarksDiv>
            </Col>
            <Col></Col>
            <Col></Col>
          </RowDiv>
        </div>

        <div>
          <StyledTable>
            <THeadRow>
              <th style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                <input type="checkbox" style={{ width: "20px" }} />
              </th>
              <Thead>Roll No</Thead>
              <Thead>Admission No</Thead>
              <Thead>Student Name</Thead>
              <Thead>
                Written Mark <WandIMark type="number" placeholder="100" />
              </Thead>
              <Thead>
                Internal Mark <WandIMark type="number" placeholder="20" />
              </Thead>
            </THeadRow>
            <Tbody>
              {currentRows.map((data) => (
                <tr>
                  <td style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                    <input type="checkbox" style={{ width: "20px" }} />
                  </td>
                  <Tdata>{data.RollNo}</Tdata>
                  <Tdata>{data.AdmissionNo}</Tdata>
                  <Tdata>{data.StudentName}</Tdata>

                  <Tdata>
                    <EnteringMark type="number" />
                  </Tdata>
                  <Tdata>
                    <EnteringMark type="number" />
                  </Tdata>
                </tr>
              ))}
            </Tbody>
            <tfoot>
              <tr>
                <TdataBtn colSpan="4">
                  {" "}
                  <ClearButton type="button">Clear</ClearButton>
                  <SaveButton type="button">Save</SaveButton>
                </TdataBtn>
                <td colSpan="2">
                  <PaginationDiv>
                    <div>
                      <PageSize>Page Size</PageSize>
                      <select
                        value={rowsPerPage}
                        onChange={(e) => setRowsPerPage(Number(e.target.value))}
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
        </div>
        <StyledDiv></StyledDiv>
      </MarkCard>
    </MainBackground>
  );
}

export default HolisticReport;
