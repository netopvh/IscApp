import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { FaHome, FaUndoAlt, FaUserAlt } from "react-icons/fa";

export default function Authenticated({ auth, header, children }) {

    const back = () => {
        window.history.back();
    }

    return (
        <div className="w-full h-screen">
            <section className="p-2 scroll-my-0">
                {children}
            </section>
            <section id="bottom-navigation" className="block py-4 fixed inset-x-0 bottom-0 z-10 bg-white shadow">
                <div id="tabs" className="flex justify-between">
                    <Link href={route('dashboard')} className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <FaHome className="w-7 h-7 inline-block" />
                    </Link>
                    <Link onClick={back} as="button" type="button" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <FaUndoAlt className="w-7 h-7 inline-block" />
                    </Link>
                    <Link href="#" className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1">
                        <FaUserAlt className="w-7 h-7 inline-block" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
