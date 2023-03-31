'use client'

import anime from 'animejs'
import React, { useEffect } from 'react'
import Picos from './components/Animaciones/PicosDerecha'
import Rainbow from './components/Botones/Rainbow'
import CSS from "./landing.module.scss"
import BotonNeon from './components/Botones/Neon';

export default function Proyectos() {

    const Proyectos = [1,2,3,4,5,6]

    return (

        <main className="h-screen w-screen absolute top-0 -left-full text-white grid grid-cols-12 py-20" id="Pagina">

            <Picos />

            <section className="col-start-2 col-span-8 bg-blue-200 grid grid-cols-2 gap-10 overflow-y-scroll ">

                {/* <div className="flex justify-end gap-5 sticky top-0 z-10">

                    <BotonNeon primaryText="Inicio" />

                    <BotonNeon primaryText="Sobre mí" />

                </div> */}

                <Rainbow />

                {/* { Proyectos.map((Proyecto, Index) => {

                    return <Rainbow key={Index} />

                })} */}

            </section>

        </main>

    )

}
