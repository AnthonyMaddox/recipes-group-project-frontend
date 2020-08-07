import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class DeleteForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("oh no I'm deleting");
    let idDeleteRInput = document.getElementById("idDeleteRInput").value;
    console.log(idDeleteRInput);

    let res = `https://coders-cookout.herokuapp.com/recipes/${idDeleteRInput}`;
    console.log(res);

    axios.delete(res).then((res) => {
      console.log(res);
      console.log(res.data);
      alert(`You deleted recipe: ${res.data._id}`)
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4 className="createFormTitle">Delete A Recipe By ID</h4>
        <br></br>
        <div className="idField">
          <p>ID:</p>
          <input id="idDeleteRInput" type="text" />
        </div>
        <div className="deleteButton">
          <br></br>
          <button className="formButton">Delete Recipe</button>
        </div>
      </form>
    );
  }
}

export default DeleteForm;
