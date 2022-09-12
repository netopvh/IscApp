import React, { useRef, useState } from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

export default function Welcome(props) {

    const [last, setLast] = useState(false);
    const splideRef = useRef();

    const nextHandler = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('>');
            setLast(!last);
        }
    }

    const prevHandler = () => {
        if (splideRef.current) {
            splideRef.current.splide.go('<');
            setLast(!last);
        }
    }

    const goToGuest = () => {
        console
    }

    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex flex-col items-top min-h-screen bg-white">

                <Splide option={{
                    isNavigation: false
                }} ref={splideRef} aria-label="welcome">
                    <SplideSlide>
                        <img src="img/intro.svg" />
                        <div className="splide__container">
                            <div className="splide__title_text">
                                Bem Vindo ao InfectoPrev
                            </div>
                            <div className="splide__subtitle_text">
                                Aplicativo de monitoramento Da ferida operatória
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <img src="img/second.svg" />
                        <div className="splide__container">
                            <div className="splide__title_text">
                                Objetivo
                            </div>
                            <div className="splide__subtitle_text">
                            Esse aplicativo tem o objetivo de monitorar sinais e sintomas de INFECÇÃO DA FERIDA OPERATÓRIA por um período de 30 dias após a cirurgia
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>
                <div className="splide__arrows">
                    {last ? (
                        <Link href="/info" className="splide__finish text-center" onClick={goToGuest}>Avançar</Link>
                    ) : (
                        <button className="splide__finish" onClick={nextHandler}>Próximo</button>
                    )}
                    <button className="splide__finish" onClick={prevHandler}>Retornar</button>
                </div>
            </div>
        </>
    );
}
