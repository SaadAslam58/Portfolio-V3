import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="md:h-[51vh]  w-screen bg-[#018DB0]">
      <div className="md:w-[50%] flex justify-center ">
        <div className="bg-[#D1884F] md:h-[40vh]  md:w-[35vw] my-6  rounded-3xl">
          <div className="px-8 py-5 flex flex-col justify-left ">
            <h2 className="text-[28px] font-semibold text-[#457B9D]">
              Contact
            </h2>
            <h1 className="text-[48px] font-bold">Get in touch</h1>
            <p className="">hellomedia555@gmail.com</p>
            <div className="flex justify-left items-center pt-2 gap-x-3">
              <Link
                href="https://www.linkedin.com/in/saad-aslam-2167a32bb/"
                target="_blank"
              >
                <FaLinkedin className="size-[40px] text-[#018DB0]" />
              </Link>
              <Link href="https://github.com/SaadAslam58" target="_blank">
                <FaGithub className="size-[40px] text-[#018DB0]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
