import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link } from '@inertiajs/inertia-react';

export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
        >
            <Head title="Dashboard" />

            <div className="flex flex-col">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-2 bg-white border-b border-gray-200">Olá {props.auth.user.name}!</div>
                    </div>
                </div>
                <div className="mt-10 grid grid-cols-2 gap-4">
                    <Link href={route('dashboard.pre')} className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Pre Operatório</Link>
                    <Link href={route('dashboard.pos')} className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Pós Operatório</Link>
                    <Link className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Monitoramento</Link>
                    <Link className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Dúvidas</Link>
                    <Link className="py-10 px-6 bg-yellow-500 text-center font-bold rounded-md">Material de Apoio</Link>
                </div>
            </div>
        </Authenticated>
    );
}
