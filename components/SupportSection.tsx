"use client";

import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import supportImg from "../public/assets/images/support-img.webp";

const SupportSection = () => {
  const supportContainer = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        defaults: {
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.in",
        },
        scrollTrigger: {
          trigger: "#support",
          toggleActions: "play none play reverse",
        },
      });

      tl.from(["#support .title h2", "#support .title div"], {
        x: "40",
      })
        .from(
          ["#support p", "#support .btn"],
          {
            x: "40",
          },
          "<"
        )
        .from(
          "#support .support",
          {
            y: "50",
          },
          "<"
        );
    },
    { scope: supportContainer }
  );

  return (
    <section
      id="support"
      className="mt-16 text-blackColor"
      ref={supportContainer}
    >
      <div className="title">
        <h2 className="text-2xl lg:text-4xl">Supporting Communities</h2>
        <div className="bg-redColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-yellowColor w-10 h-1 inline-block mr-1"></div>
        <div className="bg-greenColor w-10 h-1 inline-block mr-1"></div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="mt-10 flex flex-col gap-4">
          <p>
            65% of the mothers we support are in employment, compared to less
            than 30% in 2013
          </p>
          <p>
            Children need a sustainable and resilient community around them to
            thrive in. Improving local prosperity is key to breaking the cycle
            of poverty.
          </p>
          <p>
            We work with local communities in Ghana to deliver our services,
            drive prosperity and create employment opportunities.
          </p>
          {/* <div className="mt-10 btn">
            <Link
              className="bg-greenColor text-white uppercase font-bold px-10 py-3 rounded-lg shadow-lg hover:opacity-80 transition-all hover:translate-y-1 duration-500"
              href="/projects/academy"
            >
              Learn More
            </Link>
          </div> */}
        </div>
        <div className="support">
          <Image
            className="rounded-xl shadow-2xl w-[850px] border-2 border-greenColor"
            src={supportImg}
            alt="support"
          />
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
