import React, { Component } from "react";
import { Container } from "react-bootstrap";
import User from "./scss/User";
import "./scss/search.scss"; // CSS faylni alohida yaratish kerak
export class Catalog extends Component {
  state = {
    todos: [
      {
        id: 0,
        firstName: "Play footbool",
        lastName: "A",
        phone: "31-01-2025",
      },
      {
        id: 1,
        firstName: "Reading books",
        lastName: "B",
        phone: "01-02-2025",
      },
    ],
    search: "",
  };

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    let { todos, search } = this.state;
    let filteredTodos = todos.filter((todo) =>
      todo.firstName.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
      <Container className="mt-4">
        <div className="container">
          <div className="form-controls">
            <input
              type="text"
              required
              value={this.state.search}
              onChange={this.handleSearch}
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="contact_div">
          <h1 className="All_contact">All Contact</h1>
          <div>
            {filteredTodos.map((todo, i) => (
              <User key={i} {...todo} no={i + 1} />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default Catalog;
