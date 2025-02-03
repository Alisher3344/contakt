import React, { Component } from "react";

export class User extends Component {
  render() {  
    let { id, firstName, lastName, phone } = this.props;
    return (
      <>
        <div className="box_in_contact">
          <div className="box_in_contactt">
            <h5>FirstName: <b>{firstName}</b> </h5>
            <h5>LastName: <b>{lastName}</b> </h5>
            <h5>Phone: <b>{phone}</b></h5>
          </div>
          <button className="button_delite">
            <p style={{ color: "rgb(0, 191, 255)" }}>DELITE ({id})</p>
          </button>
        </div>
      </>
    );
  }
}

export default User;
