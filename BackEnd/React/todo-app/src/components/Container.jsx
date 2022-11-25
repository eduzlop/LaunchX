import React from "react";
import FormTodo from "./FormTodo";
import TaskList from "./TaskList";
import { useState } from "react";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <div>
      <FormTodo handleAddItem={handleAddItem}></FormTodo>
      <TaskList list={list} setList={setList}></TaskList>
    </div>
  );
};

export default Container;
