import React from 'react';

const Buttons = ({ name, style, white }) => {
  return (
    <button
      className={`${
        white === true ? 'bg-white text-brigthRed' : 'bg-brigthRed text-white'
      } rounded-3xl px-10 py-3 ${style} shadow-md drop-shadow-md font-vietnam font-normal hover:opacity-75`}>
      {name}
    </button>
  );
};

export default Buttons;
