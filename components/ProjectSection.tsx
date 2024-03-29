"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import ProjectCarousel from "./ProjectCarousel";

const ProjectSection = () => {
  const carouselContainer = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          opacity: 0,
          stagger: 0.2,
          ease: "back",
        },
        scrollTrigger: {
          trigger: "#carousel",
          toggleActions: "play none play reverse",
        },
      });

      tl.from(["#carousel .title h2", "#carousel .title .line"], {
        x: "50",
      });
    },
    { scope: carouselContainer }
  );

  return (
    <section
      id="carousel"
      className="my-10 text-blackColor"
      ref={carouselContainer}
    >
      <div className="title mb-8">
        <h2 className="text-2xl lg:text-4xl">Our Projects</h2>
        <div className="line bg-redColor w-10 h-1 inline-block mr-1"></div>
        <div className="line bg-yellowColor w-10 h-1 inline-block mr-1"></div>
        <div className="line bg-greenColor w-10 h-1 inline-block mr-1"></div>
      </div>
      <ProjectCarousel />
    </section>
  );
};

export default ProjectSection;
