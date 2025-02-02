import React, { Component } from "react";
import { Container } from "react-bootstrap";
import User from "./scss/User";

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
    todo: { name: "", data: "", category: "A" },
    search: "",
    category: "all",
  };
  render() {
    let { todos, search, category, todo } = this.state;
    return (
      <Container className="mt-4">
        <div className="contact_div">
          <h1 className="All_contact">All Contact</h1>
          <div>
            {todos.map((todo, i) => (
              <User key={i} {...todo} no={i + 1} />
            ))}
          </div>
        </div>
      </Container>
    );
  }
}

export default Catalog;
