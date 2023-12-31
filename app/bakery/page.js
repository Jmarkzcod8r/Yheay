"use client";

import Image from "next/image";

import Bakery01 from "../../Pics/banners/1st/bakery01.jpg";
import Bakery03 from "../../Pics/banners/2nd/bakery03.jpg";

import Bakery from "../../Pics/collection/Bakery.png";

import KitchenBanner from "../bakery_pics/kitchen-banner.png";
import Profile01 from "../../Pics/profile/golden.jpeg";
import Bakergirl from "../bakery_pics/bakergirl.jpg";
import Wood from "../bakery_pics/wood.png";
import Megaphone from "../bakery_pics/megaphone.png";
import Cart from "../bakery_pics/cart.jpg";
import Trolley from "../bakery_pics/trolley.png";
import Star2 from "../bakery_pics/Starm.png";
import Camera from "../bakery_pics/cam.png";
import Profileguy from "../bakery_pics/profileguy.png";

import Add from "../../Pics/Add.png";
import Del from "../../Pics/Del.png";



import Collection from "./collection.js";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Page() {

  const [screenSize, setScreenSize] = useState("");
  const [show, setShow] = useState ('products')

  const xxl = "40px";
  const xl = `150px`;
  const Subheights = `h-[50px] sm:h-[60px]  2xl:h-[70px]`;
  const Subwidths = ` w-[50px] sm:w-[60px]    2xl:w-[70px]`;

  const Subcssicons = ` ${Subheights} ${Subwidths} `;

  function showproducts (param) {
    setShow (param)
  }

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(`${window.innerWidth}px`);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial screen size
    setScreenSize(`${window.innerWidth}px`);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function param(ok) {
    console.log(ok);
  }

  const numbers = Array.from({ length: 5 }, (_, index) => index + 1);



  return (
    <div className="bg-gray-300    ">
      <h1>Current pixels: {screenSize}</h1>
      <button className="">
      <Image
        src={Bakery}
        alt="Image"
        className="fixed bottom-5 right-5 z-10"
        width={50}
        height={45}
      />
      </button>

      <div className="h-55 sm:h-60 md:h-65 lg:h-70 xl:h-75 2xl:h-80 ">
        <Image src={Bakery03} alt="Logo" className="flex h-full" />
        {/* <div className='text-end  relative top-0'>  <a className="text-pink-400 text-xs" href="https://www.freepik.com/free-vector/hand-drawn-bakery-facebook-cover-design-template_25674632.htm#query=bakery%20cake%20banner&position=3&from_view=search&track=ais">Bakery Image by Freepik</a>
       </div> */}
      </div>

      <div
        className="h-auto flex  flex-column    pb-1
        justify-around bg-blue-600 relative
        "
      >
        {/* <Image
            src={KitchenBanner}
            alt="Logo"
            className="flex h-full relative w-full
            "
          /> */}
        <div className="flex  rounded-sm  ">
          <div className=" p-2  sm:p-4 sm:m-2 rounded-xl">
            <button class="transform hover:scale-110">
              <Image
                // src={Bakergirl}
                src={Profileguy}
                alt="Logo"
                className={`flex   rounded-full ${Subcssicons}    `}
              />
            </button>
          </div>

          <div className=" p-2  sm:p-4 sm:m-2">
            <button class="transform hover:scale-110">
              <Image
                src={Megaphone}
                alt="Logo"
                className={`flex   rounded-full ${Subcssicons}     `}
                title="Announcements"
              />
            </button>
          </div>

          <div className="  p-2  sm:p-4 sm:m-2">
            <button class="transform hover:scale-110" onClick={()=>showproducts('products')}>
              <Image
                src={Trolley}
                alt="Logo"
                className={`flex   rounded-full ${Subcssicons}     `}
                title="Products"
              />
            </button>
          </div>

          <div className="p-2  sm:p-4 sm:m-2">
            <button class="transform hover:scale-110"  onClick={()=>showproducts('reviews')}>
              <Image
                src={Star2}
                alt="Logo"
                className={`flex   rounded-full ${Subcssicons}     `}
                title="Reviews"
              />
            </button>
          </div>

          <div className="  p-2  sm:p-4 sm:m-2 ">
            <button class="transform hover:scale-110">
              <Image
                src={Camera}
                alt="Logo"
                className={`flex   rounded-full ${Subcssicons}     `}
              />
            </button>
          </div>
        </div>


      </div>
      <div className="flex flex-row relative bg-gradient-to-br from-amber-100 to-yellow-500 min-h-[50vh]">

          <div  className={`${
          show === 'products' ? 'block ' : 'hidden'
        } relative z-10 bg-orange-600 h-40 w-10`} >
      <button onClick={()=> console.log('hi')}
        className={`${
          show === 'products' ? 'block ' : 'hidden'
        } h-10 w-10 relative z-10`}
      >
      <Image src={Add} title='Add' alt="Add Icon" className="absolute h-10 w-10 scale-90" />
      </button>

      <button onClick={()=> console.log('hi')}
        className={`${
          show === 'products' ? 'block ' : 'hidden'
        } h-10 w-10 relative z-10`}
      >
      <Image src={Del} title='delete' alt="Add Icon" className="absolute h-10 w-10" />
      </button>

      </div>
      <div className="flex flex-row">
      {numbers.map((number) => (
        <div key={number} className="h-10 w-10 bg-red-400 m-1"></div>
      ))}
    </div>
    </div>
          {/* <Collection show={show}/> */}

    </div>
  );
}
