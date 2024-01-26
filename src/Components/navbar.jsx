import {Link} from "react-router-dom";
import { useEffect, useRef } from "react";
import {useLocation} from "react-router-dom"
import logo from "../assets/logo.png"
export default function Navbar({ activeNav }) {
    const navLinks = document.querySelectorAll(".nav-link")
    const path = useLocation()
  const ref = useRef()
  const navRef = useRef()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [path])
    
  return (
    <>
      <nav
        className="top-0 left-0 w-full absolute z-[1000] duration-1000 bg-transparent text-white"
        ref={navRef}
        id="navbar"
      >
        <div>
          <div className="logo-div flex items-start w-full">
            <Link to="/">
              <div className="w-full flex items-center ">
                <img src={logo} alt="logo" width="70px" className="" />
                <span className="font-medium text-lg ">GGM</span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}