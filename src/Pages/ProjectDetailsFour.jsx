import { FaHome } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";


const ProjectDetailsFour = () => {
    return (
        <div className="pl-[10%] md:pl-[25%] mt-20">
            <Link to='/' className="flex items-center gap-1 bg-gray-100 w-20 p-1 rounded-lg bg-[linear-gradient(100deg,_#9F7AEA,_#FEE2FE)]">
                <FaHome />
                <h1 className="font-bold">Home</h1>
            </Link>
            <h1 className="text-2xl font-semibold mt-5 mb-10">Bangladesh new new four</h1>
            {/* <h2 className="py-3">Technologies</h2>
            <p className="">NextJS, Tailwind CSS, Ant Design, Redux Toolkit</p> */}
            <p className="md:w-[800px] pr-3">Developed using React.js, Node.js, Express.js, Tailwind CSS, daisyUI, MongoDB, and Python, this Healthcare System is designed to simplify and improve access to essential medical services. The platform allows users to easily schedule doctor appointments, manage their profiles, and access a real-time blood inventory system for urgent needs. It connects patients with trusted doctors and verified blood banks to ensure timely and reliable support. An AI-powered chatbot is integrated to provide instant assistance, answer common health-related questions, and guide users through the system.An admin panel enables administrators to efficiently manage users, doctors, appointments, blood inventory, and chatbot responses, ensuring smooth operation and system integrity.</p>

            

            <a className="flex items-center underline w-30 font-bold text-sky-600 mt-10" href="https://stayvista-starter-9f4b2.web.app" target="_blank" >Visit Project <MdArrowOutward/> </a>
        </div>
    );
};

export default ProjectDetailsFour;