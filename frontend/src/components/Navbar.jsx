import React from "react";
import {
  MdAddHome,
  MdHomeWork,
  MdInfo,
  MdPermContactCalendar,
  MdStore,
} from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {/* home */}
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "active-link navbarStyleForLargeScreen flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 rounded-full px-2 py-1"
        }
      >
        <MdHomeWork />
        <div>Home</div>
      </NavLink>

      {/* sellers */}
      <NavLink
        to={"/sellers"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 px-2 py-1"
        }
      >
        <MdStore />
        <div>Sellers</div>
      </NavLink>

      {/* buyers */}
      <NavLink
        to={"/buyers"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 px-2 py-1"
        }
      >
        <FaShoppingCart />
        <div>Buyers</div>
      </NavLink>

      {/* faq */}
      {/* <NavLink
        to={"/faq"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 px-2 py-1"
        }
      >
        <MdHomeWork />
        <div>FAQ</div>
      </NavLink> */}

      {/* listing */}
      <NavLink
        to={"/listing"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 px-2 py-1"
        }
      >
        <RiCheckboxMultipleBlankFill />
        <div>Listing</div>
      </NavLink>

      {/* add property */}
      <NavLink
        to={"/addproperty"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 px-2 py-1"
        }
      >
        <MdAddHome />
        <div>Add Property</div>
      </NavLink>

      {/* contact */}
      <NavLink
        to={"/contact"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 px-2 py-1"
        }
      >
        <MdPermContactCalendar />
        <div>Contact</div>
      </NavLink>

      {/* about */}
      <NavLink
        to={"/about"}
        className={({ isActive }) =>
          isActive
            ? "active-link flexCenter navbarStyle gap-x-1 px-2 py-1"
            : "flexCenter gap-x-1 px-2 py-1"
        }
      >
        <MdInfo />
        <div>About</div>
      </NavLink>
    </nav>
  );
};

export default Navbar;
