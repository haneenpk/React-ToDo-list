import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCheckboxChange = (id, checked) => {
    setToDos((prevToDos) =>
      prevToDos.map((obj) => {
        if (obj.id === id) {
          return { ...obj, status: checked };
        }
        return obj;
      })
    );
  };

  const handleDeleteClick = (id) => {
    setToDos((prevToDos) => prevToDos.filter((obj) => obj.id !== id));
  };

  const handleAddToDo = () => {
    const newTodoText = toDo.trim().toLowerCase();
    const isDuplicate = toDos.some((todo) => todo.text.toLowerCase() === newTodoText);

    if (!isDuplicate && newTodoText !== '') {
      setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setToDo('');
      setErrorMessage(''); // Clear the error message
    } else {
      setErrorMessage('Already exist');
    }
  };

  const handleInputChange = (e) => {
    setToDo(e.target.value);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddToDo();
    }
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <h2>Stay organized and productive 🌿</h2>
      </div>
      <div className="input">
        <input
          type="text"
          value={toDo}
          onChange={handleInputChange}
          onKeyPress={handleInputKeyPress}
          placeholder="Add a new task..."
        />
        <i onClick={handleAddToDo} className="fas fa-plus"></i>
      </div>
      {errorMessage && <p className="error" style={{ color: 'red', textAlign: 'center' }}>{errorMessage}</p>}
      <div className="todos">
        {toDos.map((obj) => (
          <div className={`todo ${obj.status ? 'completed' : ''}`} key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => handleCheckboxChange(obj.id, e.target.checked)}
                value={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i
                onClick={() => handleDeleteClick(obj.id)}
                className="fas fa-times"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
