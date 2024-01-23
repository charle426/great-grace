import { motion } from "framer-motion"
export default function HeroSection() {
    return (
      <div id="#">
        <section className="heroBg flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            viewport={{ once: true }}
          >
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
          </motion.div>
        </section>
      </div>
    );
}