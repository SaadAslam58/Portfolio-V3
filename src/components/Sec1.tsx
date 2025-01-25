"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaHome, FaLightbulb, FaTools } from 'react-icons/fa';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const Sec1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className='bg-[#FFFFFF] md:h-screen h-[73vh] w-full bg-[url(/Polygon3.png)] bg-no-repeat overflow-auto relative bg-right'>
        <div className='flex justify-between items-center h-[20vh] w-[90%]'>
          <div className='relative md:left-11 left-5'>
            <Image
              src='/Logo.png'
              alt='logo'
              width={200}
              height={200}
              className='md:w-[60px] md:h-[60px] w-[80px]'
            />
          </div>
          <div className='flex justify-center items-center'>
            <nav className='md:flex justify-center items-center hidden'>
              <ul className='text-black flex md:flex-row flex-col justify-center items-center md:gap-16 gap-3'>
                <li className='flex text-[#D1884F] justify-center items-center gap-2 cursor-pointer md:font-bold transition-all duration-300 md:hover:scale-105'>
                  <Link href="/" className='flex justify-center items-center gap-2'>
                    <FaHome className='md:text-[28px] text-[20px] text-[#D1884F]' />Home
                  </Link>
                </li>
                <li className='flex justify-center items-center gap-2 cursor-pointer md:font-bold transition-all duration-300 md:hover:scale-105'>
                  <Link href="/skills" className='flex justify-center items-center gap-2'>
                    <FaLightbulb className='md:text-[25px] text-[18px]' />Skills
                  </Link>
                </li>
                <li className='flex justify-center items-center gap-2 cursor-pointer md:font-bold transition-all duration-300 md:hover:scale-105'>
                  <Link href="/projects" className='flex justify-center items-center gap-2'>
                    <FaTools className='md:text-[25px] text-[18px]' />Projects
                  </Link>
                </li>
              </ul>
            </nav>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className='md:hidden'>
                <Menu className='size-[36px]' />
              </SheetTrigger>
              <SheetContent>
                <ul className='text-black flex flex-col justify-left items-start gap-5 py-5'>
                  <li className='flex text-[#D1884F] justify-left items-center gap-2 cursor-pointer border-b-2 border-black w-[100%]'>
                    <FaHome className='md:text-[28px] text-[20px] text-[#D1884F]' />
                    <Link href="/" onClick={handleLinkClick}>
                      Home
                    </Link>
                  </li>
                  <li className='flex justify-left items-center gap-2 cursor-pointer border-b-2 border-black w-[100%]'>
                    <FaLightbulb className='md:text-[25px] text-[18px]' />
                    <Link href="/skills" onClick={handleLinkClick}>
                      Skills
                    </Link>
                  </li>
                  <li className='flex justify-left items-center gap-2 cursor-pointer border-b-2 border-black w-[100%]'>
                    <FaTools className='md:text-[25px] text-[18px]' />
                    <Link href="/projects" onClick={handleLinkClick}>
                      Projects
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Hero */}
        <div className='flex justify-center items-center flex-col mt-[1.5rem] text-center'>
          <div>
            <h1 className='md:text-[63px] text-[34px] font-bold text-[#018DB0] content-center'>
              Hi, I am Saad, a <br />
              &nbsp; Web <span className='text-[#D1884F]'> Designer.</span>
            </h1>
            <p className='md:w-[600px] text-black font-normal md:text-[20px] text-[16px] mt-6 mb-16'>
              I am a focused and talented Pre-Engineering student currently learning Agentic Ai from Governor house initiative.
            </p>
          </div>
          <div className=''>
            <button className='py-2 md:px-9 px-5 md:mr-6 md:mx-[20px] my-2 md:my-0 mx-3 bg-[#008AAA] text-[#ffffff] shadow-custom-violet rounded-lg text-[17px] md:transition-all duration-300 md:hover:scale-105'>
              <Link href="https://drive.google.com/file/d/1ejEz6K81eWQxODPothsFJrJU2IFq1HBs/view?usp=drive_link" target="_blank">
                Download CV
              </Link>
            </button>
            <button className='py-2 md:px-9 px-5  md:mx-[20px] mx-3 bg-transparent md:text-[#008AAA] text-[#000000] border-[#008AAA] border-2 shadow-custom-violet rounded-lg text-[17px] md:transition-all duration-300 md:hover:scale-105'>
              <Link href="https://github.com/SaadAslam58?tab=repositories" target="_blank">
                See My Repository
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec1;
