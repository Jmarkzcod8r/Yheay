'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

import Pic from '../Pics/pic.jpg';
import Bags from '../Pics/Bags.jpg';
import SimpleStore from '../Pics/Simple_store.png'
import OldStore from '../Pics/old_store.png'
import LightStore from '../Pics/light_store.png'

import Candy from '../Pics/collection/candy.png'
import Cafe from '../Pics/collection/cafe.png'
import Accessories from '../Pics/collection/Accessories.png'
import Bakery from '../Pics/collection/Bakery.png'
import Burger from '../Pics/collection/Burger.png'
import Clothes from '../Pics/collection/clothes.png'
import Flowers from '../Pics/collection/Flowers-nobg.png'
import Market from '../Pics/collection/Market.png'
import Pizza from '../Pics/collection/Pizza.png'
import Autoshop from '../Pics/collection/autoshop.png'
import Petshop from '../Pics/collection/petshop.png'
import Restaurant from '../Pics/collection/Restaurant.png'

import Swal from "sweetalert2";
import { handleClientScriptLoad } from 'next/script';



export default function Home() {
  const router = useRouter();

  function param(ok) {
    console.log(ok)
  }

  function getNumberOfDays(month, year) {
    return new Date(year, month, 0).getDate();
  }


  function handleClick (shop){

    // console.log('Hello, World!');
    // console.log(getNumberOfDays(2, 2023)); // Output: 28 (February 2023)
    // console.log(getNumberOfDays(9, 2023)); // Output: 30 (September 2023)
    // console.log(getNumberOfDays(12, 2022)); // Output: 31 (December 2022)

    Swal.fire({
      title: shop,
      showDenyButton: true,
      // showCancelButton: true,

      confirmButtonText: 'Explore',
      denyButtonText: `Build`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        router.push(`/${shop}`);
        // Swal.fire('Changes are not saved', '', 'info')
      }
    })

}
  return (
    <div>



    <div className="flex items-center justify-center bg-gray-800 text-white w-full p-4">
      <div className='justify-between w-[40%] flex bg-pink-800'>
       <button onClick={handleClick}>Home</button>
       <button onClick={() => param('yo')}>About</button>
       <button>Login</button>
       <button>Sign Up</button>
       </div>
    </div>
    {/* <div>
    Explore</div> */}

    <div className='relative'>
    <div className='absolute justify-center text-center flex items-center bg-blue-700 w-full h-20 mt-8 z-10'>
        Enhance your online presence. Build a store with us today!

    </div>

    <Image src={Pic} alt="Logo" className='flex relative h-screen '/>
    </div>
    {/* <Image src={'https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} width={20} height={20} alt="Logo" className='flex h-full'/> */}


    {/* <a href="#" className="sticky bottom-20 left-[90%]  bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
        Orders
    </a> */}
    {/* <div className="sticky bg-red-500 bottom-20">
    <button  className="sticky  left-[90%]  bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
      style={{ position: '-webkit-sticky', position: 'sticky' }}
    >
        Products
    </button>
    <button  className="sticky  left-[80%]  bg-red-500 text-white px-4 py-2 rounded cursor-pointer"
      style={{ position: '-webkit-sticky', position: 'sticky' }}
    >
        Products
    </button>
    </div> */}

    <div className="max-w-screen max-w-full flex flex-wrap justify-around border-red-500 relative px-10">
    {/* For Attribution:  */}
    {/* <a href="https://www.freepik.com/free-vector/shop-store-showcase-set-flat_6180996.htm#query=coffee%20shop&position=30&from_view=keyword&track=ais">Image by sentavio</a> on Freepik */}


      <button onClick={() => handleClick('bakery')}>
      <span className=' h-[180px] w-[200px]  bg-red-400 m-2 inline-block '>
      <Image src={Bakery} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Cafe')}>
      <span className=' h-[180px] w-[200px]  bg-red-400 m-2 inline-block'>
      <Image src={Cafe} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Clothes')}>
      <span className=' h-[180px] w-[200px] bg-red-400 m-2 inline-block'>
      <Image src={Clothes} alt="Logo" className='flex h-full'/>
      </span>
      </button>

      <button onClick={() => handleClick('Candy')}>
      <span className=' h-[180px] w-[200px] bg-red-400 m-2 inline-block'>
      <Image src={Candy} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Accessories')}>
      <span className=' h-[180px] w-[200px] bg-red-400 m-2 inline-block'>
      <Image src={Accessories} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Flowers')}>
      <span className=' h-[180px] w-[200px] m-2 inline-block'>
      <Image src={Flowers} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Market')}>
      <span className=' h-[180px] w-[200px] bg-red-400 m-2 inline-block'>
      <Image src={Market} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Pizza')}>
      <span className=' h-[180px] w-[200px] bg-red-400 m-2 inline-block'>
      <Image src={Pizza} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Autoshop')}>
      <span className=' h-[180px] w-[200px]  m-2 inline-block'>
      <Image src={Autoshop} alt="Logo" className='flex h-full scale-[80%] '/>
      </span>
      </button>

      <button onClick={() => handleClick('Autoshop')}>
      <span className=' h-[180px] w-[200px] bg-red-400 m-2 inline-block'>
      <Image src={Autoshop} alt="Logo" className='flex h-full '/>
      </span>
      </button>

      <button onClick={() => handleClick('Restaurant')}>
      <span className=' h-[180px] w-[200px] m-2 inline-block'>
      <Image src={Restaurant} alt="Logo" className='flex h-full scale-[70%] '/>
      </span>
      </button>

      <button onClick={() => handleClick('Pet Shop')}>
      <span className=' h-[180px] w-[200px]  m-2 inline-block'>
      <Image src={Petshop} alt="Logo" className='flex h-full scale-[70%] '/>
      </span>
      </button>






    </div>


</div>
  )
}
