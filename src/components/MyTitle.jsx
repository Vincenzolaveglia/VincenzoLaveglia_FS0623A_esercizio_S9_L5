import React from "react";
import { Dropdown } from "react-bootstrap";
import { MenuAppFill } from "react-bootstrap-icons";

const MyTitle = () => {
  return (
    <div className="text-white p-3 d-flex align-items-center">
      <h1>TV shows</h1>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" className="rounded-0 bg-dark" id="dropdownMenuButton">
          Genres &nbsp;
        </Dropdown.Toggle>
        <Dropdown.Menu className="bg-dark">
          <Dropdown.Item className="text-white bg-dark" href="#">
            Comedy
          </Dropdown.Item>
          <Dropdown.Item className="text-white bg-dark" href="#">
            Drama
          </Dropdown.Item>
          <Dropdown.Item className="text-white bg-dark" href="#">
            Thriller
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default MyTitle;
