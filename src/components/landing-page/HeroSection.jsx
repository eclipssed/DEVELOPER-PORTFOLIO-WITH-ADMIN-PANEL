"use client";

import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import AnimationCard from "../../components/landing-page/AnimationCard";

const fetchHeroImage = async () => {
  try {
    const res = await axios("/api/admin-panel/images");
    const data = res.data[0];
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

const fetchHeroText = async () => {
  try {
    const res = await axios("/api/admin-panel/text");
    const data = res.data[0];
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};
const fetchAnimation = async () => {
  try {
    const res = await axios("/api/admin-panel/animation");
    const data = res.data[0];
    return data;
  } catch (error) {
    console.error("Error fetching colors:", error);
  }
};

const HeroSection = () => {
  const [loading, setLoading] = useState(true);
  const [heroData, setHeroData] = useState({
    heroImage: "",
    heroCV: "",
    heroText: "",
  });
  const [animation, setAnimation] = useState({});

  useEffect(() => {
    fetchAnimation().then((res) => {
      setAnimation((prev) => ({ ...prev, ...res }));
    });
    fetchHeroText().then((res) =>
      setHeroData((prev) => ({ ...prev, heroText: res.hero }))
    );
    fetchHeroImage().then((res) => {
      setHeroData((prev) => ({
        ...prev,
        heroImage: res.hero,
        heroCV: res.cv,
      }));
      setLoading(false);
    });
  }, []);

  // Animation is not working...

  // console.log(animation.animeOne);
  let animeOne = animation.animeOne;
  let animeTwo = animation.animeTwo;
  let animeThree = animation.animeThree;
  let animeFour = animation.animeFour;

  // console.log(animeOne);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <section className="lg:py-8  p-16 mt-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="col-span-7 place-self-center text-center sm:text-left mr-4"
        >
          <h1 className="text-white text-4xl mb-4 sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent  bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Hello, I'm
            </span>
            <br />
            {/* <AnimationCard /> */}
            <TypeAnimation
              sequence={[
                animeOne,
                1000,
                animeTwo,
                1000,
                animeThree,
                1000,
                animeFour,
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-light mb-6 lg:text-xl text-base sm:text-lg">
            {heroData.heroText}
          </p>
          <div>
            <Link href="/landing-page/contact">
              <button className="btn-primary">Hire Me</button>
            </Link>
            <button className="btn-secondary">
              <a
                href={heroData.heroCV}
                download={true}
                className="block bg-dark rounded-full px-5 py-2"
              >
                Download CV
              </a>
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
              src={heroData.heroImage}
              className="rounded-md"
              width={450}
              height={450}
              alt="hero-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
