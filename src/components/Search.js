import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, FormGroup, FormControl } from 'react-bootstrap';

const Search = ({ onSubmitUsername }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    if (onSubmitUsername && username) {
      onSubmitUsername(username);
    }
  };
  return (
    <Form inline>
      <FormGroup controlId="formInlineEmail">
        <FormControl type="text" placeholder="Enter username" name="username" onSubmit={handleSubmit} />
      </FormGroup>{' '}
      <Button type="submit" >Add</Button>
    </Form>
  );
};

Search.propTypes = {
  onSubmitUsername: PropTypes.func
};

export default Search;
