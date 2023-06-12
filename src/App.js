// import logo from './logo.svg';
import './App.css';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';


function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    const id = todos.length + 1;
    setTodos((next) => [
      ...next,{
        id: id,
        task: input, 
        complete: false
      }
    ]);

    setInput("");
  }

  const handleComplete = (id) =>{
    let list = todos.map((todo) => {
        let item = {};
        // if (!todo.complete) {

        // } else {
          
        // }

        if(todo.id == id){
          item = {...todo, complete: !todo.complete }
        }else{
          item = {...todo}
        }

        return item;
    });

    setTodos(list);
  }

  const handleClear = () => {
    setTodos([]);
  }

  const handleDelete = (e, id) => {
    e.preventDefault();
    const removeItem = todos.filter((todo) => {
      // return the rest of the todos that don't match the item we are deleting
      return todo.id !== id;
    });
    setTodos(removeItem);

  }

 

  return (
    <Container className='py-5 w-100'>
  
    <h4 className='text-center mb-5'>Todo List</h4>

    <Form className='ml-5'>
      <Row>
        <Col md={8}>
          <Form.Group className='mb-3' controlId='todo-input'>
              <Form.Control type='text' placeholder='Add new...' value={input} onInput={(e) => setInput(e.target.value)}/> 
          </Form.Group>
        </Col>

        <Col md={4}>
          <Button className='px-5' variant='primary' onClick={() => handleClick()}>Add</Button>
        </Col>
          
      </Row>

      <Button className='px-4' variant='secondary' onClick={() => handleClear()} >Clear</Button>

      <div className='my-4'>
        <ul style={{listStyleType: "none", padding:0}}>
          {todos.map((todo) =>{
            return(
              <li >
                  <div className='d-flex'><Form.Check className='py-1' onClick={() => handleComplete(todo.id)}/> <p className='mx-4' style={{listStyle:"none", textDecoration: todo.complete && "line-through"}}>{todo.task}</p> <button className='btn text-danger' onClick={(e) => handleDelete(e, todo.id)}>Delete</button> </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Form>

    
    

    </Container>
  );
}

export default App;
