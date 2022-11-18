import React from "react";
import {useState} from "react";
import Modal from "./Modal";
import Backdrep from "./Backdrep";

const Todo = (props) => {

  const[modalIsOpen,setModalIsOpen] =useState(false);

  const deleteHandler =(event) => {
  setModalIsOpen(true);
  };
  return (
      <div className="card">
        <h2>{props.text}</h2>
        <div>
          <button onClick={deleteHandler} className="btn">Delete</button>
        </div>
      </div>
  );
};

export default Todo;
