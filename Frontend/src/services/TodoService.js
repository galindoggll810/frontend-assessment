import Http from '../utils/Http';

/**
 * Retrieve all Todo items
 *
 * @returns {function(*)}
 */
export function fetchAllTodos() {
  return new Promise((resolve, reject) => {
    Http.get('todoItems', {'Access-Control-Allow-Origin': 'http://localhost:3000'})
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      })
  })
}

/**
 * Create new todo
 *
 * @param data
 * @returns {function(*)}
 */
export function addTodo(data) {
  return new Promise((resolve, reject) => {
    Http.post('todoItems', data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      })
  })
}

/**
 * Update todo by id
 *
 * @param data
 * @returns {function(*)}
 */
export function updateTodo(data) {
  return new Promise((resolve, reject) => {
    Http.put(`todoItems/${data.id}`, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.response.data);
      })
  })
}

