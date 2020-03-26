import React from 'react';
import  "./todo-header.scss"



const ToDoHeader = ({toDo, done}) => {
    return (
        <div className="col-lg-12 text-center">
            <h1>Todo List</h1>
            <h2>{toDo} in progress / {done} done</h2> 
            
        </div>
        
    );
};

export default ToDoHeader;