import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Example = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Menu
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
            <Link to="/">Home</Link>
        </DropdownItem>
        <DropdownItem>
            <Link to="/Login">Login</Link>
        </DropdownItem>
        <DropdownItem>
            <Link to="/map">Trail Map</Link>
        </DropdownItem>
        <DropdownItem>
            <Link to="/packing">Packing List</Link>
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default Example;
