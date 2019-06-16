import React from 'react'

function TodoItem(props){
    const completedStyle = {
        fontStyle: "italic",
        color: "lightgray",
        textDecoration: "line-through"
    }
    return(
        <div className="todoList">
            <p style={props.todo.completed ? completedStyle : null}><input type="checkbox" 
            onChange={function(){
                props.handleChange(props.todo.id)
            }}/>{props.todo.text} <button onClick={function(){
                props.handleDelete(props.todo.id)
            }} >Delete</button></p>
        </div>
    )
}

export default TodoItem;