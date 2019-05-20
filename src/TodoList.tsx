import React from "react";
import Todo from './Todo'
// import {Button} from 'react-bootstrap'
import './TodoList.css'
import {log} from "util";


const Todos = ({todoList, deleteTodo, markCompleted, markFavorite}) => {
    // @ts-ignore
    // @ts-ignore
    // style={ {textDecoration: item.completed ? "line-through" : "none",
    // backgroundColor: item.completed ? "green": "#ffffff"}}

    const TodoList = todoList.length ? (
        <div>
            <ul className="Todolist">
                {todoList.map((item, index) =>
                    <li className={item.completed ? "todo_list_item todo_list_item_done " : "todo_list_item"}
                        key={item.id}>
                        <Todo
                            text={item.text}/>
                        <span className="todo_list_button"
                              onClick={() => {
                                  deleteTodo(item.id)
                              }}>
                        <i className="far fa-trash-alt">
                        </i></span>
                        <span className="todo_list_button" onClick={() => {
                            markFavorite(index)
                        }}>
                    <i className="fas fa-star star_button"> </i></span>
                        <span className="todo_list_button"
                              onClick={() => {
                                  markCompleted(index)
                              }}>
                    <i className="fas fa-check-circle"> </i></span>
                    </li>
                )}
            </ul>
        </div>
    ) : (
        <p>You have no todo</p>
    );


    return (
        <div>
            {TodoList}
        </div>
    )
}


export default Todos

