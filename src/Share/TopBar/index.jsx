import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "react-bootstrap";
import {Link} from 'react-router-dom'
// import MainModal from "../Modal/Modal";

import logoImage from "../../assets/Gallery/Logo/Logo.png";
// import { customLogout } from "../../Redux/features/User/userSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { FaUserCircle, FaBell } from "react-icons/fa";

const TopBar = () => {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const onMouseEnter = () => {
    setDropdownOpen(true);
  };

  const onMouseLeave = () => {
    setDropdownOpen(false);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  // const handleLogout = () => {
  //   dispatch(customLogout());
  //   setModal(!modal);
  //   navigate("/");
  // };

  return (
    <>
      <div id="Topbar" className="">
        <div className="user">
          <div className="logo">
            <Link to="/home">
            <img
              className="image-fluid"
              src={logoImage}
              alt=""
              maxWidth={250}
              />
              </Link>
          </div>
          <div className="image ms-2">
            <Dropdown
              className="dropdownList"
              onMouseOver={onMouseEnter}
              onMouseLeave={onMouseLeave}
              isOpen={dropdownOpen}
              toggle={toggle}
            >
              <div className="flex items-center justify-center">
                <FaBell className="me-3" color="white" size={25} />
                <DropdownToggle caret>
                  <FaUserCircle size={35} />
                </DropdownToggle>
              </div>
              <DropdownMenu>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem divider />

                <DropdownItem onClick={toggleModal}>LogOut</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      {/* <MainModal
        modalBodyText={"Do you want to log out of your account?"}
        toggleModal={toggleModal}
        cancelToggle={handleLogout}
        modal={modal}
        CancelBtn={"Logout"}
      /> */}
    </>
  );
};

export default TopBar;
