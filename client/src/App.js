import React, { useState, useEffect } from "react";
import { getAllToDo, addToDo, updateToDo, deleteToDo } from "./utils/handleApi";
import ToDo from "./components/ToDo";

/**
 * Main component for the ToDo App.
 * @returns {JSX.Element} The rendered component.
 */
function App() {
  const [toDoList, setToDoList] = useState([]); // State for storing the list of todos
  const [text, setText] = useState(""); // State for storing the input text
  const [isUpdating, setIsUpdating] = useState(false); // State for tracking if updating a todo
  const [toDoListId, setToDoListId] = useState(""); // State for storing the id of the todo being updated

  useEffect(() => {
    // Fetch all todos on component mount
    getAllToDo(setToDoList);
  }, []);

  /**
   * Sets the update mode and updates the input text and todo id.
   * @param {string} _id - The id of the todo being updated.
   * @param {string} text - The text of the todo being updated.
   */
  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoListId(_id);
  };

  /**
   * Handles adding or updating a todo based on the update mode.
   */
  const handleAddOrUpdate = () => {
    if (isUpdating) {
      // Update the todo
      updateToDo(toDoListId, text, setToDoList, setText, setIsUpdating);
    } else {
      // Add a new todo
      addToDo(text, setText, setToDoList);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container bg-white shadow-md rounded-lg p-6 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">ToDo App</h1>
        <div className="top flex mb-4">
          <input
            type="text"
            placeholder="Add a task..."
            className="flex-grow px-4 py-2 border rounded-l-lg focus:outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600"
            onClick={handleAddOrUpdate}
          >
            {isUpdating ? "Update" : "Add"}
          </button>
        </div>
        <div className="list space-y-2">
          {toDoList.map((item) => (
            <ToDo 
              key={item._id} 
              text={item.text}
              updateMode={() => updateMode(item._id, item.text)} 
              deleteToDo={() => deleteToDo(item._id, setToDoList)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
