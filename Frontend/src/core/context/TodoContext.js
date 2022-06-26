import React, { createContext, useEffect, useState } from 'react'
import { fetchAllTodos, addTodo, updateTodo } from '../../services/TodoService'

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
  const [ items, setItems ] = useState();
  const [ description, setDescription ] = useState('');
  const [ error, setError ] = useState('');

  useEffect(() => {
    if (!items) {
      initTodos();
    }
  }, [items]);

  const initTodos = () => {
    fetchAllTodos()
      .then((res) => {
        setItems(res);
      })
  };

  const handleAddTodo = () => {
    const data = {description, isCompleted: false};
    addTodo(data)
      .then((res) => {
        setItems((prevState) => {
          const newState = prevState.slice();
          newState.push(res);
          return newState;
        });
        setError('');
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => handleClear())
  };

  const handleClear = () => {
    setDescription('');
  };

  const handleDescriptionChange = (e) => {
    const {value} = e.target;
    setDescription(value);
  };

  const handleMarkAsComplete = (item) => {
    const data = {...item, isCompleted: true}
    updateTodo(data)
      .then(() => {
        initTodos();
      })
      .catch((err) => {
        setError(err);
      })
  };

  const handleRefreshTodos = () => initTodos();

  return (
    <TodoContext.Provider value={{
      items,
      description,
      initTodos,
      handleMarkAsComplete,
      handleRefreshTodos,
      handleAddTodo,
      handleClear,
      handleDescriptionChange,
      error
    }}>
      { children }
    </TodoContext.Provider>
  );
}