import React, { Component } from "react";
import axios from "axios";
import "./SearchPage.css";

class SearchPage extends Component {
  state = {
    searchValue: "",
  };
  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };
  handleSearch = () => {};

  getData = (searchInput) => {
    axios.get("https://coders-cookout.herokuapp.com/recipes").then((res) => {
      const data = res.data;
      console.log(data);
    });
  };

  render() {
    return (
      <div>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default SearchPage;
