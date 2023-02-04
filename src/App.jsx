import React, { useState } from 'react';
import ToDoList from './ToDoList';
import './App.css';

const App = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const inputHandler = (event) => {
        setInput(event.target.value);
    };
    const addItem = () => {
        if (input.length > 3){
            setItems((previousItems) => {
                return [...previousItems, input];
            });
            setInput("");
        }
        
    };
    const deleteItem = (id) => {
        setItems((previousItems) => {
            return previousItems.filter((item , index) => {
                return index !== id;
            })
        });
    };
    return (
        <>
            <div className="header">
                <br /><br />
                <h1 className="title">ToDo List</h1>
                <br /><br />
            </div>
            <div className="body">
                <div className="input__con">
                    <input multiple type = "text" onChange = {inputHandler} onnnnKeyDown={(key)=> key.keyCode == '13' ? addItem():null } placeholder = "Add a Item" value = {input} className="input__field"/>
                    <button onClick = {addItem}>+</button>
                </div>
                <div className="toDoList">
                    <ol>
                    {items.map((item, index) => {
                        return <ToDoList  key = {index} id = {index} text = {item} onSelect = {deleteItem}/>
                        })}    
                    </ol>
                </div> 
            </div>
        </>
    );
}
export default App;