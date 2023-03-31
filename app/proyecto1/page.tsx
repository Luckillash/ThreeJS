'use client'

import React, { useEffect } from 'react'
import * as THREE from 'three';
import Inicializador from '../components/ThreeJS/Inicializador'
import Niebla from "../assets/niebla.png"

export default function Proyecto1() {

    useEffect(() => {

        const Inicio = new Inicializador("bg")

		Inicio.initialize();

        Inicio.animate();

		Inicio.camera.position.z = 1

		Inicio.camera.rotation.x = 1.16

		Inicio.camera.rotation.y = -0.12

		Inicio.camera.rotation.z = 0.27

		const LuzAmbiente = new THREE.AmbientLight(0x555555)

		Inicio.scene.add(LuzAmbiente)

		const LuzDireccional = new THREE.DirectionalLight(0xff8c19);

		LuzDireccional.position.set(0,0,1);

		Inicio.scene.add(LuzDireccional);

		let LuzNaranja = new THREE.PointLight(0xcc6600,50,450,1.7);

		LuzNaranja.position.set(200,300,100);

		Inicio.scene.add(LuzNaranja);

		let LuzRoja = new THREE.PointLight(0xd8547e,50,450,1.7);

		LuzRoja.position.set(100,300,100);

		Inicio.scene.add(LuzRoja);

		let LuzAzul = new THREE.PointLight(0x3677ac,50,450,1.7);

		LuzAzul.position.set(300,300,200);

		Inicio.scene.add(LuzAzul);

		Inicio.scene.fog = new THREE.FogExp2(0x03544e, 0.001)

		Inicio.renderer.setClearColor(Inicio.scene.fog.color)

		const Particulas: THREE.Mesh[] = []

		const Loader = new THREE.TextureLoader()

		Loader.load(Niebla.src, function (Textura) {

			const GeometriaNube = new THREE.PlaneGeometry(500,500)

			const MaterialNube = new THREE.MeshLambertMaterial({

				map: Textura,

				transparent: true

			})


			for (let i = 0; i < 50; i++) {

				let Nube = new THREE.Mesh(GeometriaNube, MaterialNube);

				Nube.position.set(

				  Math.random() * 800 - 400,

				  500,

				  Math.random() * 500 - 500

				);

				Nube.rotation.x = 1.16;

				Nube.rotation.y = -0.12;

				Nube.rotation.z = Math.random()*2*Math.PI;

				Nube.material.opacity = 0.55;

				Particulas.push(Nube);

				Inicio.scene.add(Nube);
				
			}

		})

		const Animate = () => {

			Inicio.camera.position.z = 1

			Inicio.camera.rotation.x = 1.16
	
			Inicio.camera.rotation.y = -0.12
	
			Inicio.camera.rotation.z = 0.27

			Particulas.forEach((p) => {

				p.rotation.z -= 0.001

			})

			window.requestAnimationFrame(Animate);

		}

		Animate()

	}, [])

 	return (

		<canvas id='bg'></canvas>

  	)

}
