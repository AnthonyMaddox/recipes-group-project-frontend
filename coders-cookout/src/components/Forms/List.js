import React from 'react'
import "./Forms.css"
/*
function handleOnChange(){
    console.log("called on change function!")
}
*/
function List(props){
    console.log(props)
    const items = props.content.map(item => {
        return <li>{item}</li>
    })
    return (
        <div>
            {items}
        </div>        
    );
}

export default List