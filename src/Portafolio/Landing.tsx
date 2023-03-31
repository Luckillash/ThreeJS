import anime from 'animejs'
import { useEffect } from 'react'
import CSS from "./landing.module.scss"
import Portafolio3 from './Portafolio3'

export default function Landing() {

    useEffect(() => {

        setTimeout(() => {

            anime({

                targets: '#Pagina',
    
                translateX: "-100%",
    
                easing: "easeInOutQuad",
    
                duration: 1500,
    
                direction: 'linear',
    
            });

        }, 2000)

    }, [])
    
    return (

        <main className={CSS.Universo}>
        
            <Portafolio3 />

        </main>

    )

}
