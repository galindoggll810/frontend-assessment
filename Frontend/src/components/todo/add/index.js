import React, { useContext } from 'react'
import { Alert, Container, Form, Button, Stack, Row, Col } from 'react-bootstrap'
import { TodoContext } from '../../../core/context/TodoContext'

const TodoAdd = () => {
  const { description, handleAddTodo, handleClear, handleDescriptionChange, error } = useContext(TodoContext);

  return (
    <Container>
      <h1>Add Item</h1>
      <Alert variant="danger" show={!!error} dismissible>
        {error}
      </Alert>
      <Form.Group as={Row} className="mb-3" controlId="formAddTodoItem">
        <Form.Label column sm="2">
          Description
        </Form.Label>
        <Col md="6">
          <Form.Control
            type="text"
            placeholder="Enter description..."
            value={description}
            onChange={handleDescriptionChange}
            required
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 offset-md-2" controlId="formAddTodoItem">
        <Stack direction="horizontal" gap={2}>
          <Button variant="primary" onClick={handleAddTodo}>
            Add Item
          </Button>
          <Button variant="secondary" onClick={handleClear}>
            Clear
          </Button>
        </Stack>
      </Form.Group>
    </Container>
  )
}

export default TodoAdd
