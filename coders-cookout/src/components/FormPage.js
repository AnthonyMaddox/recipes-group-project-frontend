import React, { Component } from "react";
import "../App.css";

class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateName: "",
    };
  }
  render() {
    return <div className="formPageBody"></div>;
  }
}

export default FormPage;
