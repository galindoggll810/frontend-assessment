import './App.css'
import { Image, Alert, Container, Row, Col } from 'react-bootstrap'
import React from 'react'
import TodoList from './components/todo/list'
import TodoAdd from './components/todo/add'
import { TodoProvider } from './core/context/TodoContext'

const App = () => {
  return (
    <TodoProvider>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Image src="clearPointLogo.png" fluid rounded />
            </Col>
          </Row>
          <Row>
            <Col>
              <Alert variant="success">
                <Alert.Heading>Todo List App</Alert.Heading>
                Welcome to the ClearPoint frontend technical test. We like to keep things simple, yet clean so your
                task(s) are as follows:
                <br />
                <br />
                <ol className="list-left">
                  <li>Add the ability to add (POST) a Todo Item by calling the backend API</li>
                  <li>
                    Display (GET) all the current Todo Items in the below grid and display them in any order you wish
                  </li>
                  <li>
                    Bonus points for completing the 'Mark as completed' button code for allowing users to update and mark
                    a specific Todo Item as completed and for displaying any relevant validation errors/ messages from the
                    API in the UI
                  </li>
                  <li>Feel free to add unit tests and refactor the component(s) as best you see fit</li>
                </ol>
              </Alert>
            </Col>
          </Row>
          <Row>
            <Col><TodoAdd /></Col>
          </Row>
          <br />
          <Row>
            <Col><TodoList /></Col>
          </Row>
        </Container>
        <footer className="page-footer font-small teal pt-4">
          <div className="footer-copyright text-center py-3">
            © 2021 Copyright:
            <a href="https://clearpoint.digital" target="_blank" rel="noreferrer">
              clearpoint.digital
            </a>
          </div>
        </footer>
      </div>
    </TodoProvider>
  )
}

export default App
