import React from 'react';
import links from './links';

import logo from './images/logo.svg';
import illustration from './images/illustration-intro.svg';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';

import Buttons from './components/Buttons';
import InfoCard from './components/InfoCard';

const App = () => {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <div className="w-full">
      {/* Container */}
      <div className="container mx-auto">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-5 sm:py-8">
          {/* Logo */}
          <div className="md:w-1/3">
            <img src={logo} alt="manage_logo" className="w-[146px] h-[24px] mt-2" />
          </div>
          {/* Mobile Nav */}
          <div className="flex md:hidden">
            <img
              src={openNav ? close : hamburger}
              alt="hamburger"
              onClick={() => setOpenNav((prev) => !prev)}
              className="w-full h-full"
            />
            <div
              className={
                openNav
                  ? 'absolute top-[12%] left-[10%] w-[80%] h-auto bg-white object-contain rounded-md drop-shadow-md'
                  : 'hidden'
              }>
              {/* Mobile NavLinks */}
              <div className="flex flex-col font-vietnam text-center p-3">
                {links.map((el) => (
                  <a
                    href={`#${el.id}`}
                    key={el.id}
                    className="text-vDarkBlue drop-shadow-lg hover:text-darkBlue hover:underline font-vietnam font-[500] my-2">
                    {el.title}
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center w-2/3 justify-between">
            {/* NavLinks */}
            <div className="flex space-x-7 font-vietnam">
              {links.map((el) => (
                <a
                  href={`#${el.id}`}
                  key={el.id}
                  className="text-vDarkBlue hover:text-darkBlue hover:underline">
                  {el.title}
                </a>
              ))}
            </div>
            {/* Button Get Started */}
            <div>
              <Buttons name={'Get Started'} />
            </div>
          </div>
        </nav>
      </div>

      {/* Container */}
      <div className="container mx-auto">
        {/* Hero Section */}
        <section id="hero" className="w-full flex flex-col-reverse md:flex-row my-10">
          {/* Left Item - Info */}
          <div className="flex justify-start ml-3 w-full md:w-2/5">
            {/* Card */}
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-center md:text-left">
                Bring everyone together to build better products.
              </h1>
              <p className="my-6 w-[95%] md:w-[75%] text-center md:text-left">
                Manage makes it simple for software teams to plan day-to-day tasks while keeping the
                larger team goals in view.
              </p>
              <div>
                <Buttons name={'Get Started'} />
              </div>
            </div>
          </div>
          {/* Right Items - Graphs */}
          <div className="flex w-full md:w-3/5">
            <img src={illustration} alt="illustration" className="w-full h-full" />
          </div>
        </section>

        {/* Differences */}
        <section id="differences" className="my-9">
          {/* Left Item - Info */}
          <div className="flex justify-start ml-3 w-full md:w-2/5">
            {/* Card */}
            <div className="flex flex-col justify-center items-center md:items-start">
              <h1 className="text-center md:text-left">What`s different about Manage?</h1>
              <p className="my-6 w-[95%] md:w-[75%] text-center md:text-left">
                Manage provides all the functionality your team needs, without the complexity. Our
                software is tailor-made for modern digital product teams.
              </p>
            </div>
          </div>
          {/* Right Items - Differences */}
          <div className="flex flex-col w-full md:w-3/5">
            <InfoCard
              text="See how your day-to-day tasks fir into the wider vision. Go from tracking progress at the
          milestone level all the way done to the smallest of details. Never lose sight of the
          bigger picture again."
              id="01"
              title="Track company-wide progress"
            />
            <InfoCard
              text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders infromed."
              id="02"
              title="Advanced built-in reports"
            />
            <InfoCard
              text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
              id="03"
              title="Everything you need in one place"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
