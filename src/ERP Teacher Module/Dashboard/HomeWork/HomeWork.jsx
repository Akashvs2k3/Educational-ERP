import React, { useState } from 'react'
import {
    AddButton,
    Atag,
    BackIcon,
    FIcon,
    CardBody,
    FilterButon,
    Heading,
    MainBackground,
    MarkCard,
    Search,
    SearchInput,
    SIcon,
    StyledTable,
    THeadRow,
    Thead,
    Tbody,
    Tdata,
    PaginationDiv,
    PageSize,
    Pagination,
    TextPagination,
    StyledSpan,
    SubmitButton,
    StyledLabel,
  } from "./HomeWorkStyles";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';

function HomeWork() {
  const HomeworkData = [
    {
        Date: "2024-03-13",
        HomeWork: "Math",
        Assigned: "John Doe",
        Subject: "Algebra",
        Description: "Solve equations",
        DueDate: "2024-03-20",
        Filename: "math_homework.pdf",
        Remark: "Active"
    },
    {
        Date: "2024-03-13",
        HomeWork: "Science",
        Assigned: "Jane Smith",
        Subject: "Biology",
        Description: "Study for quiz",
        DueDate: "2024-03-15",
        Filename: "biology_study_notes.docx",
        Remark: "Active"
    },
    {
        Date: "2024-03-14",
        HomeWork: "English",
        Assigned: "Emily Johnson",
        Subject: "Literature",
        Description: "Read 'To Kill a Mockingbird'",
        DueDate: "2024-03-17",
        Filename: "literature_reading_assignment.txt",
        Remark: "Complete"
    },
    {
        Date: "2024-03-14",
        HomeWork: "History",
        Assigned: "Michael Brown",
        Subject: "World History",
        Description: "Write essay on Industrial Revolution",
        DueDate: "2024-03-21",
        Filename: "history_essay.doc",
        Remark: "Complete"
    },
    {
        Date: "2024-03-15",
        HomeWork: "Physics",
        Assigned: "Sarah Williams",
        Subject: "Mechanics",
        Description: "Complete problem set on Newton's Laws",
        DueDate: "2024-03-18",
        Filename: "physics_problem_set.pdf",
        Remark: "Active"
    },
    {
        Date: "2024-03-15",
        HomeWork: "Computer Science",
        Assigned: "David Jones",
        Subject: "Programming",
        Description: "Debug code for sorting algorithm",
        DueDate: "2024-03-19",
        Filename: "sorting_algorithm_debugging.zip",
        Remark: "Active"
    },
    {
        Date: "2024-03-16",
        HomeWork: "Art",
        Assigned: "Emma Garcia",
        Subject: "Drawing",
        Description: "Sketch still life composition",
        DueDate: "2024-03-20",
        Filename: "drawing_sketch.jpg",
        Remark: "Complete"
    },
    {
        Date: "2024-03-16",
        HomeWork: "Physical Education",
        Assigned: "James Wilson",
        Subject: "Fitness",
        Description: "Complete running workout",
        DueDate: "2024-03-18",
        Filename: "drawing_sketch.jpg",
        Remark: "Active"
    },

];
const [rowsPerPage, setRowsPerPage] = useState(10);
const [currentPage, setCurrentPage] = useState(1);

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const indexOfLastRow = currentPage * rowsPerPage;

const indexOfFirstRow = indexOfLastRow - rowsPerPage;

const currentRows = HomeworkData.slice(indexOfFirstRow, indexOfLastRow);

const totalPages = Math.ceil(HomeworkData.length / rowsPerPage);

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
      <Heading>Homework</Heading>
      <FilterButon>
        <FIcon /> filter by
      </FilterButon>
      <AddButton onClick={handleShow}>Add Homework</AddButton>
      <CardBody>
        <Search>
          <SearchInput
            type="text"
            placeholder="Search Student"
            className="me-2"
            aria-label="Search"
          />
    
          <SIcon />
        </Search>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Homework</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Sender Name:" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Subject:" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" placeholder="Description:" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3 d-flex gap-3" controlId="exampleForm.ControlInput1">
        <div>
          <StyledLabel>File Upload:</StyledLabel>
          <Form.Control type="file" placeholder="file upload" /></div>
        <div>  <StyledLabel>Due Date:</StyledLabel><Form.Control type="date" placeholder="Due Date:" /></div>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center">
          <SubmitButton variant="primary" onClick={handleClose}>
            Save Changes
          </SubmitButton>
        </Modal.Footer>
      </Modal>
        <StyledTable>

          <THeadRow>
            <Thead>Date </Thead>
            <Thead>HomeWork</Thead>
            <Thead>Assigned</Thead>
            <Thead>Subject </Thead>
            <Thead> Description</Thead>
            <Thead> Due Date</Thead>
            <Thead> Filename</Thead>
            <Thead> Remark</Thead>
          </THeadRow>
          <Tbody>
                {currentRows.map((Datas) => (
                  <tr>
                    <Tdata>{Datas.Date}</Tdata>
                    <Tdata>{Datas.HomeWork}</Tdata>
                    <Tdata>{Datas.Assigned}</Tdata>
                    <Tdata>{Datas.Subject}</Tdata>
                    <Tdata>{Datas.Description}</Tdata>
                    <Tdata>{Datas.DueDate}</Tdata>
                    <Tdata>{Datas.Filename}</Tdata>


                    <Tdata>
                    <StyledSpan
                        style={{
                          color:
                            Datas.Remark === "Complete"
                              ? "#6100FF"
                              : Datas.Remark === "Active"
                              ? "#0047FF"
                              : "black",
                          backgroundColor:
                            Datas.Remark === "Complete"
                              ? "#E5D0FF"
                              : Datas.Remark === "Active"
                              ? "#D1DBFF"
                              : "black",
                        }}
                      >
                    {Datas.Remark}
                      </StyledSpan>
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
    </MarkCard>
    </MainBackground>
  )
}

export default HomeWork