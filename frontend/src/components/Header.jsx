// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// import { MdMenu, MdClose } from "react-icons/md";
// // import userIcon from "../assets/user.svg";

// const Header = () => {
//   const [active, setActive] = useState(false);
//   const [menuOpened, setMenuOpened] = useState(false);
//   const toggleMenu = () => setMenuOpened(!menuOpened);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         //close the menu if open when scrolling occurs
//         if (menuOpened) {
//           setMenuOpened(false);
//         }
//       }
//       //detect scroll
//       setActive(window.scrollY > 40);
//     };
//     window.addEventListener("scroll", handleScroll);
//     //clean up the event listener when component unmounts
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [menuOpened]); // dependency array ensure that the effect runs when menuOpened changes

//   return (
//     <header
//       className="max-padd-container
//     fixed top-0 w-full
//     left-0 right-0 z-50"
//     >
//       {/* container */}
//       <div
//         className={`${active ? "py-0" : "py-1"} max-padd-container bg-white
//       transition-all duration-200 px-5
//       ring-1 ring-slate-900/5`}
//       >
//         <div className="flexBetween py-3">
//           {/* logo */}
//           <Link to={"/"}>
//             <img
//               src="/src/assets/logo.png"
//               alt="Landmark Realty Group Logo"
//               className="w-[100px] h-[80px] "
//             />
//           </Link>

//           {/* navbar */}
//           <div className="flexCenter gap-x-4">
//             {/* Desktop */}
//             <Navbar
//               containerStyles={
//                 "hidden xl:flex gap-x-5 xl:gap-x-10 uppercase medium-15 ring-1 ring-slate-900/10  p-2 bg-white"
//               }
//             />

//             {/* Mobile */}
//             <Navbar
//               containerStyles={`${
//                 menuOpened
//                   ? "flex items-start flex-col gap-y-8 uppercase fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
//                   : "flex items-start flex-col gap-y-8 uppercase fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
//               }`}
//             />
//           </div>

//           {/* buttons */}
//           <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16 ">
//             {!menuOpened ? (
//               <MdMenu
//                 onClick={toggleMenu}
//                 className="xl:hidden cursor-pointer text-3xl
//               hover:text-blue-700"
//               />
//             ) : (
//               <MdClose
//                 onClick={toggleMenu}
//                 className="xl:hidden cursor-pointer
//               text-3xl hover:text-blue-700"
//               />
//             )}
//             <button className="btn-secondary flexCenter gap-x-2 medium-10 rounded-full">
//               {/* <img src={userIcon} alt="" height={20} width={20} /> */}
//               <span>Sign Up</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { MdMenu, MdClose } from "react-icons/md";
// import userIcon from "../assets/user.svg";

const Header = () => {
  const [active, setActive] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Close the menu if open when scrolling occurs
        if (menuOpened) {
          setMenuOpened(false);
        }
      }
      // Detect scroll
      setActive(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpened]); // Dependency array ensures that the effect runs when menuOpened changes

  return (
    <header
      className={`fixed top-0 w-full left-0 right-0 z-50 ${
        active ? "bg-white shadow-md" : "bg-white"
      } transition-all duration-300`}
    >
      {/* Full-width container */}
      <div className="w-full px-5 sm:px-10 lg:px-16 xl:px-20">
        <div className="flexBetween py-4">
          {/* Logo */}
          <Link to={"/"}>
            <img
              src="/src/assets/logo.png"
              alt="Landmark Realty Group Logo"
              className="w-[100px] h-[80px]"
            />
          </Link>

          {/* Navbar */}
          <div className="flexCenter gap-x-4">
            {/* Desktop Navbar */}
            <Navbar
              containerStyles={
                "hidden xl:flex gap-x-5 xl:gap-x-10 uppercase medium-15"
              }
            />

            {/* Mobile Navbar */}
            <Navbar
              containerStyles={`${
                menuOpened
                  ? "flex items-start flex-col gap-y-8 uppercase fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 z-50"
                  : "flex items-start flex-col gap-y-8 uppercase fixed top-20 -right-[100%] p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              }`}
            />
          </div>

          {/* Buttons */}
          <div className="flexBetween gap-x-3 sm:gap-x-5 bold-16">
            {!menuOpened ? (
              <MdMenu
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-blue-700"
              />
            ) : (
              <MdClose
                onClick={toggleMenu}
                className="xl:hidden cursor-pointer text-3xl hover:text-blue-700"
              />
            )}
            <button className="btn-secondary flexCenter gap-x-2 medium-10 rounded-full">
              {/* <img src={userIcon} alt="" height={20} width={20} /> */}
              <span>Sign Up</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
