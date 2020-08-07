import React, { Component } from "react";
import axios from "axios";
import "./SearchPage.css";

class SearchPage extends Component {
  state = {
    searchValue: "",
    recipes: [],
  };
  handleOnChange = (event) => {
    this.setState({ searchValue: event.target.value });
  };
  handleSearch = () => {
    this.getData(this.state.searchValue);
  };

  getData = (searchInput) => {
    axios
      .get(`https://coders-cookout.herokuapp.com/recipes/title/${searchInput}`)
      .then((res) => {
        const data = res.data;
        console.log(data);
        this.setState({ recipes: data });
      });
  };

  render() {
    return (
      <div>
        <input
          className="inputSearch"
          name="text"
          type="text"
          placeholder="Search"
          onChange={(event) => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button className="searchButton" onClick={this.handleSearch}>
          Search
        </button>
        {this.state.recipes ? (
          <div className="recipeResult container">
            {this.state.recipes.map((recipe, index) => (
              <div key={index}>
                <h1>{recipe.strRecipe}</h1>
                <img
                  className="searchImg"
                  src={recipe.picture}
                  alt="recipe-thumb"
                />
                <h3 className="searchH3">{recipe.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a Recipe</p>
        )}
      </div>
    );
  }
}

export default SearchPage;
