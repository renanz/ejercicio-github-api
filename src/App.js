import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Users from "./components/Users";

const List = props => {
  return (
    <div>
      {props.list &&
        props.list.map(user => <Users key={user.id.toString()} {...user} />)}
    </div>
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  add_user = info => {
    this.setState(p => ({
      list: p.list.concat(info)
    }));
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Search onSubmit={this.add_user} />
          <br />
          <List list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
