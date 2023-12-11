// AddToDo.js
import React from 'react';

function AddToDo({ toDos, handleCheckboxChange, handleDeleteClick, handleDeleteAll }) {
  return (
    <div>
      <div className="todos">
        {toDos.map((obj) => (
          <div className={`todo ${obj.status ? 'completed' : ''}`} key={obj.id}>
            <div className="left">
              <input
                onChange={(e) => handleCheckboxChange(obj.id, e.target.checked)}
                checked={obj.status}
                type="checkbox"
              />
              <p>{obj.text}</p>
            </div>
            <div className="right">
              <i onClick={() => handleDeleteClick(obj.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
      </div>
      {toDos.length > 0 && (
        <div className="deleteAll">
          <button onClick={handleDeleteAll} className='deleteAll'>
            Delete All
          </button>
        </div>
      )}
    </div>
  );
}

export default AddToDo;
