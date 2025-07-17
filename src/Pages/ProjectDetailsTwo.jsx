import { FaHome } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectDetailsTwo = () => {
    return (
       <div className="pl-[10%] md:pl-[25%] mt-20">
            <Link to='/' className="flex items-center gap-1 bg-gray-100 w-20 p-1 rounded-lg bg-[linear-gradient(100deg,_#9F7AEA,_#FEE2FE)]">
                <FaHome />
                <h1 className="font-bold">Home</h1>
            </Link>
            <h1 className="text-2xl font-semibold py-3 mt-5 mb-10">Bangladesh two</h1>
            {/* <h2 className="py-3">Technologies</h2>
            <p className="">NextJS, Tailwind CSS, Ant Design, Redux Toolkit</p> */}

            <p className="md:w-[800px] pr-3">This project is built with React.js, Node.js, Express.js, TanStack, JWT, Tailwind CSS, daisyUI, Firebase, and MongoDB. It connects freelancers and clients through easy-to-use profiles. Freelancers can show their skills, and clients can post job opportunities. The platform supports job listings, bidding, search filters, secure payments, and a review system to build trust. An admin panel helps manage users, payments, and platform rules efficiently.</p>

            <a className="flex items-center underline w-30 font-bold text-sky-600 mt-10" href="https://online-freelance-marketplace.web.app" target="_blank" >Visit Project <MdArrowOutward/> </a>
        </div>
    );
};

export default ProjectDetailsTwo;