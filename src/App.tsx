import React from 'react';
import './App.css';
import TodoList from "./TodoList";
import Button from "react-bootstrap/Button";
import Header from "./Header";

interface Todos {
}

class App extends React.Component <Todos, any> {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {id: 1, text: 'Call Benny', completed: false, favorite: false},
                {id: 2, text: 'Build react demo', completed: false, favorite: false},
                {id: 3, text: 'Take rest', completed: false, favorite: false},
            ],
            activeList: [],
            activeFilterMode: false,
            userInput: "",
        }
    };

    showFavorite = () => {
        let activeList = this.state.todoList.filter(todo =>
            todo.favorite
        );
        this.setState({
                activeList,
                activeFilterMode: true
            }
        )
    };

    showAllTodos = () => {
        this.setState({
            activeFilterMode: false,
            activeList: [],
        })
    };

    showCompleted = () => {
        let activeList = this.state.todoList.filter(todo =>
            todo.completed
        );
        this.setState({
                activeList,
                activeFilterMode: true
            }
        )
    };

    showUncompleted = () => {
        let activeList = this.state.todoList.filter(todo =>
            !todo.completed
        );
        this.setState({
                activeList,
                activeFilterMode: true
            }
        )
    };

    markFavorite = (index) => {
        let newTodo = [...this.state.todoList];
        newTodo[index].favorite = !newTodo[index].favorite;
        this.setState({
            todoList: newTodo
        })
    }


    markCompleted = (index) => {
        let newTodo = [...this.state.todoList];
        newTodo[index].completed = !newTodo[index].completed;
        this.setState({
            todoList: newTodo
        })
    }


    deleteTodo = (id) => {
        // @ts-ignore
        const todoList = this.state.todoList.filter(todo => {
            return todo.id !== id;
        })
        this.setState({
                todoList
            }
        )
    };

    HandleChange = (e) => (
        this.setState({
            userInput: e.target.value
        })
    );

    addTodo = (event) => {
        let todo = {
            id: 1 + Math.random(),
            text: this.state.userInput,
            completed: false,
            favorite: false,
        }
        let newTodo = [...this.state.todoList];
        newTodo.push(todo)
        this.setState({
            todoList: newTodo,
            userInput: "",
        })
    }

    addTodoKeyPress = (event) => {
        if (event.key === 'Enter') {
            let todo = {
                id: 1 + Math.random(),
                text: this.state.userInput,
                completed: false,
                favorite: false,
            }
            let newTodo = [...this.state.todoList];
            newTodo.push(todo)
            this.setState({
                todoList: newTodo,
                userInput: "",
            })
        }
    };

    render() {
        // @ts-ignore
        // @ts-ignore
        return (
            <main className="App">
                <div className="container">
                    <Header counter={this.state.todoList.length}
                            filterCounter={this.state.activeList.length}
                            showCompleted={this.showCompleted}
                            showFavorite={this.showFavorite}
                            showUncompleted={this.showUncompleted}
                            showAllTodos={this.showAllTodos}/>
                    <TodoList todoList={this.state.activeFilterMode ? this.state.activeList : this.state.todoList}
                              deleteTodo={this.deleteTodo}
                              markCompleted={this.markCompleted}
                              markFavorite={this.markFavorite}
                    />
                    <input className="input__add_todo" value={this.state.userInput}
                           placeholder="I Want to ..."
                           onChange={this.HandleChange}
                           onKeyPress={this.addTodoKeyPress}
                    />
                    <Button
                        onClick={this.addTodo}
                    >Add Todo</Button>
                </div>
            </main>
        );
    }
}

export default App;
