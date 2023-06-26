'use client';

import { useState } from 'react';

const ColorChanger = () => {
  const [backgroundColor, setBackgroundColor] = useState('pink');
  const [activeTab, setActiveTab] = useState('announcement');

  const changeBackgroundColor = (color, tab) => {
    setBackgroundColor(color);
    setActiveTab(tab);
  };

  return (
    <div>
    <div className={`bg-${backgroundColor}-400 p-4 h-[30rem]`}>
      {/* className={`${archive ? "shine" : ""} mr-2`} */}
      {/* {activeTab === 'announcement' && <div>Announcements</div>} */}
      {<div className={`${activeTab === 'announcement'? `block`: `hidden`}`}>Announcements</div>}
      {activeTab === 'products' && <div>Products</div>}
      {activeTab === 'reviews' && <div>Reviews</div>}
      {activeTab === 'media' && <div>Media</div>}

      {/* <div className="h-40 w-40 mb-4"></div> */}

    </div>
    <button
        className={`bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 mr-2 ${
          activeTab === 'announcement' ? 'bg-pink-700' : ''
        }`}
        onClick={() => changeBackgroundColor('pink', 'announcement')}
      >
        Announcement
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 ${
          activeTab === 'products' ? 'bg-blue-700' : ''
        }`}
        onClick={() => changeBackgroundColor('blue', 'products')}
      >
        Products
      </button>
      <button
        className={`bg-pink-500 hover:bg-pink-700 text-white px-4 py-2 mr-2 ${
          activeTab === 'reviews' ? 'bg-pink-700' : ''
        }`}
        onClick={() => changeBackgroundColor('pink', 'reviews')}
      >
        Reviews
      </button>
      <button
        className={`bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 ${
          activeTab === 'media' ? 'bg-blue-700' : ''
        }`}
        onClick={() => changeBackgroundColor('blue', 'media')}
      >
        Media
      </button>
    </div>
  );
};

export default ColorChanger;
