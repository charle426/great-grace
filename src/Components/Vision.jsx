import { faBible, faChurch, faCross } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Vision() {
    return (
      <section className="bg-[#DEDCFF] py-10 my-10">
        <div className="flex flex-col items-center text-center py-10 justify-center gap-4">
          <p>Our Mission</p>
          <h1 className="max-w-[800px] font-semibold">
            Building A Close Relationship With God and Reaching the World with the Love of
            Christ.
          </h1>
            </div>
            <div className="auto-grid">
                <div className="text-center flex flex-col items-center">
                    <div>
                        <FontAwesomeIcon icon={faChurch} className="text-[70px] mb-[30px] font-medium"/>
                    </div>
                    <div className="text-[25px] font-medium mb-[20px]">
                        Our Ministries
                    </div>
                    <div className="text-[#383737cf] max-w-[250px]">
                        Service to other believers and bodies of Christ
                    </div>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div>
                        <FontAwesomeIcon icon={faBible} className="text-[70px] mb-[30px] font-medium"/>
                    </div>
                    <div className="text-[25px] font-medium mb-[20px]">
                        Our Purpose
                    </div>
                    <div className="text-[#383737cf] max-w-[250px]">
                        Worship, fellowship, Evangelism and Ministry
                    </div>
                </div>
                <div className="text-center flex flex-col items-center">
                    <div>
                        <FontAwesomeIcon icon={faCross} className="text-[70px] mb-[30px] font-medium"/>
                    </div>
                    <div className="text-[25px] font-medium mb-[20px]">
                        Our Focus
                    </div>
                    <div className="text-[#383737cf] max-w-[250px]">
                        Equipping Christians for the work of the ministry, to make members belong
                    </div>
                </div>
            </div>
      </section>
    );
}