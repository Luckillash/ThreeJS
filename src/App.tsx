import { useEffect, useRef, useState } from 'react'
import './App.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Espacio from './assets/space.jpg'
import Yo from './assets/yo.jpg'
import Luna from './assets/moon.jpg'
import Normal from './assets/normal.jpg'

function App() {

	const Canvas = document.querySelector('#bg')

	//#region Setup

	let Escena =  new THREE.Scene()

	let Camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

	let Renderizador = new THREE.WebGLRenderer()

	//#endregion

	//#region Torus

	const Geometria = new THREE.TorusGeometry(10, 3, 16, 100)

	// const Material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } )

	const Material = new THREE.MeshStandardMaterial( { color: 0xFF6347 } )

	const Torus = new THREE.Mesh(Geometria, Material)

	Escena.add(Torus)

	//#endregion

	//#region Luces

	const LuzPosicionada = new THREE.PointLight(0xffffff)

	LuzPosicionada.position.set(5, 5, 5)

	const LuzAmbiente = new THREE.AmbientLight(0xffffff)

	Escena.add(LuzAmbiente)

	Escena.add(LuzPosicionada)

	//#endregion

	//#region Helpers

	const LuzHelper = new THREE.PointLightHelper(LuzPosicionada)

	const GridHelper = new THREE.GridHelper(200, 50)

	Escena.add(LuzHelper, GridHelper)

	let Controles = new OrbitControls(Camara, Renderizador.domElement)

	//#endregion

	//#region Background

	const TexturaEspacio = new THREE.TextureLoader().load(Espacio)

	Escena.background = TexturaEspacio

	//#endregion

	//#region Lucas

	const TexturaLucas = new THREE.TextureLoader().load(Yo)

	const Lucas = new THREE.Mesh(

		new THREE.BoxGeometry(3,3,3),

		new THREE.MeshBasicMaterial( { map: TexturaLucas } )

	)

	Escena.add(Lucas)

	//#endregion

	//#region Luna

	const TexturaLuna = new THREE.TextureLoader().load(Luna)

	const TexturaNormal = new THREE.TextureLoader().load(Normal)

	const LunaObjeto = new THREE.Mesh(

		new THREE.SphereGeometry(3,32,32),

		new THREE.MeshStandardMaterial( { map: TexturaLuna, normalMap: TexturaNormal } ) // Normal map sirve para darle textura.

	)

	Escena.add(LunaObjeto)

	LunaObjeto.position.z = 30

	LunaObjeto.position.setX(-10)

	Lucas.position.z = -5

	Lucas.position.x = 2

	//#endregion

	function AgregarEstrellas () {

		const GeometriaEstrella = new THREE.SphereGeometry(0.25, 24, 24)

		const MaterialEstrella = new THREE.MeshStandardMaterial( { color: 0xffffff } )

		const Estrella = new THREE.Mesh(GeometriaEstrella, MaterialEstrella)

		const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread(100))

		Estrella.position.set(x, y, z)

		Escena.add(Estrella)

	}

	Array(200).fill(0).forEach(AgregarEstrellas)
	
	function MoverCamara() {

		const t = document.body.getBoundingClientRect().top;

		LunaObjeto.rotation.x += 0.05;

		LunaObjeto.rotation.y += 0.075;

		LunaObjeto.rotation.z += 0.05;
	  
		Lucas.rotation.y += 0.01;

		Lucas.rotation.z += 0.01;
	  
		Camara.position.z = t * -0.01;

		Camara.position.x = t * -0.0002;

		Camara.rotation.y = t * -0.0002;

	}

	document.body.onscroll = MoverCamara

	function Animar () {

		requestAnimationFrame(Animar)

		Torus.rotation.x += 0.01

		Torus.rotation.y += 0.005

		Torus.rotation.z += 0.01

		// Controles.update()

		Renderizador.render(Escena, Camara)

	}

	Animar()

	useEffect(() => {

		const Canvas = document.querySelector('#bg')

		if (Canvas !== null) {

			//#region Setup

			Camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

			Renderizador = new THREE.WebGLRenderer({

				canvas: document.querySelector('#bg') as HTMLCanvasElement,
				
			})

			Renderizador.setPixelRatio(window.devicePixelRatio)

			Renderizador.setSize(window.innerWidth, window.innerHeight)

			Camara.position.setZ(30)

			Camara.position.setX(-3)

			Renderizador.render(Escena, Camara)

			//#endregion

			MoverCamara()
			// Controles = new OrbitControls(Camara, Renderizador)

			// Controles.update()

		} 

	}, [Canvas])



    return (

		<>

			<canvas id="bg">a</canvas>

			<main className='Contenido'>

				<header className='Cabecera'>

					<h1>Jeff Delaney</h1>

					<p>🚀 Welcome to my website!</p>

				</header>


				<blockquote className='Titulares'>

					<p className='Parrafo'>I like making stuff and putting it on the internet</p>

				</blockquote>

				<section className='Secciones'>
					
					<h2 className='Titulares'>📜 Manifesto</h2>

					<p>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

					<p>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

					<p>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

				</section>

				<section className='Secciones'>

					<h2 className='Titulares'>👩🏽‍🚀 Projects</h2>

					<p>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

					<h2 className='Titulares'>🏆 Accomplishments</h2>

					<p>
						
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

				</section>

				<blockquote className='Titulares'>

					<p className='Parrafo'>The best way out is always through <br/>-Robert Frost</p>
					
				</blockquote>

				<section className='Secciones left'>

					<h2 className='Titulares'>🌮 Work History</h2>

					<h3 className='Titulares'>McDonalds</h3>

					<p>
						
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

					<h3 className='Titulares'>Burger King</h3>

					<p>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

					<h3 className='Titulares'>Taco Bell</h3>

					<p>

						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					
					</p>

				</section>

				<blockquote className='Titulares'>

					<p className='Parrafo'>Thanks for watching!</p>

				</blockquote>

			</main>
		
		</>

    )

}

export default App
