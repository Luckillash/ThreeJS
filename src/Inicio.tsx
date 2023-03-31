import React, { useEffect, useRef } from 'react'
import CSS from './mod.module.css'
import anime from 'animejs';

export default function Inicio() {

	const SVG = useRef<SVGElement>(null)


	useEffect(() => {

		const Forma1 = "M48.9 -57C62.4 -35.4 71.7 -17.7 79 7.3C86.3 32.3 91.6 64.6 78.1 80.2C64.6 95.9 32.3 95 6.1 88.8C-20 82.7 -40.1 71.4 -65.1 55.7C-90.1 40.1 -120 20 -122 -2C-124 -24 -98.1 -48.1 -73.1 -69.7C-48.1 -91.4 -24 -110.7 -3.2 -107.5C17.7 -104.3 35.4 -78.7 48.9 -57"

		const Forma2 = "M80.2 -78.8C105.2 -55.2 127.6 -27.6 125.3 -2.2C123.1 23.1 96.2 46.2 71.2 61.9C46.2 77.5 23.1 85.8 0.7 85.1C-21.7 84.4 -43.4 74.7 -55.9 59C-68.4 43.4 -71.7 21.7 -73.3 -1.6C-75 -25 -75 -50 -62.5 -73.6C-50 -97.3 -25 -119.7 1.3 -120.9C27.6 -122.2 55.2 -102.5 80.2 -78.8"

		anime({

			targets: '.svg > g > path',

			easing: 'easeInOutQuad',

			duration: 3000,

			loop: true,

			d: [

				// { value: [Forma1,Forma2] },

				{ value: Forma2 },

				{ value: Forma1 },


			],

		});

	}, [])
	

	return (

		<main className={CSS.Contenido}>

			<section className={CSS.Seccion + " " + CSS.Azul}>

				<h1 className={CSS.Titulo}>Nice curves</h1>
				
				<p className={CSS.Parrafo}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio iusto voluptatibus similique eos, dignissimos quidem temporibus consequuntur dolore necessitatibus itaque minima asperiores a, in expedita, sapiente repellendus iure cupiditate maiores?</p>
			
				<div className={CSS.Curva}> </div>

			</section>

			<section className={CSS.Seccion}>

				<h1 className={CSS.Titulo}>Nice curves</h1>
				
				<p className={CSS.Parrafo}>Voluptate molestiae in doloremque amet natus id, nulla et ducimus accusamus nesciunt facere. Quam, assumenda reprehenderit, architecto possimus ut ipsam in recusandae iusto optio magnam id? Est, tenetur dolorum! Quae?</p>
			
			</section>

			<section className={CSS.Seccion + " " + CSS.Burbuja}>

				<h1 className={CSS.Titulo}>Nice curves</h1>
				
				<p className={CSS.Parrafo}>Voluptates commodi est quod qui, excepturi id maiores ea inventore deleniti perspiciatis corrupti odit ipsam explicabo doloremque neque voluptate molestiae expedita itaque? Dignissimos, dolor amet excepturi illo perspiciatis repellat natus.</p>
			
			</section>

			<section className={CSS.Seccion + " " + CSS.Oscuro}>
				
				<h1 className={CSS.Titulo}>Nice curves</h1>
				
				<p className={CSS.Parrafo}>Consequatur architecto qui asperiores sapiente perferendis, incidunt enim ab, aliquid libero, autem soluta. Doloribus sed cum accusantium officiis ab aliquid rerum aut earum saepe. Minus repellendus quaerat provident itaque fugit!</p>
			
			</section>

			<section className={CSS.Seccion + " " + CSS.Rojo}>

				<h1 className={CSS.Titulo}>Nice curves</h1>
				
				<p className={CSS.Parrafo}>Rerum at eaque, molestiae, rem velit illum enim vero et repellat perferendis, ducimus ex odit optio nemo blanditiis provident? Delectus asperiores accusantium illum debitis odio excepturi laborum eos porro ullam.</p>
			
				<div className={CSS.Ola}>

					<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
						
						<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={CSS.Relleno_Ola}></path>
					
					</svg>
				
				</div>
			
			</section>

			<div className={CSS.Espaciador + " " + CSS.Capa1}> </div>

			<section className={CSS.Seccion}>

				<h1 className={CSS.Titulo}>Nice curves</h1>
				
				<p className={CSS.Parrafo}>Eaque assumenda amet laudantium excepturi quisquam obcaecati voluptate libero, cupiditate, cumque esse perferendis voluptates nam suscipit dolores! Iste delectus doloremque culpa ipsam consequatur optio quod eius provident ducimus! Expedita, fugiat?</p>
			
			</section>

			<div className={CSS.Espaciador + " " + CSS.Capa3}> </div>

			<section className={CSS.Seccion + " " + CSS.Rosado}>
				
				<h1 className={CSS.Titulo}>Nice curves</h1>
				
				<p className={CSS.Parrafo}>Dolorum rem voluptatibus eveniet odio! Sapiente deleniti repellendus amet, expedita minus id consectetur corrupti error eligendi rem dolorem nesciunt cumque enim rerum dolor? Quasi eum laudantium recusandae ratione harum quaerat!</p>
			

				<svg 

				className='svg'

				id="visual" 

				viewBox="0 0 960 300" 

				width="960" 

				height="300" 

				xmlns="http://www.w3.org/2000/svg" 

				xmlnsXlink="http://www.w3.org/1999/xlink" 

				version="1.1">

					<g transform="translate(497.8369848016972 157.43718491124432)">
					
						<path id='path1' 
						
						d="M48.9 -57C62.4 -35.4 71.7 -17.7 79 7.3C86.3 32.3 91.6 64.6 78.1 80.2C64.6 95.9 32.3 95 6.1 88.8C-20 82.7 -40.1 71.4 -65.1 55.7C-90.1 40.1 -120 20 -122 -2C-124 -24 -98.1 -48.1 -73.1 -69.7C-48.1 -91.4 -24 -110.7 -3.2 -107.5C17.7 -104.3 35.4 -78.7 48.9 -57" 
						
						fill="#BB004B">
						
						</path>
						
					</g>

					{/* <g transform="translate(454.3148537342333 167.90996855332725)">
    
						<path id='path2' d="M80.2 -78.8C105.2 -55.2 127.6 -27.6 125.3 -2.2C123.1 23.1 96.2 46.2 71.2 61.9C46.2 77.5 23.1 85.8 0.7 85.1C-21.7 84.4 -43.4 74.7 -55.9 59C-68.4 43.4 -71.7 21.7 -73.3 -1.6C-75 -25 -75 -50 -62.5 -73.6C-50 -97.3 -25 -119.7 1.3 -120.9C27.6 -122.2 55.2 -102.5 80.2 -78.8" fill="#BB004B">
						
						</path>

					</g> */}
					
				</svg>

			</section>

			<div className={CSS.Espaciador + " " + CSS.Capa2}> </div>

			<section className={CSS.Seccion}>
				<h1 className={CSS.Titulo}>Nice curves</h1>
				<p className={CSS.Parrafo}>Nostrum fugit nihil laboriosam? Ipsa fuga vitae voluptate. Architecto reiciendis excepturi incidunt debitis quae ab eligendi quisquam dicta? Perferendis odit consectetur provident quas quia corporis iste dicta id nam dolorum.</p>
			</section>

		</main>

		
	)

}
