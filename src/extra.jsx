import React, { Component, useEffect, useState } from "react";
import "./App.css";
import TodoList from "./Todolist";

const App = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [inputItem, setInputItem] = useState("");
  const [inputList, setInputList] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    document.title = `${name} has clicked ${count} times`;
  }, [name, count]);

  const itemEvent = (item) => {
    setInputItem(item.target.value);
  };

  const addItem = () => {
    if (inputItem && toggle == false) {
      inputList[editItem] = inputItem;
      setToggle(true);
      setInputItem("");
      setEditItem(null);
    } else {
      setInputList([...inputList, inputItem]);
      setInputItem("");
    }
  };

  const handleDelete = (value) => {
    setInputList((old) => {
      return old.filter((item, index) => index != value);
    });
  };

  const handleEdit = (index) => {
    let selected = inputList[index];
    setToggle(false);
    setInputItem(selected);
    setEditItem(index);
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <h1>ToDo List</h1>
          <br />

          <input
            type="text"
            placeholder="Add Item"
            onChange={itemEvent}
            value={inputItem}
          />
          <button onClick={() => addItem()}> + </button>
          <ol>
            {inputList.map((item, index) => (
              <TodoList
                key={index}
                text={item}
                onDelete={() => handleDelete(index)}
                onEdit={() => handleEdit(index)}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
