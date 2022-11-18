import React from "react";

const Todo = (props) => {
  const deleteHandler =(event) => {
    event.preventDefault();
  };
  return (
    <div className="main">
      <div className="card">
        <h2>TITLE</h2>
        <p>{props.text}</p>
        <div>
          <button onClick={deleteHandler} class="btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
