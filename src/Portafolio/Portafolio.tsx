import { useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader'
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture'
import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'

import Reflexion from "../assets/reflexion.hdr"

import { CSG } from 'three-csg-ts';
import Arena from "./assets/playa.jpg"
import Normal from './assets/normal.jpg'
import Luna from './assets/moon.jpg'
import { CubeTexture } from 'three'

interface IProps {

    CamaraPosicion: {

        x: number,

        y: number,

        z: number

    }

}

function Portafolio ({ CamaraPosicion = { x: -15, y: 0, z: 20} }: IProps) {

	const Canvas = document.querySelector('#bg')

    //#region Setup

	let Escena =  new THREE.Scene()

	let Camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

	let Renderizador = new THREE.WebGLRenderer()

	//#endregion

    //#region Arco

    const materialRec = new THREE.MeshNormalMaterial()

    const Rectangulo = new THREE.Mesh(

        new THREE.BoxGeometry(5, 13, 4),

        materialRec

    );

    Rectangulo.position.x = -2.5

    Rectangulo.position.z = 2

    var AbichuelaForma = new THREE.Shape();

    var x = 0;

    var y = 0;

    var width = 8;

    var height = 4;

    var radius = 2;

    AbichuelaForma.moveTo(x + radius, y);

    AbichuelaForma.lineTo(x + width - radius, y);

    AbichuelaForma.quadraticCurveTo(x + width, y, x + width, y + radius);

    AbichuelaForma.lineTo(x + width, y + height - radius);

    AbichuelaForma.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

    AbichuelaForma.lineTo(x + radius, y + height);

    AbichuelaForma.quadraticCurveTo(x, y + height, x, y + height - radius);

    AbichuelaForma.lineTo(x, y + radius);

    AbichuelaForma.quadraticCurveTo(x, y, x + radius, y);

    var extrudeSettings = {

        depth: 4,

        bevelEnabled: false

    };

    var AbichuelaGeometria = new THREE.ExtrudeGeometry(AbichuelaForma, extrudeSettings);

    var Abichuela = new THREE.Mesh(AbichuelaGeometria, new THREE.MeshNormalMaterial());

    Abichuela.rotation.z += Math.PI / 2

    Abichuela.position.x = -0.5

    Abichuela.position.y = -2

    const Cuadrado = new THREE.Mesh(

        new THREE.BoxGeometry(5, 6, 4),

        new THREE.MeshNormalMaterial()

    );


    Cuadrado.position.z = 2

    Cuadrado.position.x = -2.5

    Cuadrado.position.y = -3.5

    Rectangulo.updateMatrix();

    Abichuela.updateMatrix()

    Cuadrado.updateMatrix()

    const subRes1 = CSG.subtract(Rectangulo, Abichuela);

    const uniRes1 = CSG.union(Rectangulo, Abichuela);

    const intRes1 = CSG.intersect(Rectangulo, Abichuela);

    const Arco = CSG.subtract(subRes1, Cuadrado)

    Escena.add(Arco)

    //#endregion

    //#region Luces

	// const LuzPosicionada = new THREE.PointLight(0xffffff)

	// LuzPosicionada.position.set(200, 200, 200)

	const LuzAmbiente = new THREE.AmbientLight(0xffffff)

	Escena.add(LuzAmbiente)

	// Escena.add(LuzPosicionada)

	//#endregion

    //#region Helpers

	// const LuzHelper = new THREE.PointLightHelper(LuzPosicionada)

	const GridHelper = new THREE.GridHelper(200, 50)

	// Escena.add(LuzHelper, GridHelper)

	let Controles = new OrbitControls(Camara, Renderizador.domElement)

    Controles.update()

	//#endregion

    //#region Texto

    const fontLoader = new FontLoader()

    fontLoader.load('../node_modules/three/examples/fonts/droid/droid_serif_regular.typeface.json', function (droidFont) {

        const textGeometry = new TextGeometry('hello world', {

            height: 2,

            size: 10,

            font: droidFont

        })

        const textMaterial = new THREE.MeshNormalMaterial()

        const textMesh = new THREE.Mesh(textGeometry, textMaterial)

        // Escena.add(textMesh)
    })

    //#endregion

    useEffect(() => {

		const Canvas = document.querySelector('#bg') as HTMLCanvasElement

		if (Canvas !== null) {

			//#region Setup

            const { x, y, z } = CamaraPosicion

            // const Escena = new SceneInit()

			Camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

            Camara.position.set(x,y,z)

			Renderizador = new THREE.WebGLRenderer({

				canvas: document.querySelector('#bg') as HTMLCanvasElement,

                antialias: true

			})

			Renderizador.setPixelRatio(window.devicePixelRatio)

			Renderizador.setSize(window.innerWidth, window.innerHeight)

            Renderizador.outputEncoding = THREE.sRGBEncoding

            Renderizador.toneMapping = THREE.ACESFilmicToneMapping

            Renderizador.toneMappingExposure = 1.25

			Renderizador.render(Escena, Camara)

            Controles = new OrbitControls(Camara, Renderizador.domElement)

		    Controles.update()

			//#endregion

		}

	}, [Canvas])

    function getRandomNumber(min: number, max: number) {

        return Math.round(Math.random() * (max - min) + min);

    }

    function AgregarEstrellas () {

		const GeometriaEstrella = new THREE.SphereGeometry(0.25, 24, 24)

		const MaterialEstrella = new THREE.MeshStandardMaterial( { color: 0xffffff } )

		const Estrella = new THREE.Mesh(GeometriaEstrella, MaterialEstrella)

		const [x, y, z] = Array(3).fill(0).map(() => getRandomNumber(-150, 150))

		Estrella.position.set(x, y, z)

		Escena.add(Estrella)

	}

    function Animar () {

        // if(Camara.position.y !== 0) Arco.parent?.remove(Arco)

        Camara.lookAt(-18,4,0)

		requestAnimationFrame(Animar)

		Renderizador.render(Escena, Camara)

		Arco.rotation.y += 0.005

        Controles.update()

	}

	Animar()

	Array(350).fill(0).forEach(AgregarEstrellas)

    let Esfera: THREE.Mesh

    function GenerarEsferaReflectante (Renderizador: any) {

        let envmaploader = new THREE.PMREMGenerator(Renderizador)

        new RGBELoader().load(Reflexion, function(HDR) {

            let envmap = envmaploader.fromCubemap(HDR as unknown as CubeTexture)

            let Textura = new THREE.CanvasTexture(new FlakesTexture())

            Textura.wrapS =  THREE.RepeatWrapping

            Textura.wrapT =  THREE.RepeatWrapping

            Textura.repeat.x = 10

            Textura.repeat.y = 6

            const Material = {

                clearcoat: 1,

                clearcoatRoughness: 0.1,

                metalness: 0.9,

                roughness: 0.5,

                color: 0x8418ca,

                normalMap: Textura,

                normalScale: new THREE.Vector2(0.15,0.15),

                envMap: envmap.texture

            }

            const EsferaGeometria = new THREE.SphereGeometry(1.5,64,64)

            const EsferaMaterial = new THREE.MeshPhysicalMaterial(Material)

            Esfera = new THREE.Mesh(EsferaGeometria, EsferaMaterial)

            Esfera.position.x = -2.5

            Esfera.position.y = 2.5

            Esfera.position.z = 1

            Escena.add(Esfera)

        })

    }


    return (

        <canvas id="bg">

        </canvas>

    )

}

export default Portafolio