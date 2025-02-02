import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './scss/main.scss'
export class Section extends Component {
  render() {
    return (
      <Container
        className="mt-4"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div>
          <form className="form" style={{width:'100%'}}>
            <p className="title">Add Contact</p>
            <div className="flex">
              <label>
                <input className="input" type="text" required />
                <span>Firstname</span>
              </label>

              <label>
                <input className="input" type="text" required />
                <span>Lastname</span>
              </label>
            </div>

            <label>
              <input className="input" type="email" required />
              <span>Phone Number</span>
            </label>
            <button className="submit">Add Contact</button>
            <p className="signin">
              Already have an account? <a href=" ">Signin</a>
            </p>
          </form>
        </div>
      </Container>
    );
  }
}

export default Section;
