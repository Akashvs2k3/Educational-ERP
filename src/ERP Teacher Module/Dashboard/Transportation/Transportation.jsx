import React, { useState } from "react";
import {
  Atag,
  BackIcon,
  CardBody,
  CardHeader,
  Cards,
  Content,
  FIcon,
  FilterButon,
  Heading,
  MainBackground,
  PageSize,
  Pagination,
  PaginationDiv,
  SIcon,
  Search,
  SearchInput,
  StyledTable,
  THeadRow,
  Tbody,
  Tdata,
  TextPagination,
  Thead,
} from "./TransportationStyles";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Transportation() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const TransportData = [
    {
      RollNo: "101",
      AdmissionNo: "A101",
      StudentName: "John Doe",
      Transportation: "Bus",
      Pickuppoint: "Main Street",
      Droppoint: "School",
      PickupTime: "7:00 AM",
    },
    {
      RollNo: "102",
      AdmissionNo: "A102",
      StudentName: "Jane Smith",
      Transportation: "Car",
      Pickuppoint: "Park Avenue",
      Droppoint: "School",
      PickupTime: "7:15 AM",
    },
    {
      RollNo: "103",
      AdmissionNo: "A103",
      StudentName: "Michael Johnson",
      Transportation: "Walking",
      Pickuppoint: "Meadow Lane",
      Droppoint: "School",
      PickupTime: "7:30 AM",
    },
    {
      RollNo: "104",
      AdmissionNo: "A104",
      StudentName: "Emily Brown",
      Transportation: "Bus",
      Pickuppoint: "Oak Street",
      Droppoint: "School",
      PickupTime: "7:00 AM",
    },
    {
      RollNo: "105",
      AdmissionNo: "A105",
      StudentName: "David Wilson",
      Transportation: "Bike",
      Pickuppoint: "Elm Avenue",
      Droppoint: "School",
      PickupTime: "7:45 AM",
    },
    {
      RollNo: "106",
      AdmissionNo: "A106",
      StudentName: "Sarah Martinez",
      Transportation: "Car",
      Pickuppoint: "Sunset Boulevard",
      Droppoint: "School",
      PickupTime: "7:15 AM",
    },
    {
      RollNo: "107",
      AdmissionNo: "A107",
      StudentName: "Daniel Anderson",
      Transportation: "Walking",
      Pickuppoint: "River Road",
      Droppoint: "School",
      PickupTime: "7:30 AM",
    },
    {
      RollNo: "108",
      AdmissionNo: "A108",
      StudentName: "Olivia Garcia",
      Transportation: "Bus",
      Pickuppoint: "Maple Street",
      Droppoint: "School",
      PickupTime: "7:00 AM",
    },
    {
      RollNo: "109",
      AdmissionNo: "A109",
      StudentName: "James Lee",
      Transportation: "Car",
      Pickuppoint: "Forest Lane",
      Droppoint: "School",
      PickupTime: "7:15 AM",
    },
    {
      RollNo: "110",
      AdmissionNo: "A110",
      StudentName: "Sophia Hernandez",
      Transportation: "Bike",
      Pickuppoint: "Mountain Avenue",
      Droppoint: "School",
      PickupTime: "7:45 AM",
    },
  ];
  const indexOfLastRow = currentPage * rowsPerPage;

  // Calculate index of the first row
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;

  // Slice the current rows to display
  const currentRows = TransportData.slice(indexOfFirstRow, indexOfLastRow);

  // Calculate total number of pages
  const totalPages = Math.ceil(TransportData.length / rowsPerPage);

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
            <Heading>Transportation</Heading>
            <Search>
              <SearchInput
                type="text"
                placeholder="Search Student"
                className="me-2"
                aria-label="Search"
              />

              <SIcon />
            </Search>

            <FilterButon>
              {" "}
              <FIcon /> filter by
            </FilterButon>
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
                <Thead>Transportation</Thead>
                <Thead>Pickup point</Thead>
                <Thead>Drop point</Thead>
                <Thead>Pickup Time</Thead>
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
                    <Tdata>{Datas.Transportation}</Tdata>
                    <Tdata>{Datas.Pickuppoint}</Tdata>
                    <Tdata>{Datas.Droppoint}</Tdata>
                    <Tdata>{Datas.PickupTime}</Tdata>
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
        </Cards>
      </Content>
    </MainBackground>
  );
}

export default Transportation;
