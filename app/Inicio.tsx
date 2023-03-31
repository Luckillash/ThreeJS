'use client'

import anime from 'animejs'
import React, { memo, useEffect } from 'react'
import Bienvenidos from './components/Animaciones/Bienvenidos';
import Olas from './components/Animaciones/OlasIzquierda';
import BotonNeon from './components/Botones/Neon';
import CSS from "./landing.module.scss"

export default function Inicio({ MostrarPortafolio, MostrarInformacion }: any) {

    // 

    return (

        <main className="h-screen w-screen absolute top-0 left-full text-white grid grid-cols-12 content-center" id="Pagina">

            <Olas />

            <section className="col-start-4 text-4xl z-0 grid gap-7">

                <Bienvenidos />

                <h1>Soy Lucas</h1>

                <p>Y este es mi universo 🚀</p>

                <div className="flex gap-5">

                    <BotonNeon onClick={MostrarPortafolio} primaryText="Portafolio" />

                    <BotonNeon onClick={MostrarInformacion} primaryText="Sobre mí" />

                </div>

            </section>

        </main>

    )

}
