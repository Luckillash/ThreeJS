import { useEffect } from "react"
import * as THREE from 'three'
import { CubeTexture } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader"
import { FlakesTexture } from 'three/examples/jsm/textures/FlakesTexture'
import Reflexion from "./assets/reflexion.hdr"

function Test () {

	const Canvas = document.querySelector('#bg')

    //#region Setup

	let Escena =  new THREE.Scene()

	let Camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

	let Renderizador = new THREE.WebGLRenderer()

	//#endregion

    //#region Luces

    const Luz = new THREE.PointLight(0xffffff,1)

    Luz.position.set(200,200,200)

    Escena.add(Luz)

	const LuzAmbiente = new THREE.AmbientLight(0xffffff)

	// Escena.add(LuzAmbiente)

    //#endregion

    //#region Esfera


    //#endregion

    //#region Helpers

	const LuzHelper = new THREE.PointLightHelper(Luz)

	const GridHelper = new THREE.GridHelper(200, 50)

	// Escena.add(LuzHelper, GridHelper)

	let Controles = new OrbitControls(Camara, Renderizador.domElement)

    Controles.update()

	//#endregion

    useEffect(() => {

		const Canvas = document.querySelector('#bg')

		if (Canvas !== null) {

			//#region Setup

			Camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

            Camara.position.set(0,0,500)

			Renderizador = new THREE.WebGLRenderer({

                alpha: true,

                antialias: true,

				canvas: document.querySelector('#bg') as HTMLCanvasElement,
				
			})

			Renderizador.setPixelRatio(window.devicePixelRatio)

			Renderizador.setSize(window.innerWidth, window.innerHeight)

            Renderizador.outputEncoding = THREE.sRGBEncoding

            Renderizador.toneMapping = THREE.ACESFilmicToneMapping

            Renderizador.toneMappingExposure = 1.25

			Renderizador.render(Escena, Camara)

            Controles = new OrbitControls(Camara, Renderizador.domElement)

		    Controles.update()

            GenerarEsferaReflectante(Renderizador)

			//#endregion

		} 

	}, [Canvas])

    function Animar () {

		Renderizador.render(Escena, Camara)

		Controles.update()

		requestAnimationFrame(Animar)

	}

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
        
            const EsferaGeometria = new THREE.SphereGeometry(5,64,64)
        
            const EsferaMaterial = new THREE.MeshPhysicalMaterial(Material)
        
            const Esfera = new THREE.Mesh(EsferaGeometria, EsferaMaterial)
        
            Escena.add(Esfera)
    
        })

    }

	Animar()

    return (
        
        <canvas id="bg">
            
        </canvas>

    )

}

export default Test