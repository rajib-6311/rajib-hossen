import { GithubIcon,Linkedin } from 'lucide-react';
import { CgMail } from "react-icons/cg";
import { RiJavascriptFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoFigma, BiLogoTypescript, BiRightArrow } from "react-icons/bi";
import { IoLogoCss3, IoLogoHtml5, IoLogoNodejs } from "react-icons/io";
import { FaGitAlt, FaReact } from 'react-icons/fa';
import { SiMaterialformkdocs, SiPostman, SiTailwindcss, SiVercel, SiVite } from 'react-icons/si';
import pdf from '../assets/cv.pdf'
import { AiOutlineDocker } from 'react-icons/ai';
import { VscVscode } from 'react-icons/vsc';
import { GoArrowUpRight } from 'react-icons/go';
import {Link} from 'react-router-dom'

const skills = [
  {
    category: "Languages",
    items: [
      { icon: <RiJavascriptFill />, name: "JavaScript" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <IoLogoHtml5 />, name: "HTML5" },
      { icon: <IoLogoCss3 />, name: "CSS" },
    ],
  },
  {
    category: "Frameworks",
    items: [
      { icon: <FaReact />, name: "React.js" },
      { icon: <RiNextjsFill />, name: "Next.js" },
      { icon: <IoLogoNodejs />, name: "Node.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    category: "Libraries",
    items: [
      { icon: <SiMaterialformkdocs/>, name: "Material UI" },
      { icon: <RiNextjsFill />, name: "Next.js" },
      { icon: <IoLogoNodejs />, name: "Node.js" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    ],
  },
  {
    category: "Tools",
    items: [
      { icon: <FaGitAlt/>, name: "Git" },
      { icon: <VscVscode />, name: "VS Code" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiVite />, name: "Vite" },
      { icon: <AiOutlineDocker />, name: "Docker" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <BiLogoFigma />, name: "Figma" },
    ],
  },
];

const Home = () => {
  return (
    <div className='pl-[10%] md:pl-[25%] mt-18 py-4'>
      <h1 className='text-3xl font-semibold'>Md. Rajib Hossen</h1>
      <p className="py-6">
        Passionate Software Engineer skilled in JavaScript, TypeScript, React.js, Next.js, <br /> and Node.js. Experienced in building responsive, high-performance applications.
      </p>

      <div className='flex items-center gap-2'>
        <p>Resumé</p>
        <a href="https://drive.google.com/file/d/1DBxGpH1rEAdzes_9ann2kcagnADj1Ubh/view?usp=sharing" className='underline'>Preview</a> <p>or</p>
        <a href={pdf} download='Rajib Hosssen Resume' className='underline'>download</a>
      </div>

      <div className='py-4'>
        <h1>Get In Touch</h1>
        <div className='flex items-center gap-4 py-4'>
          <a href="https://www.linkedin.com/in/-rajib-hossen/" target="_blank" className="text-gray-700 hover:text-blue-600 transition-transform duration-300 hover:scale-110">
            <Linkedin />
          </a>
          <a href="https://github.com/rajib-6311" target="_blank" className="text-gray-700 hover:text-blue-600 transition-transform duration-300 hover:scale-110">
            <GithubIcon />
          </a>
          <a href="mailto:mhossen191244@bscse.uiu.ac.bd" target="_blank" className="text-gray-700 hover:text-blue-600 transition-transform duration-300 hover:scale-110">
            <CgMail className='w-7 h-7' />
          </a>
        </div>
      </div>

      {/* Skill Section  */}

      <div className='pt=30'>
        <h1 className='text-xl font-bold'>Skill</h1>
        {skills.map((group, index) => (
          <div key={index}>
            <h2 className='underline py-2'>{group.category}</h2>
            <div className='flex flex-wrap gap-3'>
              {group.items.map((skill, i) => (
                <div key={i} className='flex items-center gap-1'>
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* project section  */}
      <h1 className='text-xl font-bold mt-10'>Projects</h1>

      <div className='py-2'>
        <Link to='/project-details' className='flex items-center gap-2'>
          <h1 className='underline'>US-Bangla Airlines Website & CMS</h1>
          <GoArrowUpRight />
        </Link>
        {/* <a href="http://localhost:5173/project-details">project</a> */}
        <p>Developed a responsive, SEO‑optimized website and CMS with centralized state <br/> management.</p>
      </div>
      <div className='py-2'>
        <Link to='/project-details-two' className='flex items-center gap-2'>
          <h1 className='underline'>US-Bangla Airlines Website & CMS</h1>
          <GoArrowUpRight />
        </Link>
        {/* <a href="http://localhost:5173/project-details">project</a> */}
        <p>Developed a responsive, SEO‑optimized website and CMS with centralized state <br/> management.</p>
      </div>
      <div className='py-2'>
        <Link to='/' className='flex items-center gap-2'>
          <h1 className='underline'>US-Bangla Airlines Website & CMS</h1>
          <GoArrowUpRight />
        </Link>
        {/* <a href="http://localhost:5173/project-details">project</a> */}
        <p>Developed a responsive, SEO‑optimized website and CMS with centralized state <br/> management.</p>
      </div>
      <div className='py-2'>
        <Link to='/project-details' className='flex items-center gap-2'>
          <h1 className='underline'>US-Bangla Airlines Website & CMS</h1>
          <GoArrowUpRight />
        </Link>
        {/* <a href="http://localhost:5173/project-details">project</a> */}
        <p>Developed a responsive, SEO‑optimized website and CMS with centralized state <br/> management.</p>
      </div>



    </div>
  );
};

export default Home;
