import React, { useEffect } from 'react';
import Button from '@/Components/Button';
import Guest from '@/Layouts/Guest';
import Input from '@/Components/Input';
import InputError from '@/Components/InputError';
import Label from '@/Components/Label';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        cpf: '',
        surgery: '',
        hospital: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <Guest>
            <Head title="Cadastro" />
            <div className="block my-4 font-medium text-md text-gray-700">Informe seus dados abaixo:</div>
            <form onSubmit={submit}>
                <div>
                    <Label forInput="name" value="Nome Completo:" />

                    <Input
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="cpf" value="CPF:" />

                    <Input
                        type="number"
                        name="cpf"
                        value={data.cpf}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.cpf} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="surgery" value="Dia da Cirurgia:" />

                    <Input
                        type="date"
                        name="surgery"
                        value={data.surgery}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.surgery} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="cpf" value="Nome do Hospital:" />

                    <Input
                        type="text"
                        name="hospital"
                        value={data.hospital}
                        className="mt-1 block w-full"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.hospital} className="mt-2" />
                </div>

                <div className="mt-4">
                    <Label forInput="password" value="Senha:" />

                    <Input
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        handleChange={onHandleChange}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-center mt-4">
                    <Button className="ml-4" processing={processing}>
                        Realizar cadastro
                    </Button>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <Link href={route('login')} className="underline text-md text-gray-600 hover:text-gray-900">
                        Você já é cadastrado? Clique aqui.
                    </Link>
                </div>
            </form>
        </Guest>
    );
}
