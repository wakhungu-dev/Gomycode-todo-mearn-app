import React from 'react';
import Icon from 'react-crud-icons';
import "react-crud-icons/dist/css/react-crud-icons.css";

/**
 * Represents a ToDo component.
 * @param {Object} props - The props object containing the text, updateMode, and deleteToDo functions.
 * @returns {JSX.Element} The ToDo component.
 */
const ToDo = ({ text, updateMode, deleteToDo }) => {
    return (
        <div className="flex justify-between items-center bg-gray-50 p-4 border rounded-lg shadow-sm">
            <span className="text">{text}</span>
            <div className="flex space-x-2">
                <Icon
                    name="edit"
                    theme="light"
                    size="small"
                    className="edit-icon"
                    onClick={updateMode}
                />
                <Icon
                    name="delete"
                    theme="light"
                    size="small"
                    className="delete-icon"
                    onClick={deleteToDo}
                />
            </div>
        </div>
    );
}

export default ToDo;
