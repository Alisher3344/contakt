import React, { Component } from "react";
import "./scss/search.scss"; // CSS faylni alohida yaratish kerak

export default class Header extends Component {
  render() {
    
    return (
      <div className="container">
        <div className="form-controls">
          <input type="text" required />
          <label>
            <span style={{ transitionDelay: "0ms" }}>S</span>
            <span style={{ transitionDelay: "50ms" }}>e</span>
            <span style={{ transitionDelay: "100ms" }}>a</span>
            <span style={{ transitionDelay: "150ms" }}>r</span>
            <span style={{ transitionDelay: "200ms" }}>c</span>
            <span style={{ transitionDelay: "250ms" }}>h</span>
            <span style={{ transitionDelay: "300ms" }}>.</span>
            <span style={{ transitionDelay: "350ms" }}>.</span>
          </label>
        </div>
      </div>
    );
  }
}
