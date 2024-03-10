import { FaHome } from "react-icons/fa";
import { GiJetFighter } from "react-icons/gi";
import { TbSchool } from "react-icons/tb";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom"
export const Categories = () => {
    return (
        <>
            <li className="text-white">
                <Link  to={'/'}>
                    <button className="bg-blue-400 text-white px-4 py-2 rounded flex items-center">
                    <FaHome />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/Bateria'}>
                    <button className="bg-blue-400 text-white px-4 py-2 rounded flex items-center">
                    <GiJetFighter />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/Platillos'}>
                    <button className="bg-blue-400 text-white px-4 py-2 rounded flex items-center">
                    <TbSchool />
                    </button>
                </Link>
                
            </li>



        </>
    )
}