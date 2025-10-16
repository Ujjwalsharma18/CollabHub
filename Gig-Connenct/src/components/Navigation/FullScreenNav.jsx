import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useEffect, useRef, useState } from "react";
import { NavbarContext } from "../../context/NavContext";

import { NavbarColorContext } from "../../context/NavContext";

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null);
  const fullScreenRef = useRef(null);

  const [navOpen, setNavOpen] = useContext(NavbarContext);
  const [navColor, setNavColor] = useContext(NavbarColorContext);

  function gsapAnimation() {
    const tl = gsap.timeline();
    tl.to(".fullscreennav", {
      display: "block",
    });
    tl.to(".stairing", {
      delay: 0.2,
      height: "100%",
      stagger: {
        amount: -0.3,
      },
    });
    tl.to(".link", {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3,
      },
    });
    tl.to(".navlink", {
      opacity: 1,
    });
  }
  function gsapAnimationReverse() {
    const tl = gsap.timeline();
    tl.to(".link", {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".stairing", {
      height: 0,
      stagger: {
        amount: 0.1,
      },
    });
    tl.to(".navlink", {
      opacity: 0,
    });
    tl.to(".fullscreennav", {
      display: "none",
    });
  }

  useGSAP(
    function () {
      if (navOpen) {
        gsapAnimation();
      } else {
        gsapAnimationReverse();
      }
    },
    [navOpen]
  );

  return (
    <div
      ref={fullScreenRef}
      id="fullscreennav"
      className="fullscreennav overflow-x-hidden  text-white  h-full w-full z-50  absolute "
    >
        {/* // Strairs animation */}
      <div className="h-screen w-full fixed">
        <div className="h-full w-full flex">
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
          <div className="stairing h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className="relative">
        <div className="navlink flex w-full justify-between lg:p-3 p-2 items-start ">
          <div className="">
            <div className="lg:w-36 w-24 p-2.5">
              <a href="/" style={{ textDecoration: "none" }}>
                <svg
                  className="w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 103 44"
                >
                  {/* F */}
                  <path
                    fill={navColor}
                    d="M0,0 H20 V8 H8 V18 H18 V26 H8 V44 H0 V0 Z"
                  />

                  {/* Dot */}
                  <path fill={navColor} d="M24,36 H28 V40 H24 V36 Z" />

                  {/* L */}
                  <path fill={navColor} d="M32,0 H40 V36 H50 V44 H32 V0 Z" />

                  {/* N */}
                  <path
                    fill={navColor}
                    d="M54,0 H62 V44 H54 V0 Z M62,0 L70,44 H70 V0 Z"
                  />

                  {/* C */}
                  <path fill={navColor} d="M74,8 H90 V36 H74 V8 Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* // cross icon */}
          <div
            onClick={() => {
              setNavOpen(false);
            }}
            className="lg:h-20 h-20 w-20 lg:w-20 relative cursor-pointer "
          >
            <div className="lg:h-28 h-28 lg:w-1 w-0.5 -rotate-43 origin-top absolute bg-[#D3FD50]"></div>
            <div className="lg:h-28 h-28 lg:w-1 w-0.5 right-0 rotate-43 origin-top absolute bg-[#D3FD50]"></div>
          </div>
        </div>

        {/* // nav links */}
        <div className=" py-16  ">
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Top Projects
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4    uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[7vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Podcast
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-t-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Contact
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="link origin-top relative border-y-1 border-white">
            <h1 className="font-[font2] text-5xl lg:text-[7vw] text-center lg:leading-[0.8] lg:pt-10 pt-3 uppercase">
              Blogs
            </h1>
            <div className="moveLink absolute text-black flex top-0 bg-[#D3FD50]">
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
              <div className="moveX flex items-center">
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                  alt=""
                />
                <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                  Will work for coffee?
                </h2>
                <img
                  className="lg:h-36 h-14 rounded-full shrink-0 lg:w-96 w-32 object-cover"
                  src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
