export default function HeroSection(){
    return (
      <section>
        <div className="heroBg flex flex-col justify-center">
          <h1 className="max-w-[500px] gap-[7px] flex flex-wrap text-[#fff] text-[2rem] md:text-[4rem] font-semibold px-5 py-5">
            Great Grace
            <div>
              Ministries
              <div className="heroline"></div>
            </div>
          </h1>
          <div>
            <p className=" px-5 py-5 text-[15px] text-[#dde0fc91]">
              <blockquote className="mb-1">
                Jesus Christ the same today, tomorrow and forever
              </blockquote>
              -Hebrews 13:8-
            </p>
          </div>
        </div>
      </section>
    );
}