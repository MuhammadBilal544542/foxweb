import React, { useState } from "react";
import HamBurgerButton from "../HamBurgerButton";
import { Link, useLocation } from "react-router-dom";
import {
  dashboard,
  wallet,
  userLogs,
  upload,
  availableHits,
} from "../../../../assets/icons/index";
import { IoWallet } from "react-icons/io5";
import { TbCoinFilled } from "react-icons/tb";
import { FaBagShopping,FaLocationDot } from "react-icons/fa6" ;
import { MdPayments } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
const NavBar = ({ toggle, onClick }) => {
  let { pathname } = useLocation();
  const LinkItems = [
    {
      name: "Profile",
      to: "/profile",
      icon: userLogs,
    },
    {
      name: "Wallet  ",
      to: "/wallet",
      icon: <IoWallet  size={25}/>,
    },
    {
      name: "Orders",
      to: "/orders",
      icon: <FaBagShopping size={25}/>,
    },
    {
      name: "Coin Game  ",
      to: "/coinGame",
      icon: <TbCoinFilled size={25}/>,
    },
    
    {
      name: "Address  ",
      to: "/address",
      icon: <FaLocationDot size={25}/>,
    },
    {
      name: "Payment",
      to: "/payment",
      icon: <MdPayments size={25}/>,
    },
    {
      name: "Transaction History",
      to: "/transactionHistory",
      icon: <BiHistory size={25}/>,
    },
  ];

  return (
    <>
      <div id="Nav">
        <div
          className={
            !toggle
              ? "hamBurgerButton mb-3 d-flex justify-content-end text-end"
              : "hamBurgerButton mb-3 d-flex justify-content-center "
          }
        >
          <HamBurgerButton onClick={onClick} toggle={toggle} />
        </div>
        <div className="navItems">
          <h4
            className={
              !toggle ? "ShowOpacity d-block text-center text-white pb-3" : "HideOpacity d-none"
            }
          >
            Account
          </h4>
          {LinkItems.map((item) => (
            <>
              <Link className={"link"} to={item?.to}>
                <div className={item.to === pathname ? "isActive" : ""}>
                  <div
                    className={!toggle ? "list" : "list justify-content-center"}
                  >
                    <i className={!toggle ? "d-flex pe-2" : "d-flex"}>
                      {item.icon}
                    </i>
                    <div className={toggle && ""}>
                      <main
                        className={
                          !toggle ? "ShowOpacity d-block" : "HideOpacity d-none"
                        }
                      >
                        {item.name}
                      </main>
                    </div>
                    <br />
                  </div>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
