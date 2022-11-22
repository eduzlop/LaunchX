import React, { useState } from "react";

const FormTodo = (props) => {
  const [description, setDescription] = useState("");
  return (
    <form action="">
      <div className="todo-list">
        <div className="input">
          <input type="text" className="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          <button className="btn-blue" disabled={description ? "" : "disabled"}>
            Agregar Tarea
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormTodo;
