import React from 'react'
import "./Forms.css"
/*
function handleOnChange(){
    console.log("called on change function!")
}
*/
function List(props){

    console.log(props)  
    let items = []
    if(props.type === "checkbox"){
        items = props.content.map(item => {
        return <div>
                <input type="checkbox"/><p>{item}</p>
                </div>
        })
    } else {
        items = props.content.map(item => {
        return <li>{item}</li>
        })
    }

    return (
        <div>
            {items}
        </div>        
    );
}

export default List