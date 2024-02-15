import {Link} from "react-router-dom";
import {MdArrowDropDown} from "react-icons/md";
import {useEffect, useState} from "react";


export function NavBar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenPage, setIsDropdownOpenPage] = useState(false);

    const[color,setColor]=useState(false)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeColor);
        return () => {
            window.removeEventListener('scroll', changeColor);
        };
    }, []); // Adding empty dependency array to run the effect only once on mount

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleDropdownPage = () => {
        setIsDropdownOpenPage(!isDropdownOpenPage);
    };
    return (
        <div className={`flex w-full fixed h-16 ${color ? 'bg-black ' : ''} z-10`}>
            {/*Nav-list*/}
            <div className='flex  items-center gap-32 w-full mr-10'> {/* Add 'w-full' to ensure full width */}
                <ul className='text-white font-poppins flex gap-10 ml-auto'> {/* Add 'ml-auto' to align to the right */}
                    <li className="inline-block">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="inline-block relative">
                <span className="flex items-center" onClick={toggleDropdownPage}>
                    Pages
                    <MdArrowDropDown className="size-6"/>
                </span>
                        <ul className={`absolute ${isDropdownOpenPage ? "block" : "hidden"} bg-white border rounded-md shadow-md mt-2 py-1 w-32`}>
                            <li>
                                <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</Link>
                            </li>
                            <li>
                                <Link to="/service" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact Us</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="inline-block relative">
                <span className="flex items-center" onClick={toggleDropdown}>
                    Services
                    <MdArrowDropDown className="size-6"/>
                </span>
                        <ul className={`absolute ${isDropdownOpen ? "block" : "hidden"} bg-white border rounded-md shadow-md mt-2 py-1 w-32`}>
                            <li>
                                <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Marketing and Branding</Link>
                            </li>
                            <li>
                                <Link to="/service" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Creative Designing</Link>
                            </li>
                            <li>
                                <Link to="/about" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Multimedia</Link>
                            </li>
                            <li>
                                <Link to="/service" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Web Designing</Link>
                            </li>
                        </ul>
                    </li>
                    <li className="inline-block">
                        <Link to="/">Portfolio</Link>
                    </li>
                </ul>
                {/*button get started*/}
                <button className='bg-orange flex w-32 h-10 rounded font-poppins items-center justify-center text-white'>
                    Get Start
                </button>
            </div>
        </div>

    );
}