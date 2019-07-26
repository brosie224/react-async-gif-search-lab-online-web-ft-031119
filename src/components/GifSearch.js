import React, { Component } from "react";

class GifSearch extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    this.setState({
      search: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchGifs(this.state.search);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="search"
          value={this.state.search}
          onChange={this.handleChange}
        />
        <br />
        <button>Find Gifs</button>
      </form>
    );
  }
}

export default GifSearch;
