
import {
  AddButton,
  Atag,
  BackIcon,
  CardHeading,
  FIcon,
  FilterButon,
  Heading,
  MainBackground,
  MainCardBody,
  MarkCard,
  MessageCard,
  MessageCardBody,
  MessageCardHead,
  MessageDate,
  MessageText,
  MessageTitle,

  SubmitButton,
} from "./Messages.Styles";
import MessageProfile from "../../assets/MessageProfile.png";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from "react-bootstrap";
function Messages() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <MainBackground>
      <MarkCard>
        <Atag href="/dashboard">
          <BackIcon />
        </Atag>
        <Heading>Message </Heading>
        <FilterButon>
          <FIcon /> filter by
        </FilterButon>
        <AddButton onClick={handleShow}>Add Message </AddButton>
        <MainCardBody>
          <MessageCard>
            <MessageCardHead>
              {" "}
              <img src={MessageProfile} alt="" />{" "}
              <CardHeading> Sam Peter</CardHeading>
              <MessageDate>13 Feb 2024</MessageDate>
            </MessageCardHead>
            <MessageCardBody>
              <MessageTitle>Parents Meeting</MessageTitle>
              <MessageText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore . Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore
              </MessageText>
            </MessageCardBody>
          </MessageCard>

          <MessageCard>
            <MessageCardHead>
              {" "}
              <img src={MessageProfile} alt="" />{" "}
              <CardHeading> Sam Peter</CardHeading>
              <MessageDate>13 Feb 2024</MessageDate>
            </MessageCardHead>
            <MessageCardBody>
              <MessageTitle>Parents Meeting</MessageTitle>
              <MessageText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore . Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore
              </MessageText>
            </MessageCardBody>
          </MessageCard>

          <MessageCard>
            <MessageCardHead>
              {" "}
              <img src={MessageProfile} alt="" />{" "}
              <CardHeading> Sam Peter</CardHeading>
              <MessageDate>13 Feb 2024</MessageDate>
            </MessageCardHead>
            <MessageCardBody>
              <MessageTitle>Parents Meeting</MessageTitle>
              <MessageText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore . Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore
              </MessageText>
            </MessageCardBody>
          </MessageCard>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Message</Modal.Title>
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
      <Form.Group>
      <Form.Check 
            type="checkbox"
            label="Sent Sms Also"
          />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex align-items-center justify-content-center">
          <SubmitButton variant="primary" onClick={handleClose}>
            Save Changes
          </SubmitButton>
        </Modal.Footer>
      </Modal>
        </MainCardBody>
      </MarkCard>
    </MainBackground>
  );
}

export default Messages;
