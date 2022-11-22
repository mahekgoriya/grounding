import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditEmployee(props) {
  const [name, setName] = useState(props.name);
  const [role, setRole] = useState(props.role);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <Button variant="primary" onClick={handleShow}>Edit Details</Button>
      
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form id='editModal' onSubmit={(e)=>{e.preventDefault();console.log(props.id,name,role);props.updateEmployee(props.id,name,role)}}>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="fullName" placeholder="Enter Full Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="fullName"></label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" id="position" placeholder="Position" value={role} onChange={(e)=>{setRole(e.target.value)}}/>
                <label htmlFor="position"></label>
            </div>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
          <button className='btn btn-primary' form='editModal'>Update</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditEmployee;