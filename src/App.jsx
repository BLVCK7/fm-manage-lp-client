import React from 'react';
import links from './links';

import logo from './images/logo.svg';
import illustration from './images/illustration-intro.svg';
import hamburger from './images/icon-hamburger.svg';
import close from './images/icon-close.svg';

import facebook from './images/icon-facebook.svg';
import youtube from './images/icon-youtube.svg';
import twitter from './images/icon-twitter.svg';
import pinterest from './images/icon-pinterest.svg';
import instagram from './images/icon-instagram.svg';
import logoWhite from './images/logo-white.svg';

import Buttons from './components/Buttons';
import InfoCard from './components/InfoCard';
import TestimonialsCard from './components/TestimonialsCard';

const App = () => {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <div className="w-auto">
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
                    className="text-vDarkBlue drop-shadow-lg hover:text-darkGreyishBlue font-vietnam font-[500] my-2">
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
                  className="text-vDarkBlue hover:text-darkGreyishBlue">
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
      <div className="container mx-auto w-auto">
        {/* Hero Section */}
        <section id="hero" className="w-auto flex flex-col-reverse md:flex-row my-10">
          {/* Left Item - Info */}
          <div className="flex justify-start w-auto md:w-2/5">
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
          <div className="flex w-auto md:w-3/5">
            <img src={illustration} alt="illustration" className="w-auto h-full mx-auto" />
          </div>
        </section>

        {/* Differences */}
        <section id="differences" className="flex flex-col md:flex-row my-9">
          {/* Left Item - Info */}
          <div className="flex justify-start w-auto md:w-2/5 md:items-start">
            {/* Card */}
            <div className="flex flex-col justify-center items-center md:items-start md:pt-7">
              <h1 className="text-center md:text-left text-3xl w-[75%]">
                What`s different about Manage?
              </h1>
              <p className="my-6 w-[95%] md:w-[75%] text-center md:text-left">
                Manage provides all the functionality your team needs, without the complexity. Our
                software is tailor-made for modern digital product teams.
              </p>
            </div>
          </div>
          {/* Right Items - Differences */}
          <div className="flex flex-col w-auto md:w-3/5">
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

        {/* Testimonials */}
        <section
          id="testimonials"
          className="w-auto flex flex-col items-center my-10 px-5 md:my-40">
          {/* H1 */}
          <div className="mb-16">
            <h1 className="text-center md:text-left text-3xl">What they've said</h1>
          </div>
          <div className="flex justify-between space-x-8">
            <TestimonialsCard />
          </div>

          {/* Dots */}
          <div className="flex md:hidden space-x-1 my-5">
            <div className="bg-white border-solid border-2 border-brigthRed w-3 h-3 rounded-2xl"></div>
            <div className="bg-brigthRed w-3 h-3 rounded-2xl"></div>
            <div className="bg-white border-solid border-2 border-brigthRed w-3 h-3 rounded-2xl"></div>
            <div className="bg-white border-solid border-2 border-brigthRed w-3 h-3 rounded-2xl"></div>
          </div>

          {/* Button */}
          <div className="md:mt-8">
            <Buttons name={'Get Started'} />
          </div>
        </section>
      </div>

      {/* Get Started Section */}
      <section
        id="cta"
        className="flex flex-col w-auto bg-brigthRed px-4 py-24 text-center md:flex-row md:justify-between md:items-center md:px-36">
        <h1 className="text-white mb-8 md:mb-0 md:w-[50%] md:text-left">
          Simplify how your team works today.
        </h1>
        <div>
          <Buttons name={'Get Started'} white={true} />
        </div>
      </section>

      {/* Footer */}
      <section className="w-auto bg-darkBlue py-8 md:px-36 md:py-12">
        <div className="flex flex-col md:flex-row-reverse justify-center items-center">
          {/* Search */}
          <div className="space-x-2 my-10 md:my-0 w-full flex justify-center items-center md:w-1/4">
            <input
              type="text"
              placeholder="Updates in your inbox..."
              className="w-auto rounded-3xl p-4"
            />
            <Buttons name={'GO'} />
          </div>
          {/* Links */}
          <div className="w-full flex justify-around md:w-1/2">
            <div className="flex flex-col space-y-3">
              <a href={`#home`} className="text-white hover:text-brigthRed">
                Home
              </a>
              {links.map(
                (el, index) =>
                  index < 3 && (
                    <a href={`#${el.id}`} key={el.id} className="text-white hover:text-brigthRed">
                      {el.title}
                    </a>
                  ),
              )}
            </div>
            <div className="flex flex-col space-y-3">
              {links.map(
                (el, index) =>
                  index >= 3 && (
                    <a href={`#${el.id}`} key={el.id} className="text-white hover:text-brigthRed">
                      {el.title}
                    </a>
                  ),
              )}
              <a href={`#privacy`} className="text-white hover:text-brigthRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Icons */}
          <div className="flex flex-col md:flex-col-reverse md:w-1/4 md:items-start">
            <div className="flex space-x-8 md:space-x-2 my-14">
              <img src={facebook} alt="facebook" className="w-8 h-8 md:w-6 md:h-6 cursor-pointer" />
              <img src={youtube} alt="youtube" className="w-8 h-8 md:w-6 md:h-6 cursor-pointer" />
              <img src={twitter} alt="twitter" className="w-8 h-8 md:w-6 md:h-6 cursor-pointer" />
              <img
                src={pinterest}
                alt="pinterest"
                className="w-8 h-8 md:w-6 md:h-6 cursor-pointer"
              />
              <img
                src={instagram}
                alt="instagram"
                className="w-8 h-8 md:w-6 md:h-6 cursor-pointer"
              />
            </div>
            {/* Logo */}
            <div className="flex justify-center items-center">
              <img src={logoWhite} alt="logo-manage" className="" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-center mt-16">
          <p>Copyright 2022. All Rights Reserved</p>
        </div>
      </section>
    </div>
  );
};

export default App;
