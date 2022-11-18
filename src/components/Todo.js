import React from "react";
import { useState } from "react";
import Modal from "./Modal";
import Backdrep from "./Backdrep";

const Todo = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = (event) => {
    setModalIsOpen(true);
  };

  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div>
        <button onClick={deleteHandler} className="btn">
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrep onClick={closeModalHandler} />}
    </div>
  );
};

export default Todo;
