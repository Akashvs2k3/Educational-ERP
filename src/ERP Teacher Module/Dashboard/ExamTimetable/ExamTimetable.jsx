import React, { useState } from "react";
import {
  AddTdata,
  Atag,
  BackIcon,
  CardBody,
  MainBackground,
  PageSize,
  Pagination,
  PaginationDiv,
  ProgresReport,
  ProgresReportHead,
  ReportHeading,
  SIcon,
  Search,
  SearchInput,
  SelectExam,
  StyledTable,
  THeadRow,
  TableHeadear,
  Tbody,
  Tdata,
  TermButton,
  TermButtonsDiv,
  TextPagination,
  Thead,
  Trow,
} from "./ExamTimetableStyles";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function ExamTimetable() {
  const ExamsTimeTables = [
    {
      Subject: "Mathematics",
      Time: "9:00 AM",
      Hours: 2,
      Date: "2024-03-14",
    },
    {
      Subject: "English",
      Time: "10:30 AM",
      Hours: 1.5,
      Date: "2024-03-14",
    },
    {
      Subject: "Science",
      Time: "1:00 PM",
      Hours: 2,
      Date: "2024-03-14",
    },
    {
      Subject: "History",
      Time: "3:00 PM",
      Hours: 1.5,
      Date: "2024-03-14",
    },
    {
      Subject: "Geography",
      Time: "9:00 AM",
      Hours: 2,
      Date: "2024-03-15",
    },
    {
      Subject: "Physics",
      Time: "10:30 AM",
      Hours: 1.5,
      Date: "2024-03-15",
    },
    {
      Subject: "Chemistry",
      Time: "1:00 PM",
      Hours: 2,
      Date: "2024-03-15",
    },
    {
      Subject: "Biology",
      Time: "3:00 PM",
      Hours: 1.5,
      Date: "2024-03-15",
    },
  ];

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;

  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  const currentRows = ExamsTimeTables.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(ExamsTimeTables.length / rowsPerPage);

  const handlePaginationClick = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <MainBackground>
      <ProgresReport>
        <ProgresReportHead>
          <Atag href="/dashboard">
            <BackIcon />
          </Atag>
          <ReportHeading>Examination Time Table</ReportHeading>
          <TermButtonsDiv>
            <TermButton>Term 1</TermButton>
            <TermButton> Term 2</TermButton>
          </TermButtonsDiv>
          <SelectExam id="Exams" name="Exams">
            <option value="SA-1">Select Exam </option>
            <option value="SA-1">P 1 </option>
          </SelectExam>
        </ProgresReportHead>
        <CardBody>
          <div>
            <Search>
              <SearchInput
                type="text"
                placeholder="Search Student"
                className="me-2"
                aria-label="Search"
              />
              <SIcon />
            </Search>
          </div>

          <StyledTable>
            <TableHeadear>
              <THeadRow>
                <Thead
                  style={{
                    textAlign: "left",
                    paddingLeft: "25px",
                  }}
                >
                  Subject
                </Thead>
                <Thead style={{ textAlign: "left" }}>Time</Thead>
                <Thead>Hours</Thead>
                <Thead> Date</Thead>
              </THeadRow>
            </TableHeadear>

            <Tbody>
              <Trow>
                {" "}
                <AddTdata
                  colSpan="4"
                >
                 <IoMdAdd/> Add new exam{" "}
                </AddTdata>
              </Trow>
              {currentRows.map((Datas) => (
                <Trow>
                  <Tdata style={{ textAlign: "left", paddingLeft: "25px" }}>
                    {Datas.Subject}
                  </Tdata>
                  <Tdata style={{ textAlign: "left" }}>{Datas.Time}</Tdata>
                  <Tdata>{Datas.Hours}</Tdata>
                  <Tdata>{Datas.Date}</Tdata>
                </Trow>
              ))}
            </Tbody>

            <tfoot>
              <tr>
                <td colSpan="4">
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
        </CardBody>
      </ProgresReport>
    </MainBackground>
  );
}

export default ExamTimetable;
