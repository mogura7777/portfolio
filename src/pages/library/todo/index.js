/** @format */
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoForm } from "src/components/model/Todo/TodoForm";
import { TodoList } from "src/components/model/Todo/TodoList";
import { Discretion } from "src/components/Molecules/Discretion";
const TodoApp = () => {
  const initialState = () => JSON.parse(localStorage.getItem("Tasks")) || [];
  const [tasks, setTasks] = useState(initialState);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const inputRef = useRef(null);
  const [linkList, setLinkList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const text = `ローカルストレージでタスクを管理できます。
  今後はソート・検索機能を追加予定`;
  const handleChange = (e) => {
    const { value } = e.target;
    setNewTask((prevState) => (prevState = value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask === "") return;
    if (!isEditing) {
      const newTaskArr = [
        ...tasks,
        { id: uuidv4(), title: newTask, completed: false },
      ];
      setTasks((prevState) => (prevState = newTaskArr));
      setNewTask("");
      inputRef.current.focus();
    } else {
      const newArr = tasks.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(editId);
      newArr.splice(index, 1, { id: editId, title: newTask, completed: false });
      setTasks((prevState) => (prevState = newArr));
      setNewTask("");
      setEditId("");
      setIsEditing(false);
      inputRef.current.focus();
    }
  };

  const handleClear = () => {
    setTasks([]);
    inputRef.current.focus();
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewTask("");
    setEditId("");
    inputRef.current.focus();
  };
  // 完了タスク
  const handleCompletedList = (list) => {
    const array = list.filter((e) => e.completed);
    setCompletedList(array);
  };
  const handleDelete = (id) => {
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const item = tasks.find((task) => task.id === id);
    setNewTask(item.title);
    setIsEditing(true);
    setEditId(item.id);
    inputRef.current.focus();
  };

  const handleCheck = (title, id) => {
    if (tasks.find((task) => task.id === id).completed) {
      const newArr = tasks.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(id);
      newArr.splice(index, 1, { id, title, completed: false });
      setTasks((prevState) => (prevState = newArr));
      handleCompletedList(newArr);
    } else {
      const newArr = tasks.slice();
      const indexArr = newArr.map((arr) => arr.id);
      const index = indexArr.indexOf(id);
      newArr.splice(index, 1, { id, title, completed: true });
      setTasks((prevState) => (prevState = newArr));
      handleCompletedList(newArr);
    }
  };

  useEffect(() => {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const liStyle = {
    textDecoration: "line-through",
    fontWeight: "100",
    fontStyle: "italic",
    backgroundColor: "#eee",
  };
  const TaskLists = tasks.map((task) => {
    return (
      <li
        className="TodoList__item"
        style={task.completed ? liStyle : { textDecoration: "none" }}
        key={task.id}
      >
        <div className="TodoList__item_ttl">{task.title}</div>
        <div className="TodoList__item_box">
          <button
            title="Delete"
            className="TodoList__item_btn"
            onClick={() => handleDelete(task.id)}
          >
            <i className="fas fa-trash-alt" />
          </button>
          <button
            title="Edit"
            className="TodoList__item_btn"
            onClick={() => handleEdit(task.id)}
          >
            <i className="fas fa-pen-fancy" />
          </button>
          <button
            title="Complete"
            className="TodoList__item_btn"
            onClick={() => handleCheck(task.title, task.id)}
          >
            <i className="fas fa-check" />
          </button>
        </div>
      </li>
    );
  });
  return (
    <div>
      <h1 className="ttl">
        Library<span className="ttl__read">ライブラリ</span>
      </h1>
      <div className="todo__body">
        <TodoList>
          <h2 className="sttl02">Todoアプリ</h2>
          <ul className="todo__list">
            <li>全体タスク：{tasks.length}</li>
            <li>完了タスク：{completedList.length}</li>
          </ul>
          {TaskLists}
        </TodoList>
        <TodoForm
          onSubmit={handleSubmit}
          value={newTask}
          onChange={handleChange}
          onClick={!isEditing ? handleClear : handleCancel}
          isEditing={isEditing}
          reference={inputRef}
        />
      </div>
      <Discretion text={text} linkList={linkList}></Discretion>
    </div>
  );
};

export default TodoApp;
