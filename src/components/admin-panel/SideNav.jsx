"use client";

import { FaPaintBrush, FaImage, FaPencilAlt } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";
import { BsProjectorFill } from "react-icons/bs";
import { GiWoodAxe, GiSkills } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";
import { MdDashboard, MdOutlineAnimation } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";

const adminOptions = [
  {
    id: "dashboard",
    link: "/admin-panel/dashboard",
    icon: <MdDashboard />,
    title: "Dashboard",
  },
  {
    id: "colors",
    link: "/admin-panel/colors",
    icon: <FaPaintBrush />,
    title: "Colors",
  },
  {
    id: "images",
    link: "/admin-panel/images",
    icon: <FaImage />,
    title: "Images",
  },
  {
    id: "text",
    link: "/admin-panel/text",
    icon: <FaPencilAlt />,
    title: "Text",
  },
  {
    id: "links",
    link: "/admin-panel/links",
    icon: <IoShareSocial />,
    title: "Links",
  },
  {
    id: "projects",
    link: "/admin-panel/projects",
    icon: <BsProjectorFill />,
    title: "Projects",
  },
  {
    id: "skills",
    link: "/admin-panel/skills",
    icon: <GiSkills />,
    title: "Skills",
  },
  {
    id: "education",
    link: "/admin-panel/education",
    icon: <SiBookstack />,
    title: "Education",
  },
  {
    id: "experience",
    link: "/admin-panel/experience",
    icon: <GiWoodAxe />,
    title: "Experience",
  },
  {
    id: "animation",
    link: "/admin-panel/animation",
    icon: <MdOutlineAnimation />,
    title: "Animations",
  },
  {
    id: "achievements",
    link: "/admin-panel/achievements",
    icon: <MdOutlineAnimation />,
    title: "Achievements",
  },
];

const SideNav = () => {
  const pathName = usePathname();

  return (
    <div className="px-6 py-8 sticky top-0 bottom-0 w-80 text-black bg-white h-screen">
      <Link href={"/admin-panel"}>
        <h2 className="text-4xl font-extrabold mb-8">Admin Panel</h2>
      </Link>
      <div className="px-4 space-y-4">
        {adminOptions.map((option, index) => {
          const isActive = pathName.includes(option.link);
          return (
            <div
              key={index}
              // className="flex justify-start items-center"
            >
              <Link
                key={index}
                href={option.link}
                className="w-full text-start"
              >
                <div
                  className={`text-xl w-full text-start font-semibold py-2 px-4  text-white rounded-lg flex justify-start items-center gap-4 ${
                    isActive ? "bg-slate-900" : "bg-slate-700 "
                  }`}
                >
                  <span className="h-4 w-4">{option.icon}</span>
                  {option.title}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideNav;
