import {Link} from "react-router-dom";
import { useEffect, useRef } from "react";
import {useLocation} from "react-router-dom"
import logo from "../assets/logo.png"
export default function Navbar({ activeNav }) {
    const navLinks = document.querySelectorAll(".nav-link")
    const path = useLocation()
  const ref = useRef()
  const navRef = useRef()
    
  // function navScrollFunction() {
  //   const scrollPos = window.scrollY

  //   if (scrollPos > 300)
  //   {
  //     navRef.current.classList.add("fixedNav")
  //     // document.getElementById("navbar").classList.add("fixedNav")
  //   } else
  //   {
  //     navRef.current.classList.remove("fixedNav");
  //   }      
  // }

  //  window.addEventListener("scroll", navScrollFunction) 

    // window.addEventListener("load",() => {
    //      if (activeNav === "home")
    // {
    //     document.getElementById("home").style.color = "#489ddd"
    //      }
    // })

    window.addEventListener("resize", () => {
        ref.current.checked = false
    })
   
    //    navLinks.forEach(link => {
    //     const currentUrl = link.id
    //         if (activeNav === currentUrl)
    //         {
    //         link.style.color = "#489ddd"
    //         }else link.style.color = "#242424";
    //  })  
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
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <input
            ref={ref}
            type="checkbox"
            id="nav-checkbox"
            className="nav-checkbox hidden"
          />
          <div className="logo-div flex justify-between items-center w-full">
            <div className="w-full flex items-center ">
              <img src={logo} alt="logo" width="70px" className="" />
              <span className="font-medium text-lg ">GGM</span>
            </div>
            <label htmlFor="nav-checkbox">
              <div className="nav-toggle w-full items-end flex flex-col gap-1 md:hidden ">
                <div></div>
                <div></div>
                <div></div>
              </div>
            </label>
          </div>
          <div className="nav-link-div h-0 w-0 absolute md:top-0 top-[70px] left-0 overflow-hidden md:h-auto md:relative md:w-full duration-1000 ">
            <ul className="list-none flex text-black gap-3 md:pl-10 pt-5 md:flex-row flex-col justify-end px-3">
              <a href="#" className="nav- hover:text-[#489ddd]" id="home">
                <li>Home</li>
              </a>
              <a
                href="#about"
                className="nav-lin hover:text-[#489ddd]"
                id="about-us"
              >
                <li>Who we are</li>
              </a>
              <a
                href="#event"
                className="nav- hover:text-[#489ddd]"
                id="events"
              >
                <li>Events</li>
              </a>
              {/* <Link to="giving" className="nav-link" id="giving">
                <li>Giving</li>
              </Link> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}