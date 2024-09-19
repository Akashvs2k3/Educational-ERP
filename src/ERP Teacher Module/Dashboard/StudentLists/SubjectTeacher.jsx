import React from 'react'
import {
    ActionButon,
  CardHeader,
  Cards,
  Content,
  FIcon,
  FilterButon,
  Heading,
  SIcon,
  Search,
  SearchInput,
  Top,
} from "./StudentListStyles";
import { Card } from "react-bootstrap";

function SubjectTeacher() {
  return (
    <Content>
    <Cards>
      <CardHeader>
        <Heading>Student List</Heading>
        <FilterButon> <FIcon/>    filter by</FilterButon>
      </CardHeader>
      <Card.Body>
        <Top>
          <Search>
            <SearchInput
              type="search"
              placeholder="Search Student"
              className="me-2"
              aria-label="Search"
            />

            <SIcon />
          </Search>
          <ActionButon>Action</ActionButon>
        </Top>

        
      </Card.Body>
    </Cards>
  </Content>
  )
}

export default SubjectTeacher