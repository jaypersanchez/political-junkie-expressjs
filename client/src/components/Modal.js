import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState, useEffect} from 'react'

const App = () => {
    return (
      <Modal show={true}>
        <Modal.Header>Hi</Modal.Header>
        <Modal.Body>asdfasdf</Modal.Body>
        <Modal.Footer>This is the footer</Modal.Footer>
      </Modal>
    );
  };

export default Modal