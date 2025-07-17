import { FaHome } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectDetails = () => {
    return (
        <div className="pl-[10%] md:pl-[25%] mt-20">
            <Link to='/' className="flex items-center gap-1 bg-gray-100 w-20 p-1 rounded-lg bg-[linear-gradient(100deg,_#9F7AEA,_#FEE2FE)]">
                <FaHome />
                <h1 className="font-bold">Home</h1>
            </Link>
            <h1 className="text-2xl font-semibold mt-5 mb-10">US-Bangla Airlines Website & CMS one</h1>
            {/* <h2 className="py-3">Technologies</h2>
            <p className="">NextJS, Tailwind CSS, Ant Design, Redux Toolkit</p> */}

            <p className="md:w-[800px] pr-3">Built using React.js, Node.js, Express.js, TanStack, JWT, Tailwind CSS, Meraki UI, and MongoDB, this user-friendly Hotel Booking System allows users to easily book rooms online. It offers real-time updates on room availability, secure payment options, and automatic notifications. The platform also includes an admin panel that helps manage room inventory, pricing, and reservations efficiently.</p>

            <a className="flex items-center underline w-30 mt-10 font-bold text-sky-600" href="https://stayvista-starter-9f4b2.web.app" target="_blank" >Visit Project <MdArrowOutward/> </a>
        </div>
    );
};

export default ProjectDetails;