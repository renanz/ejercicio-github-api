import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Button, FormGroup, FormControl } from "react-bootstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then(info => {
        this.props.onSubmit(info.data);
        this.setState({ username: "" });
      })
      .catch(error => {
        alert(`User ${this.state.username} not found`)
      });
  };

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormGroup controlId="formInlineEmail">
          <FormControl
            type="text"
            placeholder="Enter username"
            value={this.state.username}
            onChange={e => this.setState({ username: e.target.value })}
          />
        </FormGroup>{" "}
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}

Search.propTypes = {
  onSubmitUsername: PropTypes.func
};

export default Search;
