"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-8">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="col-span-7 place-self-center text-center sm:text-left mr-4"
        >
          <h1 className="text-white text-4xl mb-4 sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "A full stack developer",
                1000,
                "Node.js Expert",
                1000,
                "React JS Developer",
                1000,
                "Next.js Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] mb-6 lg:text-xl text-base sm:text-lg">
            Hello there! I'm Full Stack Developer, I bring a fusion of expertise
            in Node.js, React JS, and the immersive world of Next.js. Crafting
            seamless experiences and shaping interactive web landscapes is not
            just my profession—it's my passion.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit bg-gradient-to-br hover:bg-gradient-to-br font-semibold hover:from-secondary hover:to-secondary from-primary to-secondary hover:bg-slate-200 rounded-full text-white mr-4">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br hover:bg-gradient-to-br font-semibold hover:from-secondary hover:to-secondary from-primary to-secondary bg-transparent  mt-3">
              <span className="block bg-[#121212] rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center lg:mt-0 mt-4">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="/images/about-image.jpg"
              className="rounded-md"
              width={350}
              height={350}
              alt="hero-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
