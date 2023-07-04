import Image from "next/image";

import Candy from "../../Pics/collection/candy.png";
import Cafe from "../../Pics/collection/cafe.png";
import Accessories from "../../Pics/collection/Accessories.png";
import Bakery from "../../Pics/collection/Bakery.png";
import Burger from "../../Pics/collection/Burger.png";
import Clothes from "../../Pics/collection/clothes.png";
import Flowers from "../../Pics/collection/Flowers.png";
import Market from "../../Pics/collection/Market.png";
import Pizza from "../../Pics/collection/Pizza.png";
import Autoshop from "../../Pics/collection/autoshop.png";
import Petshop from "../../Pics/collection/petshop.png";
import Restaurant from "../../Pics/collection/Restaurant.png";

import React from 'react'

const collection = ({show}) => {

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

    const Subcss = "max-w-screen max-w-full min-h-[200px] flex flex-wrap justify-around relative px-10 pt-10";


  const Productunit = `bg-blue-500 m-2 ${show === 'products' ? '' : 'hidden'}`
  return (
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
  )
}

export default collection
