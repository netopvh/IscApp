import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FaAngleDoubleRight } from "react-icons/fa";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                active
                    ? 'mb-4 inline-flex items-center uppercase px-1 pt-1 text-md font-medium leading-5 text-gray-900 focus:outline-none transition duration-150 ease-in-out'
                    : 'mb-2 inline-flex items-center uppercase px-1 pt-1 text-md font-medium leading-5 text-gray-500 hover:text-black focus:outline-none focus:text-black transition duration-150 ease-in-out'
            }
        >
            {children}
            <FaAngleDoubleRight className="w-5 h-5 inline-block ml-2" />
        </Link>
    );
}
