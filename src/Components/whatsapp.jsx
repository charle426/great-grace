import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Whatsapp() {
    return (
      <section className="bg-[#433bff]">
        <div className="flex flex-col md:flex-row gap-5 w-full py-8 justify-between text-[#f7f7f7] items-center">
          <h1 className="font-semibold">
            To Receive Updates And News,
            <br />
            or to Send a Prayer Request via WhatsApp
            <br />
            Kindly Click This Button!
          </h1>
          <div>
                    <a className="group" href="https://api.whatsapp.com/send?phone=+22891692951&text=Hello,%20GGM.%20Kindly%20add%20me%20to%20news%20update">
                        <button className="flex gap-2 items-center py-4 px-10 border-[3px] border-black group-hover:bg-black group-hover:text-white duration-200">
                            Whatsapp <FontAwesomeIcon icon={faWhatsapp} className="group-hover:text-green-500"/>
                        </button>
            </a>
          </div>
        </div>
      </section>
    );
}