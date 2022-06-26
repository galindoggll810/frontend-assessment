import { Button, Table } from 'react-bootstrap'
import React, { useContext } from 'react'
import { TodoContext } from '../../../core/context/TodoContext'

const TodoList = () => {
  const { items, handleRefreshTodos, handleMarkAsComplete } = useContext(TodoContext);

  return (
    <>
      <h1>
        Showing {items?.length} Item(s){' '}
        <Button variant="primary" className="pull-right" onClick={handleRefreshTodos}>
          Refresh
        </Button>
      </h1>

      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Id</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {items?.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.description}</td>
            <td>
              <Button variant={item.isCompleted ? "success" : "warning"} size="sm"
                      onClick={() => handleMarkAsComplete(item)}
                      disabled={item.isCompleted}>
                {item.isCompleted ? "Completed" : "Mark as Complete"}
              </Button>
            </td>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  )
}

export default TodoList
