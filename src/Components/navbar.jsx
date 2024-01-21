import {Link} from "react-router-dom";
import { useEffect, useRef } from "react";
import {useLocation} from "react-router-dom"
import logo from "../assets/logo.png"
export default function Navbar({ activeNav }) {
    const navLinks = document.querySelectorAll(".nav-link")
    const path = useLocation()
    const ref = useRef()
    // console.log(path)
    window.addEventListener("load",() => {
         if (activeNav === "home")
    {
        document.getElementById("home").style.color = "#489ddd"
         }
    })

    window.addEventListener("resize", () => {
        ref.current.checked = false
    })
   
       navLinks.forEach(link => {
        const currentUrl = link.id
            if (activeNav === currentUrl)
            {
            link.style.color = "#489ddd"
            }else link.style.color = "#242424";
     })  
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [path])
    
  return (
    <>
          <nav className="relative z-[1000]
      ">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <input
            ref={ref}
            type="checkbox"
            id="nav-checkbox"
            className="nav-checkbox hidden"
          />
          <div className="logo-div flex justify-between items-center w-full">
            <div className="w-full flex items-center ">
              <img
                src={logo}
                alt="logo"
                width="70px"
                className=""
              />
              <span className="font-medium text-lg text-[#0571C3]">GGM</span>
            </div>
            <label htmlFor="nav-checkbox">
              <div className="nav-toggle w-full items-end flex flex-col gap-1 md:hidden ">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </label>
          </div>
          <div className="nav-link-div h-0 w-0 absolute bg-[#fff] md:top-0 top-[70px] left-0 overflow-hidden md:h-auto md:relative md:w-full duration-1000 ">
            <ul className="list-none flex gap-3 md:pl-10 pt-5 md:flex-row flex-col justify-end">
              <Link to="/" className="nav-link" id="home">
                <li>Home</li>
              </Link>
              <Link to="about-us" className="nav-link" id="about-us">
                <li>Who we are</li>
              </Link>
              <Link to="events" className="nav-link" id="events">
                <li>Events</li>
              </Link>
              <Link to="giving" className="nav-link" id="giving">
                <li>Giving</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}