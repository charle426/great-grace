import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png"; 
export default function Footer() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src={logo} alt="logo" width="60%" />
          <h1>Great Grace Ministries</h1>
        </div>
        <div>
          <p>
            © Copyright GGM 2023. All Right Reserved.
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <a href="https://www.facebook.com/profile.php?id=100013676500051&mibextid=ZbWKwL" className="rounded-full bg-[#0000006e] text-slate-200 h-7 group w-7 flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebook} className="group-hover:text-blue-500"/>
          </a>
          <a href="" className="rounded-full bg-[#0000006e] text-slate-200 h-7 group w-7 flex items-center justify-center">
            <FontAwesomeIcon icon={faWhatsapp} className="group-hover:text-green-500"/>
          </a>
          <a href="greatgracemissinos211@gmail.com" className="rounded-full bg-[#0000006e] text-slate-200 h-7 group w-7 flex items-center justify-center">
            <FontAwesomeIcon icon={faEnvelope} className="group-hover:text-red-500"/>
          </a>
        </div>
      </div>
    </section>

  )
}
