import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://fancy-pear-pangolin.cyclic.app/api/auth/login', {
        usernameoremail: usernameOrEmail,
        password,
      });

      // Handle success response
      console.log(response.data);
      if (response.data.status === "success") {
        alert("login Successfully");
        navigate("/");
      } else {
        console.log("login failed"); }
      
    } catch (error) {
      // Handle error response
      console.log(error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="usernameOrEmail">
        <Form.Label>Username or Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username or email"
          value={usernameOrEmail}
          onChange={(e) => setUsernameOrEmail(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
  );
};

export default Login;