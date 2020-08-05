import React, { Component } from 'react';
import axios from "axios";

class RecipeOfDay extends Component {
    constructor(props){
        super(props)
        this.state = {
            image = "",
            title = "",
            description = "",
            ingredients = [],
            instructions = ""
        }

    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default RecipeOfDay;