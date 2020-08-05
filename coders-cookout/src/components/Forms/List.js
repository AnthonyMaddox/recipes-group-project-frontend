import React from 'react'
import "./Forms.css"
/*
function handleOnChange(){
    console.log("called on change function!")
}
*/
function List(props){
    console.log(props)
    return (
        <div className="list-item">
            <li>{props.item.text}</li>
        </div>        
    );
}

export default List