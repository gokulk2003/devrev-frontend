import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [conformpassword, setConfirmPassword] = useState('');
  const [contact, setContact] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fancy-pear-pangolin.cyclic.app/api/auth/register', {
        username,
        email,
        newpassword,
        conformpassword,
        contact,
      });
      console.log(response.data);
           if (response.data.status === "success") {
        alert("Registered Successfully");
        navigate("/login");
      } else {
        console.log("email already exists"); }
      
    } catch (error) {
      // Handle error response
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="newpassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter new password"
          value={newpassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="conformpassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm password"
          value={conformpassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="contact">
        <Form.Label>Contact</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact number"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default Signup;