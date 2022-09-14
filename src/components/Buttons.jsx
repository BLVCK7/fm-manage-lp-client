import React from 'react';

const Buttons = ({ name, style }) => {
  return (
    <button
      className={`bg-brigthRed rounded-3xl text-white px-10 py-3 ${style} shadow-md drop-shadow-md font-vietnam font-normal`}>
      {name}
    </button>
  );
};

export default Buttons;
