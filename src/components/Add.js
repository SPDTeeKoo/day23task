import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';

function Add() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name;
    let b = age;

    Users.push({ id: uniqueId, Name: a, Age: b });

    history('/');
  };

  return (
    <div>
      <Form className="d-grid gap-2" style={{ margin: '15rem' }}>
        <FormGroup className="mb-3" controlId="formName">
          <FormControl
            type="text"
            placeholder="Enter Name"
            required
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="mb-3" controlId="formAge">
          <FormControl
            type="text"
            placeholder="Enter Age"
            required
            onChange={(e) => setAge(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button onClick={(e) => handleSubmit(e)} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Add;
