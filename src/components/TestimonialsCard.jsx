import React from 'react';
import anisha from '../images/avatar-anisha.png';
import ali from '../images/avatar-ali.png';
import richard from '../images/avatar-richard.png';

const TestimonialsCard = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-start justify-center items-center md:space-x-8">
      {/* Card */}
      <div className="hidden md:flex md:flex-col mx-auto bg-vLightGrey text-center px-7 object-contain md:w-1/3">
        <img src={anisha} alt="anisha" className="mx-auto w-16 h-16 relative -top-7" />
        <h5 className="text-center">Anisha Li</h5>
        <p className="my-6 w-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem reprehenderit ex
          in quis culpa, numquam sunt vero. Sapiente esse rerum natus quasi modi iste quae amet
          soluta quisquam minus!
        </p>
      </div>

      {/* Card */}
      <div className="flex flex-col mx-auto bg-vLightGrey text-center px-7 object-contain md:w-1/3">
        <img src={ali} alt="ali" className="mx-auto w-16 h-16 relative -top-7" />
        <h5 className="text-center">Ali Bravo</h5>
        <p className="my-6 w-auto text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, accusamus ex
          voluptatum non minus quam magni itaque quaerat voluptates labore natus quas cupiditate
          facilis est eligendi esse in sit ipsam!
        </p>
      </div>

      {/* Card */}
      <div className="hidden md:flex md:flex-col mx-auto bg-vLightGrey text-center px-7 object-contain md:w-1/3">
        <img src={richard} alt="richard" className="mx-auto w-16 h-16 relative -top-7" />
        <h5 className="text-center">Richard Watts</h5>
        <p className="my-6 w-auto text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias odio error magnam iusto
          molestiae ad vitae optio rerum aliquam consequuntur repellat voluptas in consequatur animi
          soluta provident, culpa suscipit velit expedita, distinctio blanditiis. Numquam, tempore.
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCard;

// className="relative bottom-7 left-[50%] md:left-[50%] h-16 w-16"
