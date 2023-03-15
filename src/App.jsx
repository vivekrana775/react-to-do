import React, { Component, useEffect, useState } from "react";
import "./App.css";
import TodoList from "./Todolist";

const App = () => {
  // const [inputItem, setInputItem] = useState("");
  // const [inputList, setInputList] = useState([]);
  // const [toggle, setToggle] = useState(true);
  // const [editItem, setEditItem] = useState(null);

  const [objectItem, setObjectItem] = useState({
    bool: true,
    inputItem: "",
    inputList: [],
    editItem: null,
  });

  // useEffect(() => {
  //   document.title = `${name} has clicked ${count} times`;
  // }, [name, count]);

  const itemEvent = (item) => {
    // setInputItem(item.target.value);
    setObjectItem({ ...objectItem, inputItem: item.target.value });
  };

  const addItem = () => {
    if (objectItem.inputItem == "") {
      alert("Please input Something");
    } else if (objectItem.inputItem && objectItem.bool === false) {
      objectItem.inputList[objectItem.editItem] = objectItem.inputItem;

      setObjectItem({
        ...objectItem,
        inputItem: "",
        editItem: null,
        bool: true,
      });

      // setToggle(true);
      // setInputItem("");
      // setEditItem(null);
    } else {
      let s = objectItem.inputItem;

      setObjectItem({
        ...objectItem,
        inputList: [...objectItem.inputList, s],
        inputItem: "",
      });
    }
  };

  const handleDelete = (value) => {
    let x = objectItem.inputList.filter((m, index) => index != value);

    setObjectItem({ ...objectItem, inputList: x });

    // setInputList((old) => {
    //   return old.filter((item, index) => index != value);
    // });
  };

  const handleEdit = (index) => {
    let selected = objectItem.inputList[index];

    setObjectItem({
      ...objectItem,
      inputItem: selected,
      bool: false,
      editItem: index,
    });

    // setToggle(false);
    // setInputItem(selected);
    // setEditItem(index);
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
            onChange={(e) => itemEvent(e)}
            value={objectItem.inputItem}
          />
          <button onClick={() => addItem()}> + </button>
          <ol>
            {objectItem.inputList.map((item, index) => (
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
