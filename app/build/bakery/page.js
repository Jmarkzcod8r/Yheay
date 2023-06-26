"use client";

import Image from "next/image";

import Bakery01 from "../../../Pics/banners/1st/bakery01.jpg";
import Bakery03 from "../../../Pics/banners/2nd/bakery03.jpg";

import KitchenBanner from "../bakery_pics/kitchen-banner.png";
import Profile01 from "../../../Pics/profile/golden.jpeg";
import Bakergirl from "../bakery_pics/bakergirl.jpg";
import Wood from "../bakery_pics/wood.png";
import Megaphone from "../bakery_pics/megaphone.png";
import Cart from "../bakery_pics/cart.jpg";
import Trolley from "../bakery_pics/trolley.png";
import Star2 from "../bakery_pics/Starm.png";
import Camera from "../bakery_pics/cam.png";
import Profileguy from "../bakery_pics/profileguy.png";

import Candy from "../../../Pics/collection/candy.png";
import Cafe from "../../../Pics/collection/cafe.png";
import Accessories from "../../../Pics/collection/Accessories.png";
import Bakery from "../../../Pics/collection/Bakery.png";
import Burger from "../../../Pics/collection/Burger.png";
import Clothes from "../../../Pics/collection/clothes.png";
import Flowers from "../../../Pics/collection/Flowers.png";
import Market from "../../../Pics/collection/Market.png";
import Pizza from "../../../Pics/collection/Pizza.png";
import Autoshop from "../../../Pics/collection/autoshop.png";
import Petshop from "../../../Pics/collection/petshop.png";
import Restaurant from "../../../Pics/collection/Restaurant.png";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function Page() {

  const [screenSize, setScreenSize] = useState("");
  const [show, setShow] = useState ('products')

  const Subcss = "max-w-screen max-w-full min-h-[200px] flex flex-wrap justify-around bg-blue-500 relative px-10 pt-10";
  const xxl = "40px";
  const xl = `150px`;
  const Subheights = `h-[50px] sm:h-[60px]  2xl:h-[70px]`;
  const Subwidths = ` w-[50px] sm:w-[60px]    2xl:w-[70px]`;
  const Subcssicons = ` ${Subheights} ${Subwidths} `;
  const Productunit = `bg-blue-500 m-2 ${show === 'products' ? '' : 'hidden'}`


  function showproducts () {
    setShow ('')
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

  function handleClick(shop) {
    console.log("Hello, World!");
    Swal.fire({
      title: shop,
      showDenyButton: true,
      // showCancelButton: true,

      confirmButtonText: "Explore",
      denyButtonText: `Build`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  return (
    <div className="bg-gray-300 min-h-screen ">
      <h1>Current pixels: {screenSize}</h1>

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
        <div className="flex bg-pink11111111-300  rounded-sm  ">
          <div className="bg-red-300  p-2  sm:p-4 sm:m-2 rounded-xl">
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
            <button class="transform hover:scale-110" onClick={showproducts}>
              <Image
                src={Trolley}
                alt="Logo"
                className={`flex   rounded-full ${Subcssicons}     `}
                title="Products"
              />
            </button>
          </div>

          <div className="p-2  sm:p-4 sm:m-2">
            <button class="transform hover:scale-110">
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
        {/* <div className="bg-pink-300  p-2  sm:p-4 sm:m-2">
          <h1>Products</h1>
        </div> */}

        {/* <div className='bg-pink-300 w-[200px]'>asd</div> */}
      </div>

      <div className={`${Subcss} `}>
        {/* For Attribution:  */}
        {/* <a href="https://www.freepik.com/free-vector/shop-store-showcase-set-flat_6180996.htm#query=coffee%20shop&position=30&from_view=keyword&track=ais">Image by sentavio</a> on Freepik */}

        <button
          onClick={() => handleClick("Restaurant")}
          className={`${Productunit}`}
        >
          <span className=" h-[180px] w-[200px]  bg-red-400 m-2 inline-block ">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}

            <Image src={Bakery} alt="Logo" className="flex h-full " />
            <div className="bg-gray-200 mt-1">Bakery</div>
          </span>{" "}
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px]  bg-red-400 m-2 inline-block">
            {/* <button>Explore</button> */}
            <Image src={Cafe} alt="Logo" className="flex h-full " />
            <div className="bg-gray-200 mt-1">Bakery</div>
          </span>{" "}
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] bg-red-400 m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image src={Clothes} alt="Logo" className="flex h-full" />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] bg-red-400 m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image src={Candy} alt="Logo" className="flex h-full " />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] bg-red-400 m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image src={Accessories} alt="Logo" className="flex h-full " />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] bg-red-400 m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image src={Flowers} alt="Logo" className="flex h-full " />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] bg-red-400 m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image src={Market} alt="Logo" className="flex h-full " />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] bg-red-400 m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image src={Pizza} alt="Logo" className="flex h-full " />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px]  m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image
              src={Autoshop}
              alt="Logo"
              className="flex h-full scale-[80%] "
            />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] bg-red-400 m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image src={Autoshop} alt="Logo" className="flex h-full " />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px] m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image
              src={Restaurant}
              alt="Logo"
              className="flex h-full scale-[70%] "
            />
          </span>
        </button>

        <button onClick={handleClick} className={`${Productunit}`}>
          <span className=" h-[180px] w-[200px]  m-2 inline-block">
            {/* <a href='https://pngtree.com/so/store'>store png from pngtree.com/</a> */}
            <Image
              src={Petshop}
              alt="Logo"
              className="flex h-full scale-[70%] "
            />
          </span>
        </button>
      </div>
    </div>
  );
}
