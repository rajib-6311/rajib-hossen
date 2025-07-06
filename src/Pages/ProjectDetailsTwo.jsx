import { FaHome } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectDetailsTwo = () => {
    return (
       <div className="pl-[10%] md:pl-[25%] mt-20">
            <Link to='/' className="flex items-center gap-1 bg-gray-100 w-20 p-1 rounded-lg">
                <FaHome />
                <h1>Home</h1>
            </Link>
            <h1 className="text-2xl font-semibold py-3">Bangladesh</h1>
            <h2 className="py-3">Technologies</h2>
            <p className="">NextJS, Tailwind CSS, Ant Design, Redux Toolkit</p>

            <ul className="py-8">
                <li>Implemented server-side rendering for optimal performance and SEO benefits.</li>
                <li>Implemented server-side rendering for optimal performance and SEO benefits.</li>
                <li>Implemented server-side rendering for optimal performance and SEO benefits.</li>
            </ul>
            
            <a className="flex items-center underline" href="https:/online-freelance-marketplace.web.app" target="_blank" >Visit Project <MdArrowOutward/> </a>
        </div>
    );
};

export default ProjectDetailsTwo;