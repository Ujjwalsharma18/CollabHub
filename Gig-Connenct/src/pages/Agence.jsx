import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import Login from "./Login";


//! Agence page = GetHired Page

const Agence = () => {

 


  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [


    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
  ];

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 28%",
        end: "top -70%",
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: "transform",
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  const [showLogin, setShowLogin] = useState(false);

  return (


    
    <div>
      <div className="parent">
        <div id="page1" className="py-1 ">
          <div
            ref={imageDivRef}
            className="absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-3xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]"
          >
            <img
              ref={imageRef}
              className="h-full object-cover w-full"
              src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"
              alt=""
            />
          </div>
          <div className="relative font-[font2]">
            <div className="lg:mt-[55vh] mt-[30vh]">
              <h1 className="text-[14vw] text-center uppercase leading-[18vw]">
                Our Featured <br />
                Freelancers
              </h1>
            </div>
            <div className="lg:pl-[40%] lg:mt-20 mt-4 p-3">
              <p className="lg:text-6xl text-xl leading-tight">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                At GigConnect, we take pride in presenting our most skilled and
                trusted freelancers. Each professional has been carefully selected
                for their proven expertise and dedication to excellence. They
                bring creative thinking, technical precision, and real-world
                experience to every project. From web development to digital
                design, our freelancers deliver results that make an impact. Their
                passion for innovation and quality ensures client satisfaction
                every time. We believe in building strong partnerships between
                clients and talented creators. Every freelancer here represents
                reliability, skill, and a commitment to success. Explore our top
                talent and find the perfect expert to bring your ideas to life.
              </p>

              
            </div>
            {/* <div className="bg-amber-300">hii</div> */}
            
          </div>
          {/* <div className="bg-amber-300">.</div> */}

          <div className="parent relative bg-amber-200">
  
  <div  id="page1" className="py-0.5 bg-green-950">
    
  </div>

  {/* Second page */}
  {/* <div id="page2" className="h-screen bg-green-300"></div> */}

  {/* 🔥 Place the button OUTSIDE pinned sections */}
  <div className="fixed bottom-175 left-0 right-0 flex justify-center z-[1000]">
    <button
      onClick={() => setShowLogin(true)}
      className="border-2 border-white hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-16 px-10 py-3 rounded-full uppercase bg-black text-white font-semibold transition-all"
    >
      Log In To Be Freelancer
    </button>
  </div>

  {/* Login Modal */}
  {showLogin && (
    <div className="fixed  inset-0  flex items-center justify-center bg-black bg-opacity-70 z-[1000]">
      <div className="relative  bg-[#111] p-8 rounded-xl shadow-x5">
        <button
          onClick={() => setShowLogin(false)}
          className="absolute  top-4 right-5 text-white text-xl font-bold hover:text-[#D3FD50]"
        >
          ✕
        </button>
        <Login />
      </div>
    </div>
  )}
</div>



          
        </div>
        <div id="page2" className=" h-screen"></div>
        {/* <div className="lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-3 pt-1 lg:px-14 border-white rounded-full uppercase">
            <button>LogIn To Be Freelancer</button>
            <Login />
            
          </div> */}
          
      </div>
    </div>
  );
};

export default Agence;
