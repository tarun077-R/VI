import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {
 const [showcontent,setshowcontent]= useState(false)
  useGSAP(()=>{
    const tl=gsap.timeline();
    tl.to(".vi-mask-group",{
      rotate: 10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%"
    }).to(".vi-mask-group",{
      scale:10,
      duration:2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
if(this.progress()>=.9){
  document.querySelector(".svg").remove();
  setshowcontent(true);
  this.kill()
}
      }

    })
  })
  useGSAP(()=>{
    if(!showcontent) return;
    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut"
    })
    gsap.to(".sky",{
      scale:1.3,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })
    gsap.to(".bg",{
      scale:1.3,
      rotate:0,
      duration:2,
      delay:"-0.8",
      ease:"Expo.easeInOut"
    })
    gsap.to(".character",{
      scale: 1,
      bottom: "-25%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    })
    gsap.to(".Text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });
    const main=document.querySelector(".main");
    main?.addEventListener("mousemove",function(e){
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40; // -20% to +20%
gsap.to(".Imagediv .Text", {
  xPercent: xMove,   // instead of x
  duration: 0.5,
      ease: "power3.out"

})

      gsap.to(".sky",{
        x:xMove,
        duration: 0.6,
            ease: "power2.out"

      })
      gsap.to(".bg",{
        x:xMove*1.7,
        duration: 0.8,
            ease: "power2.out"

      })
    })
  },[showcontent])
  return (
    <>
    <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showcontent && (<div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className='Landing w-full h-screen bg-black overflow-hidden relative'>
          <div className="Navbar absolute top-0 z-10 left-0 w-full py-10 px-10">
            <div className='logo flex  gap-5'>

            <div className="lines flex flex-col gap-[5px]">
              <div className="line w-10 h-1 bg-white "></div>
              <div className="line w-8 h-1 bg-white "></div>
              <div className="line w-5 h-1 bg-white "></div>
            </div>
              <h3 className='text-3xl text-white leading-none -mt-[9px]'>Tarun Rawat</h3>

            </div>

          </div>
         
        <div className="Imagediv  relative w-full h-screen overflow-hidden">
          <img className='sky scale-[1.4] rotate-[-20deg] absolute top-0 w-full h-full object-cover'  src="./sky.png" alt="" />
          <img className='bg scale-[1.7] rotate-[-3deg] absolute top-0 w-full h-full object-cover' src="./bg.png" alt="" />
           <div className="Text text-white absolute flex flex-col gap-3 top-10 left-1/2 -translate-x-1/3 scale-[1.4] rotate-[-10deg]">
           <h1 className='text-[10rem] leading-none -ml-40'>Tarun</h1>
           <h1 className='text-[10rem] leading-none ml-20'>Singh</h1>
           <h1 className='text-[10rem] leading-none -ml-40'>Rawat</h1>
          </div>
          <img className='character absolute -bottom-[550px] w-[400px] left-1/2 -translate-x-1/2 scale-[3] rotate-[-20deg]' src="./boy.png" alt="" />
        </div>
    <div className="Btmbar  text-white absolute bottom-0 left-0 w-full py-5 px-2 bg-gradient-to-t from-black to-transparent">
              <div className=" flex gap-4 items-center">
                <i className="text-4xl ri-arrow-down-line"></i>
                <h3 className="text-xl -mt-[5px]">
                  Scroll Down
                </h3>
       </div>
       <img className='h-[35px] absolute top-7 left-1/2 -translate-y-1/2 -translate-x-1/2' src="./ps5.png" alt="" />
        </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center px-10 bg-black">
          <div className="cntr w-full flex text-white h-[80%] ">
          <div className="limg w-1/2 h-full relative">
          <img className='character drop-shadow-[0_0_10px_#ffffaa] drop-shadow-[0_0_25px_#1F1204] drop-shadow-[0_0_45px_#333] h-[30rem] scale-[1.3] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="./boy2.png" alt="" />
          </div>
          <div className="rg w-[40%] py-0">
              <h1 className="text-8xl">Still Running,</h1>
                <h1 className="text-8xl">Not Hunting</h1>
                <p className="mt-9 text-sm font-mono">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 text-sm font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <p className="mt-5 text-sm font-mono">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-6 py-6 text-black mt-10 text-4xl">
                  Download Now
                </button>
          </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default App
