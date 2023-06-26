import React from 'react';

const Login = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getNumberOfDays = (month, year) => {
    return new Date(year, month, 0).getDate();
  };

  return (
    <div className='w-screen'>
      <div className="bg-pink-400 flex overflow-x-scroll md:overflow-x-auto">
        {months.map((month, index) => {
          const numberOfDays = getNumberOfDays(index + 1, 2023);
          const dayDivs = Array.from({ length: numberOfDays }, (_, dayIndex) => (
            <div key={dayIndex} className="h-1 w-1 m-0.5 md:h-3 md:w-3 bg-slate-500 md:m-1 inline-block"></div>
          ));

          return (
            <div key={index} className="w-[30em] bg-blue-700 h-50 m-2">
              {month}
              <div className='justify-around block'>
                {dayDivs}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Login;
