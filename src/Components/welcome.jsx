import pic from "../assets/message.jpeg";
import img from "../assets/supernatural2024.jpeg";
export default function Welcome(){
    return (
      <>
        <section id="about">
          <div className="flex flex-col md:flex-row">
            <div className="w-full max-w-[550px]">
              <h1 className="font-semibold text-[3rem]">
                Welcome to Great Grace Ministries
              </h1>
              <p className="mt-2 font-medium text-[22px]">
                Message from our General Overseeer Rev Osondu Dike
              </p>
              <p className="mt-3">
                Blessed be the Lord God Almighty for His gracious provisions in
                our lives. As individuals, as families and as a church
                organization, we have surely experienced manifold blessings of
                God. To Him alone be all the glory, honour, praise, power,
                dominion and majesty, now and forevermore. I indeed appreciate
                the testimonies of Divine All-Round Sufficiency which God has
                given to us in various ways, in different dimensions and at
                varying levels.
              </p>
            </div>
            <div className="w-full">
              {/* <img src={pic} alt="" width="100%" /> */}
            </div>
          </div>
        </section>
          <section>
            <p className="my-2 font-medium text-[22px]">
              We welcome everyone to the new year a year of Supernatural
              Greatness _2024
            </p>
            <div>
              <img src={img} alt="" width="100%" className="rounded-[20px]"/>
            </div>
          </section>
      </>
    );
}