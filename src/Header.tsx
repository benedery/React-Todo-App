import React from "react";
import {Button} from 'react-bootstrap'
import {ButtonGroup} from "react-bootstrap";
import './Header.css'

function Header(props) {
    const filteredInfo = () => { if (props.filterCounter > 0) {
        return (<h3>Filtered Todo's:[{props.filterCounter}]</h3>)}
    else return  (null) };
    return (
        <header>
            <h2 className="headerMyTodo">
                My Todo list
            </h2>
            <ButtonGroup className="buttonGroupFilter">
                <Button variant="primary" onClick={props.showAllTodos}> Show All </Button>
                <Button variant="success" onClick={props.showCompleted}> Completed </Button>
                <Button variant="danger" onClick={props.showUncompleted}> Uncompleted </Button>
                <Button variant="warning" className="favoriteBtn" onClick={props.showFavorite}> Favorite items </Button>
            </ButtonGroup>
            <h4>Total Todo's:[{props.counter}]</h4>
            {filteredInfo()}
        </header>
    );
}

export default Header;