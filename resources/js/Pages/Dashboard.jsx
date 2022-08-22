import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';
import { IoExit } from "react-icons/io5";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-2">Olá {props.auth.user.name}!</div>
                        <div className="p-2">
                            <Link
                                href={route('logout')}
                                method="post"
                                as="button"
                            >
                                <IoExit className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="py-6">
                    <ApplicationLogo className="w-80" />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-4">
                    <Link href={route('dashboard.pre')} className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Pre Operatório</Link>
                    <Link href={route('dashboard.pos')} className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Pós Operatório</Link>
                    <Link href={route('dashboard.monitor')} className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Monitoramento</Link>
                    <Link href={route('dashboard.question')} className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Dúvidas</Link>
                    <Link href={route('dashboard.help')} className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Material de Apoio</Link>
                </div>
            </div>
        </Authenticated>
    );
}
