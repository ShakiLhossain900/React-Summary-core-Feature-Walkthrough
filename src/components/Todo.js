import React from "react";

const Todo = (props) => {
  return (
    <div className="main">
      <div className="card">
        <h2>TITLE</h2>
        <p>{props.text}</p>
        <div>
          <button class="btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
