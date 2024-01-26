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