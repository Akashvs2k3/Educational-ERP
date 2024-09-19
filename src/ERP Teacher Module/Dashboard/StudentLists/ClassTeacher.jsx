import React, { useState } from "react";
import {
  ActionButon,
  Atag,
  BackIcon,
  CardHeader,
  Cards,
  Content,
  FIcon,
  FilterButon,
  Heading,
  ListCards,
  ListHeading,
  ListView,
  ListViewImg,
  ListViewItem,
  MainBackground,
  PageSize,
  Pagination,
  PaginationBtn,
  PaginationBtnGroup,
  PaginationDiv,
  ProfileImg,
  SIcon,
  Search,
  SearchInput,
  StyledTable,
  Tbody,
  Tdata,
  TextPagination,
  Thead,
  Trow,
  ViewCards,
  ViewDiv,
} from "./StudentListStyles";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profile from "../../assets/Profile.png";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import { Card } from "react-bootstrap";
import StudentsList from "./StudentsList";
const ITEMS_PER_PAGE = 10;

function ClassTeacher() {
  const [rowData, setRowData] = useState([
    {
      id: 1,
      "Roll No": 1,
      "Admission No": "ADM001",
      "Student Name": "John Doe",
      DOB: "2000-01-01",
      "Parents Name": "Jane Doe",
      Transportation: "Yes",
      "Contact No": "1234567890",
      "Fee Status": "Paid",
      House: "Red",
    },
    {
      id: 2,
      "Roll No": 2,
      "Admission No": "ADM002",
      "Student Name": "Jane Smith",
      DOB: "1999-05-15",
      "Parents Name": "Bob Smith",
      Transportation: "No",
      "Contact No": "9876543210",
      "Fee Status": "Pending",
      House: "Blue",
    },
    {
      id: 3,
      "Roll No": 3,
      "Admission No": "ADM003",
      "Student Name": "Alice Johnson",
      DOB: "2001-08-20",
      "Parents Name": "Tom Johnson",
      Transportation: "Yes",
      "Contact No": "5551234567",
      "Fee Status": "Paid",
      House: "Green",
    },
    {
      id: 4,
      "Roll No": 4,
      "Admission No": "ADM001",
      "Student Name": "John Doe",
      DOB: "2000-01-01",
      "Parents Name": "Jane Doe",
      Transportation: "Yes",
      "Contact No": "1234567890",
      "Fee Status": "Paid",
      House: "Red",
    },
    {
      id: 5,
      "Roll No": 5,
      "Admission No": "ADM002",
      "Student Name": "Jane Smith",
      DOB: "1999-05-15",
      "Parents Name": "Bob Smith",
      Transportation: "No",
      "Contact No": "9876543210",
      "Fee Status": "Pending",
      House: "Blue",
    },
    // Add more rows as needed
    {
      id: 6,
      "Roll No": 6,
      "Admission No": "ADM003",
      "Student Name": "Alice Johnson",
      DOB: "2001-08-20",
      "Parents Name": "Tom Johnson",
      Transportation: "Yes",
      "Contact No": "5551234567",
      "Fee Status": "Paid",
      House: "Green",
    },
    {
      id: 7,
      "Roll No": 7,
      "Admission No": "ADM001",
      "Student Name": "John Doe",
      DOB: "2000-01-01",
      "Parents Name": "Jane Doe",
      Transportation: "Yes",
      "Contact No": "1234567890",
      "Fee Status": "Paid",
      House: "Red",
    },
    {
      id: 8,
      "Roll No": 8,
      "Admission No": "ADM002",
      "Student Name": "Jane Smith",
      DOB: "1999-05-15",
      "Parents Name": "Bob Smith",
      Transportation: "No",
      "Contact No": "9876543210",
      "Fee Status": "Pending",
      House: "Blue",
    },
    // Add more rows as needed
    {
      id: 9,
      "Roll No": 9,
      "Admission No": "ADM003",
      "Student Name": "Alice Johnson",
      DOB: "2001-08-20",
      "Parents Name": "Tom Johnson",
      Transportation: "Yes",
      "Contact No": "5551234567",
      "Fee Status": "Paid",
      House: "Green",
    },
  ]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs, setColDefs] = useState([
    { field: "Roll No" },
    { field: "Admission No" },
    { field: "Student Name" },
    { field: "DOB" },
    { field: "Parents Name" },
    { field: "Transportation" },
    { field: "Contact No" },
    { field: "Fee Status" },
    { field: "House" },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSelectAll = (event) => {
    const checked = event.target.checked;
    setSelectAll(checked);
    if (checked) {
      const allRows = rowData.map((row, index) => index);
      setSelectedRows(allRows);
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (rowIndex) => {
    const selectedIndex = selectedRows.indexOf(rowIndex);
    let newSelected = [...selectedRows];

    if (selectedIndex === -1) {
      newSelected = [...selectedRows, rowIndex];
    } else {
      newSelected.splice(selectedIndex, 1);
    }

    setSelectedRows(newSelected);
    setSelectAll(newSelected.length === rowData.length);
  };
  const [selectedListData, setSelectedListData] = useState(null);

  const handleListClick = (row) => {
    setSelectedListData(row);
  };
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = rowData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [currentList, setCurrentList] = useState(1);

  // Calculate total number of pages
  const totalPages = Math.ceil(rowData.length / ITEMS_PER_PAGE);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, rowData.length);

  // Function to handle pagination button clicks
  const handlePaginationClick = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentList(newPage);
    }
  };
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (id) => {
    setSelectedRow(id === selectedRow ? null : id);
  };
  return (
    <MainBackground>
      {selectedRow ? (
        <>
          <ViewDiv>
            <ListCards>
              <ListHeading>Student Name</ListHeading>
              <Card.Body>
                <ListView>
                  {rowData.slice(startIndex, endIndex).map((row, index) => (
                    <ListViewItem
                      key={index}
                      onClick={() => handleListClick(row)}
                    >
                      <ListViewImg src={Profile} alt="" />
                      {row["Student Name"]}
                    </ListViewItem>
                  ))}
                </ListView>
              </Card.Body>
            </ListCards>
            <ViewCards style={{ float: "left", marginLeft: "15px" }}>
              <StudentsList
                selectedRow={selectedRow}
                selectedListData={selectedListData}
              />
              {/* <button onClick={close}>close</button> */}
            </ViewCards>
          </ViewDiv>
          <PaginationBtnGroup>
            <PaginationBtn
              onClick={() => handlePaginationClick(currentList - 1)}
            >
              <FaAngleLeft />
            </PaginationBtn>
            {[...Array(totalPages).keys()].map((pageNumber) => (
              <PaginationBtn
                key={pageNumber}
                onClick={() => handlePaginationClick(pageNumber + 1)}
                active={pageNumber + 1 === currentList}
              >
                {pageNumber + 1}
              </PaginationBtn>
            ))}
            <PaginationBtn
              onClick={() => handlePaginationClick(currentList + 1)}
            >
              <FaAngleRight />
            </PaginationBtn>
          </PaginationBtnGroup>
        </>
      ) : (
        <Content>
          <Cards>
            <CardHeader>  
              <Atag href="/dashboard">
              <BackIcon />
            </Atag>
              <Heading>Student List</Heading>
              <Search>
                <SearchInput
                  type="text"
                  placeholder="Search Student"
                  className="me-2"
                  aria-label="Search"
                />

                <SIcon />
              </Search>
              <ActionButon>Action</ActionButon>
              <FilterButon>
                {" "}
                <FIcon /> filter by
              </FilterButon>
            </CardHeader>
            <Card.Body>
              <StyledTable>
                <thead>
                  <tr>
                    <th
                      style={{
                        width: "12px",
                        paddingLeft: "25px",
                        paddingTop: "5px",
                      }}
                    >
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectAll}
                        style={{ width: "20px" }}
                      />
                    </th>
                    {colDefs.map((col, index) => (
                      <Thead key={index} style={{ width: col.width }}>
                        {col.field}
                      </Thead>
                    ))}
                    <th style={{ paddingRight: "25px" }}></th>
                  </tr>
                </thead>
                <Tbody>
                  {currentRows.map((row, rowIndex) => (
                    <Trow key={rowIndex} onClick={() => handleRowClick(row)}>
                      <td style={{ width: "12px", paddingLeft: "25px" }}>
                        <input
                          type="checkbox"
                          onChange={() =>
                            handleRowSelect(rowIndex + indexOfFirstRow)
                          }
                          checked={selectedRows.includes(
                            rowIndex + indexOfFirstRow
                          )}
                          style={{ width: "20px" }}
                        />
                      </td>
                      {colDefs.map((col, colIndex) => (
                        <Tdata key={colIndex}>{row[col.field]}</Tdata>
                      ))}
                      <td style={{ width: "20px", paddingRight: "25px" }}>
                        <button style={{ border: "none" }}>
                          <BsThreeDotsVertical />
                        </button>
                      </td>
                    </Trow>
                  ))}
                </Tbody>
                <tfoot>
                  <tr>
                    <td colSpan="11">
                      <PaginationDiv>
                        <div>
                          <PageSize>Page Size</PageSize>
                          <select
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                          >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                          </select>
                        </div>
                        <Pagination>
                          <FaAngleLeft
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                          />
                          <TextPagination>
                            Page{currentPage} of{" "}
                            {Math.ceil(rowData.length / rowsPerPage)}
                          </TextPagination>
                          <FaAngleRight
                            onClick={() => paginate(currentPage + 1)}
                            disabled={indexOfLastRow >= rowData.length}
                          />
                        </Pagination>
                      </PaginationDiv>
                    </td>
                  </tr>
                </tfoot>
              </StyledTable>
            </Card.Body>
          </Cards>
        </Content>
      )}
    </MainBackground>
  );
}

export default ClassTeacher;
