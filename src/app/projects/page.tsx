import { projectData } from "@/data/data";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center flex-col py-16">
        <div className="text-center py-5">
          <h1 className="font-bold md:text-[73px] text-[64px] text-[#018DB0]">
            Projects
          </h1>
          <h3 className="text-black font-bold md:text-[48px] text-[32px] mb-12">
            {" "}
            What I have made?
          </h3>
        </div>
        <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
          {projectData.map((item) => {
            return (
              <div
                key={item.id}
                className="pb-4 m-1 shadow-custom-violet rounded-lg md:transition-all duration-300 md:hover:scale-105">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={2000}
                  height={2000}
                  className="w-full rounded-t-md  border-b-[2px] border-gray-400  cursor-pointer "
                />
                <div className="px-3 pt-3">
                  <h1 className="font-bold text-[20px]">{item.title}</h1>
                  <p className="text-[14px] font-semibold pt-3">
                    {item.description}
                  </p>
                </div>
                <div className="px-3 pt-3 flex justify-left items-center gap-x-5 ">
                  <Link
                    className="text-[#1e3758] font-semibold "
                    href={item.live}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                  <Link
                    className="text-[#1e3758] font-semibold "
                    href={item.github}
                    target="_blank"
                  >
                    Github
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
