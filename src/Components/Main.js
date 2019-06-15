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
        // this.handleDelete = this.handleDelete.bind(this);
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
    // handleDelete(id){
    //     this.setState(preState =>{
    //         const updateTodo = preState.todos.filter(function(x){
    //             return x !== id
    //         })
    //         return{
    //             todos: updateTodo
    //         }
    //     })

    // }
    render(){
        const todoComponents = this.state.todos.map(item => <TodoItem key={item.id} todo={item} handleChange={this.handleChange}/>)
        return(
            <div>
                {todoComponents}
            </div>
        )
    }
}

export default Main;