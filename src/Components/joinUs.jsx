import joinPic from "../assets/join.png"
export default function JoinUs() {
    return (
        <section>
            <div className="bg-[#022544] px-2 md:px-5 py-5 rounded-[40px]">
                <div className="flex items-center md:flex-row flex-col justify-between gap-5">
                     <div className="flex flex-col gap-5 items-start w-full text-white">
                        <div className="flex items-center gap-2 w-full text-[#489ddd]">
                            <div className="heroline w-[30px]"></div>
                            <p className="w-full">Join Us</p>
                        </div>
                        <p className="max-w-[400px]">
                            Join Us On Sundays by <b>10:00AM</b> (in person only) @
                            KM5 Ikot Ekpene Road, Alaoji OPP. Chibayno filling Station, Aba
                            Abia State <br />
                            or @ Hedzanawoe Assiyeye Lome Togo
                        </p>
                        <h1 className="font-semibold text-[25px]">Come and find Jesus <br/> Come and find Salvation</h1>
                        <div>
                            <p className="text-[20px]">Contact Us On</p>
                            <p>+22891692951 || +2348136611394 || +2348066798451</p>
                        </div>
                    </div>
                    <div className="w-full justify-end flex md:-bottom-[20px] relative">
                        <img src={joinPic} alt="pastors picture" width="300px" />
                    </div>
                </div>
                   
            </div>
        </section>
    )
}