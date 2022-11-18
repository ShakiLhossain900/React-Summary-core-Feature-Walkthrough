import React from "react";

const Todo = (props) => {
  const deleteHandler =(event) => {
    console.log('clicked');
    console.log(props.text);
  };
  return (
    <div className="main">
      <div className="card">
        <h2>TITLE</h2>
        <p>{props.text}</p>
        <div>
          <button onClick={deleteHandler} className="btn">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
