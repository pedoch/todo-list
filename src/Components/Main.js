import React, {Component} from 'react';
import TodoItem from './TodoItem';
import TodoData from './TodoData';

class Main extends Component{
    constructor(){
        super()
        this.state ={
            todos: TodoData
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(id){
        this.setState(preState => {
            const updateTodo = preState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed    
                }
                return todo
            })
            return{
                todos: updateTodo
            }
        })
    }

    handleDelete(id){

        this.setState(preState => {
            let indexNum
            const tempTodo = preState.todos.map(todo => {
                if(todo.id === id){
                    indexNum = preState.todos.indexOf(todo)
                }
            return todo
            })

            tempTodo.splice(indexNum, 1)

            const updateTodo = tempTodo.map(todo => {
                return todo;
            })
            
            return{
                todos: updateTodo
            }
        })

    }

    handleAdd(){
        // console.log(document.getElementById("textbox").value)
        this.setState(preState => {
            const indexNum = preState.todos.length
            const tempTodo = preState.todos.map(todo => {
                // if(todo.id === id){
                //     indexNum = preState.todos.length + 1
                // }
                return todo
            })

            tempTodo.push({
                id: indexNum,
                text: document.getElementById("textbox").value,
                completed: false
            })

            const updateTodo = tempTodo.map(todo => {
                return todo;
            })
            
            document.getElementById("textbox").value = ""

            return{
                todos: updateTodo
            }
        })
        
    }

    render(){
        const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange} handleDelete={this.handleDelete} />)
        return(
            <div>
                <input type="text" placeholder="Enter Todo Item" id="textbox"/><button onClick={this.handleAdd} id="submitBtn">Submit</button>
                {todoComponents}
            </div>
        )
    }
}

export default Main;