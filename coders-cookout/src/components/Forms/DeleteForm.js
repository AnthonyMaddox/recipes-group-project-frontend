import React, { Component } from "react";
import "./Form.css";
import axios from "axios";
/*let types = ["IWB", "TextField"];
   if (types.includes(props.type)) {
     classList.push(`IWB-${props.type}`);
   }*/
//need to use e.target.value and set state
// convert to a class!!! set state and include something to hold the value of input.value
let classList = [];
class DeleteForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("oh no I'm deleting");
    let idInput = document.getElementById("idInput").value;
    console.log(idInput);

    let res = `https://coders-cookout.herokuapp.com/recipes/${idInput}`;
    console.log(res);

    axios.delete(res).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="createFormTitle">Delete A Recipe By ID</h4>
        <div className="idField">
          <p>ID:</p>
          <input id="idInput" type="text" />
        </div>
        <div className="bigButton">
          <br></br>
          <button className="formButton">Delete Recipe</button>
        </div>
      </form>
    );
  }
}

export default DeleteForm;
