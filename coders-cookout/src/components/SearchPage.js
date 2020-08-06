import React, { Component } from "react";
import axios from "axios";
import "./SearchPage.css";

class SearchPage extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       recipes: data,
  //       search: "",
  //     };
  //   }

  //   componentDidMount() {
  //     axios.get("https://coders-cookout.herokuapp.com/recipes").then((res) => {
  //       const data = res.data;
  //       console.log(data);

  //       this.setState({ recipes: data });
  //       console.log("Data has been received");
  //     });
  //   }

  //   search = (e) => {
  //     e.preventDefault();
  //     this.setState({ search: e.target.value });
  //     let filter = recipes.filter((element) =>
  //       element.person.toLowerCase().includes(e.target.value.toLowerCase())
  //     );
  //     console.log(filter);
  //     this.setState({ recipes: filter });
  //   };
  render() {
    return (
      <div>
        <label>Search</label>
        <input onChange={this.search}></input>
      </div>
    );
  }
}

export default SearchPage;
