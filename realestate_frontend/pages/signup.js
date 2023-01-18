import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        {/* <div className="mb-3">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Select Role
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Buyer</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Seller</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-3">Notary</Dropdown.Item> }
            </Dropdown.Menu>
          </Dropdown>
        </div> */}

        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
          <label>Phone</label>
          <input type="tel" className="form-control" placeholder="Phone" />
        </div>

        <div className="mb-3">
          <label>Birthdate</label>
          <input type="date" className="form-control" placeholder="Birthdate" />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-check mb-3">
          <input className="form-check-input" type="checkbox"></input>
          <label className="form-check-label">I Agree Terms & Coditions.</label>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
