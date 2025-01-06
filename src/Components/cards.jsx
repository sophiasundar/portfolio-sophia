
import React from 'react';

function Cardss(props) {
  return (
    <div className="cube flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 transform transition-transform duration-500 hover:rotate-12">
      <img
        src={props.details.image}
        alt="logo of skill and tools"
        className="w-20 h-20 mb-3"
      />
      <p className="text-lg font-semibold text-gray-700">{props.details.name}</p>
    </div>
  );
}

export default Cardss;
