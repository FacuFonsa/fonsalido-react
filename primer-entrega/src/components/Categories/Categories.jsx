import { FaHome } from "react-icons/fa";
import { GiDrumKit } from "react-icons/gi";
import { GiMusicSpell } from "react-icons/gi";
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
                    <GiDrumKit />
                    </button>
                </Link>
                
            </li>

            <li className="text-white">
                <Link to={'category/platillos'}>
                    <button className="bg-blue-400 text-white px-4 py-2 rounded flex items-center">
                    <GiMusicSpell />
                    </button>
                </Link>
                
            </li>
        </>
    )
}