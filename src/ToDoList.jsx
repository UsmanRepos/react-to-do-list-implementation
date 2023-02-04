import React from 'react';
import CloseIcon from './icons/close_1X.png';

const ToDoList = (props) => {
    return (
        <div className="listItem">
            {/* <button 
              onClick = {() =>{
              return props.onSelect(props.id)
              }}> + </button> */}
            <li> {props.text} </li>
            <img
                src={CloseIcon}
                alt="Eror"
                onClick={() => {
                    return props.onSelect(props.id)
                }}
            />
        </div>
    );
}
export default ToDoList;