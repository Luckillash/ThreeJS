import anime from 'animejs'
import React, { useEffect } from 'react'
import CSS from "./index.module.scss"

export default function Index() {

    function Path1 () {

        const Forma1 = "M716 600L727 514L723 429L684 343L751 257L726 171L685 86L710 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        const Forma2 = "M681 600L728 514L676 429L764 343L750 257L721 171L738 86L720 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"

        const Forma3 = "M748 600L731 514L759 429L714 343L727 257L688 171L712 86L765 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        anime({

            targets: '.picos1',

            easing: 'easeInOutSine',

            duration: 5000,

            loop: true,

            d: [

                { value: Forma3 },

                { value: Forma2 },

                { value: Forma1 },

            ],

            // fill: "#C70039"
            
        });

        const Timeline = anime.timeline({

            duration: 2000, // Duración de cada paso de la animación en milisegundos

            easing: "linear", // Función de interpolación para la animación

            loop: true // La animación se repite indefinidamente

        })

        Timeline

        .add({

            targets: '.picos1',

            fill: "#77BBEF"

        })

        .add({

            targets: '.picos1',

            fill: "#E9DFEF"

        })

        .add({

            targets: '.picos1',

            fill: "#B16ECC"

        })

        .add({

            targets: '.picos1',

            fill: "#8BDDB0"

        })

        .add({

            targets: '.picos1',

            fill: "#73B8C1"

        })
        
    }

    function Path2 () {

        const Forma1 = "M735 600L763 514L769 429L783 343L754 257L787 171L720 86L785 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        const Forma2 = "M785 600L721 514L753 429L737 343L720 257L750 171L726 86L733 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"

        const Forma3 = "M791 600L772 514L735 429L765 343L752 257L732 171L742 86L742 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        anime({

            targets: '.picos2',

            easing: 'easeInOutSine',

            duration: 4000,

            loop: true,

            d: [

                { value: Forma3 },

                { value: Forma2 },

                { value: Forma1 },

            ],

        });

        const Timeline = anime.timeline({

            duration: 2000, // Duración de cada paso de la animación en milisegundos

            easing: "linear", // Función de interpolación para la animación

            loop: true // La animación se repite indefinidamente

        })

        Timeline

        .add({

            targets: '.picos2',

            fill: "#66B1EC"

        })

        .add({

            targets: '.picos2',

            fill: "#E1CDED"

        })

        .add({

            targets: '.picos2',

            fill: "#A258C0"

        })

        .add({

            targets: '.picos2',

            fill: "#6EC192"

        })

        .add({

            targets: '.picos2',

            fill: "#5FABB6"

        })
    }

    function Path3 () {

        const Forma1 = "M789 600L795 514L784 429L756 343L800 257L811 171L806 86L784 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        const Forma2 = "M778 600L761 514L805 429L758 343L804 257L808 171L808 86L798 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"

        const Forma3 = "M771 600L767 514L790 429L781 343L774 257L807 171L792 86L801 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        anime({

            targets: '.picos3',

            easing: 'easeInOutSine',

            duration: 5000,

            loop: true,

            d: [

                { value: Forma3 },

                { value: Forma2 },

                { value: Forma1 },

            ],

        });

        const Timeline = anime.timeline({

            duration: 2000, // Duración de cada paso de la animación en milisegundos

            easing: "linear", // Función de interpolación para la animación

            loop: true // La animación se repite indefinidamente

        })

        Timeline

        .add({

            targets: '.picos3',

            fill: "#55A7E8"

        })

        .add({

            targets: '.picos3',

            fill: "#D9BAEB"

        })

        .add({

            targets: '.picos3',

            fill: "#9242B4"

        })

        .add({

            targets: '.picos3',

            fill: "#52A675"

        })

        .add({

            targets: '.picos3',

            fill: "#499EAB"

        })

    }

    function Path4 () {

        const Forma1 = "M839 600L833 514L821 429L835 343L844 257L831 171L809 86L832 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        const Forma2 = "M827 600L822 514L842 429L832 343L841 257L820 171L821 86L802 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"

        const Forma3 = "M830 600L829 514L817 429L842 343L848 257L816 171L847 86L796 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        anime({

            targets: '.picos4',

            easing: 'easeInOutSine',

            duration: 3500,

            loop: true,

            d: [

                { value: Forma3 },

                { value: Forma2 },

                { value: Forma1 },

            ],

        });

        const Timeline = anime.timeline({

            duration: 2000, // Duración de cada paso de la animación en milisegundos

            easing: "linear", // Función de interpolación para la animación

            loop: true // La animación se repite indefinidamente

        })

        Timeline

        .add({

            targets: '.picos4',

            fill: "#439DE5"

        })

        .add({

            targets: '.picos4',

            fill: "#D1A7E9"

        })

        .add({

            targets: '.picos4',

            fill: "#8229A8"

        })

        .add({

            targets: '.picos4',

            fill: "#368C59"

        })

        .add({

            targets: '.picos4',

            fill: "#3091A0"

        })

    }

    function Path5 () {

        const Forma1 = "M864 600L857 514L874 429L834 343L873 257L840 171L864 86L837 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        const Forma2 = "M849 600L878 514L860 429L870 343L869 257L870 171L850 86L844 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"

        const Forma3 = "M854 600L836 514L854 429L848 343L864 257L853 171L845 86L855 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z"
        
        anime({

            targets: '.picos5',

            easing: 'easeInOutSine',

            duration: 3000,

            loop: true,

            d: [

                { value: Forma3 },

                { value: Forma2 },

                { value: Forma1 },

            ],

        });

        const Timeline = anime.timeline({

            duration: 2000, // Duración de cada paso de la animación en milisegundos

            easing: "linear", // Función de interpolación para la animación

            loop: true // La animación se repite indefinidamente

        })

        Timeline

        .add({

            targets: '.picos5',

            fill: "#2E93E1"

        })

        .add({

            targets: '.picos5',

            fill: "#C894E6"

        })

        .add({

            targets: '.picos5',

            fill: "#71039C"

        })

        .add({

            targets: '.picos5',

            fill: "#14723E"

        })

        .add({

            targets: '.picos5',

            fill: "#018496"

        })
    }

    useEffect(() => {
      
        Path1()

        Path2()

        Path3()

        Path4()

        Path5()

    }, [])

    return (

        <div className={CSS.Picos}>

            <svg className='svg2' id="visual" viewBox="0 0 900 600" width="900" height="600" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">

                <path className='picos1' d="M716 600L727 514L723 429L684 343L751 257L726 171L685 86L710 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z" fill="#73B8C1"></path>

                <path className='picos2' d="M735 600L763 514L769 429L783 343L754 257L787 171L720 86L785 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z" fill="#5FABB6"></path>

                <path className='picos3' d="M789 600L795 514L784 429L756 343L800 257L811 171L806 86L784 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z" fill="#499EAB"></path>

                <path className='picos4' d="M839 600L833 514L821 429L835 343L844 257L831 171L809 86L832 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z" fill="#3091A0"></path>

                <path className='picos5' d="M864 600L857 514L874 429L834 343L873 257L840 171L864 86L837 0L900 0L900 86L900 171L900 257L900 343L900 429L900 514L900 600Z" fill="#018496"></path>
                                    
            </svg>

        </div>

    )

}
