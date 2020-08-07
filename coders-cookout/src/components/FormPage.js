import React, { Component } from "react";
import "../App.css";
import "./Forms/Form.css";
import CreateForm from "./Forms/CreateForm.js";
import UpdateForm from "./Forms/UpdateForm.js";
import DeleteForm from "./Forms/DeleteForm.js";
import DIForm from "./Forms/DIForm.js";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "",
    };
  }
  handleAddClick = (e) => {
    console.log("add");
    e.preventDefault();
    let addDiv = document.querySelector(".addDiv");
    addDiv.classList.toggle("display");
    let updateDiv = document.querySelector(".updateDiv");
    updateDiv.classList.remove("display");
    let deleteDiv = document.querySelector(".deleteDiv");
    deleteDiv.classList.remove("display");
    let DIDiv = document.querySelector(".DIDiv");
    DIDiv.classList.remove("display");
  };
  handleUpdateClick = (e) => {
    console.log("update");
    e.preventDefault();
    let updateDiv = document.querySelector(".updateDiv");
    updateDiv.classList.toggle("display");
    let deleteDiv = document.querySelector(".deleteDiv");
    deleteDiv.classList.remove("display");
    let addDiv = document.querySelector(".addDiv");
    addDiv.classList.remove("display");
    let DIDiv = document.querySelector(".DIDiv");
    DIDiv.classList.remove("display");
  };
  handleDeleteClick = (e) => {
    console.log("delete");
    e.preventDefault();
    let deleteDiv = document.querySelector(".deleteDiv");
    deleteDiv.classList.toggle("display");
    let addDiv = document.querySelector(".addDiv");
    addDiv.classList.remove("display");
    let updateDiv = document.querySelector(".updateDiv");
    updateDiv.classList.remove("display");
    let DIDiv = document.querySelector(".DIDiv");
    DIDiv.classList.remove("display");
  };
  handleDIClick = (e) => {
    console.log("delete ingredient");
    e.preventDefault();
    let DIDiv = document.querySelector(".DIDiv");
    DIDiv.classList.toggle("display");
    let addDiv = document.querySelector(".addDiv");
    addDiv.classList.remove("display");
    let updateDiv = document.querySelector(".updateDiv");
    updateDiv.classList.remove("display");
    let deleteDiv = document.querySelector(".deleteDiv");
    deleteDiv.classList.remove("display");
  };
  render() {
    return (
      <div>
        <div className="crudDiv">
          <div className="formDiv">
            <button className="addBtn" onClick={this.handleAddClick}>
              Add Recipe
            </button>
          </div>
          <div>
            <button className="addBtn" onClick={this.handleUpdateClick}>
              Update Recipe by ID
            </button>
          </div>
          <div>
            <button className="addBtn" onClick={this.handleDeleteClick}>
              Delete Recipe by ID
            </button>
            <div className="buttonFormFix">
              <button
                className="addBtn DIformButn"
                onClick={this.handleDIClick}
              >
                Delete Ingredient by ID and ID
              </button>
            </div>
          </div>
        </div>
        <div className="addDiv">
          <CreateForm />
        </div>
        <div className="updateDiv">
          <UpdateForm />
        </div>
        <div className="deleteDiv">
          <DeleteForm />
        </div>
        <div className="DIDiv">
          <DIForm />
        </div>
      </div>
    );
  }
}

export default FormPage;
