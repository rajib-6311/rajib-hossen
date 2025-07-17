import { FaHome } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


const ProjectDetailsThree = () => {
    return (
          <div className="pl-[10%] md:pl-[25%] mt-20">
            <Link to='/' className="flex items-center gap-1 bg-gray-100 w-20 p-1 rounded-lg bg-[linear-gradient(100deg,_#9F7AEA,_#FEE2FE)]">
                <FaHome />
                <h1 className="font-bold">Home</h1>
            </Link>
            <h1 className="text-2xl font-semibold py-3 mt-6 mb-10">US-Bangla Airlines Website & CMS three</h1>
            {/* <h2 className="py-3">Technologies</h2>
            <p className="">NextJS, Tailwind CSS, Ant Design, Redux Toolkit</p> */}
             <p className="md:w-[800px] pr-3">This project, developed using React.js, Node.js, Express.js, Tailwind CSS, and MySQL, offers a smooth and user-friendly shopping experience. Users can log in, search for products, add them to the cart, update quantities, or remove items. Products in the cart are clearly displayed. Users can also view their previous carts. A congratulatory message appears at checkout, making the shopping experience more enjoyable.</p>
             
            <a className="flex items-center underline w-30 font-bold text-sky-600 mt-10" href="https:/online-freelance-marketplace.web.app" target="_blank" >Visit Project <MdArrowOutward/> </a>
        </div>
    );
};

export default ProjectDetailsThree;