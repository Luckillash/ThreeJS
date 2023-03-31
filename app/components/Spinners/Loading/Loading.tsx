'use client'

import anime from 'animejs'
import React, { useEffect } from 'react'
import CSS from "./Loading.module.scss"

export default function Loading() {

    function ColorLoader () {

        const Timeline = anime.timeline({

            duration: 2000, // Duración de cada paso de la animación en milisegundos

            easing: "linear", // Función de interpolación para la animación

            loop: true // La animación se repite indefinidamente

        })

        Timeline

        .add({

            targets: '.Loader',

            backgroundColor: "#2E93E1"

        })

        .add({

            targets: '.Loader',

            backgroundColor: "#C894E6"

        })

        .add({

            targets: '.Loader',

            backgroundColor: "#71039C"

        })

        .add({

            targets: '.Loader',

            backgroundColor: "#14723E"

        })

        .add({

            targets: '.Loader',

            backgroundColor: "#018496"

        })

    }

    useEffect(() => {

        ColorLoader()

    }, [])

    return (

        <main className={CSS.Loader + " " + "Loader"} id="Pagina">

            <div className={CSS.Spinner}></div>

        </main>

    )

}
