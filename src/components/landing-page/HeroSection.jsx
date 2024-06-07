import Image from "next/image";
import { MotionDiv } from "@/components/MotionDiv";
import Link from "next/link";
import AnimationCard from "../../components/landing-page/AnimationCard";

const HeroSection = async ({ animation, heroText, heroImage }) => {
  return (
    <section className="lg:py-8 max-sm:px-0 mt-32 max-sm:mt-24 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <MotionDiv
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
            <AnimationCard animation={animation} />
          </h1>
          <p className="text-light mb-6 lg:text-xl text-base sm:text-lg">
            {heroText}
          </p>
          <div>
            <Link href="#contact">
              <button className="btn-primary">Hire Me</button>
            </Link>
            <button className="btn-secondary">
              <a
                href={"/cv.pdf"}
                download={true}
                className="block bg-dark rounded-full px-5 py-2 "
              >
                Download CV
              </a>
            </button>
          </div>
        </MotionDiv>
        <div className="col-span-5 place-self-center lg:mt-0 mt-4">
          <MotionDiv
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src={heroImage}
              className="rounded-md"
              width={450}
              height={450}
              alt="hero-image"
            />
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
