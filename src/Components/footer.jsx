import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../assets/logo.png"; 
export default function Footer() {
  return (
    <section className="bg-[#dedcff] py-10 flex justify-center items-center h-auto md:h-[80vh]">
      <div>

      <div className="flex justify-start flex-col md:flex-row items-start gap-5">
        <div className="flex flex-col w-full max-w-[400px] justify-center gap-2">
          <img src={logo} alt="logo" width="30%" className="drop-shadow-md" />
          <h1 className="font-[600] md:text-[2rem]">Great Grace Ministries</h1>
        </div>
        <div className="flex-col w-full flex gap-2">
          <h3 className="font-semibold text-[20px]">Address</h3>
          <div className="flex flex-col mb-3 gap-1 items-start max-w-[300px]">
            <p>_Nigeria</p>
            <p>
              KM5 Ikot Ekpene Road, Alaoji OPP. Chibayno filling Station, Aba
              Abia State
            </p>
          </div>
          <div className="flex flex-col my-3 gap-1 items-start max-w-[300px]">
            <p>_Togo</p>
            <p>Hedzanawoe Assiyeye Lome Togo</p>
          </div>
        </div>
        <div className="flex-col flex gap-2 w-full">
          <h3 className="font-semibold text-[20px]">Get in touch</h3>
          <div className="flex gap-1 items-center">
            <a
              href="https://www.facebook.com/profile.php?id=100013676500051&mibextid=ZbWKwL"
              className="rounded-full bg-[#0000006e] text-slate-200 h-7 group w-7 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="group-hover:text-blue-500"
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+22891692951&text=Hello,%20GGM.%20Kindly%20add%20me%20to%20news%20update"
              className="rounded-full bg-[#0000006e] text-slate-200 h-7 group w-7 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="group-hover:text-green-500"
              />
            </a>
            <a
              href="greatgracemissinos211@gmail.com"
              className="rounded-full bg-[#0000006e] text-slate-200 h-7 group w-7 flex items-center justify-center"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="group-hover:text-red-500"
              />
            </a>
          </div>
        </div>
          <div className="w-full">
            <h1 className="text-[2.5rem] font-[600]">
              We'll be Happy to Hear from You!
            </h1>
          </div>
      </div>
      <div className="mt-10">
        <p className="underline">© Copyright GGM 2023. All Right Reserved.</p>
      </div>
      </div>
    </section>
  );
}
