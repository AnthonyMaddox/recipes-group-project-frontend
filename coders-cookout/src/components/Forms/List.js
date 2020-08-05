import React from 'react'
import "./Forms.css"

function List(props){
    console.log("Hello from List") 
    console.log(props.content[0])  
    let items = []
    
    if(props.type === "checkbox"){
        items = props.content.map(item => {
        return <div>
                <input type="checkbox"/><p>{item}</p>
                </div>
        })
    } else {
        items = props.content.map(item => {
        return <li key={item._id}>{item.ingredient} - {item.amount}</li>
        })
    }
    
    return (
        <div>
            {items}
        </div>        
    );
}

export default List

