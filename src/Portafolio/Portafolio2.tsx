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
import EscenaInit from '../Escena'


function Portafolio () {

	const Canvas = document.querySelector('#bg')

    useEffect(() => {

        const Test = new EscenaInit('bg')

        Test.initialize()

        Test.animate();

        Test.camera.position.set(-15, 0, 20)

        //#region Arco

        const MaterialRectangulo = new THREE.MeshNormalMaterial()

        const Rectangulo = new THREE.Mesh(

            new THREE.BoxGeometry(5, 13, 4),

            MaterialRectangulo

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

        Test.scene.add(Arco)

        //#endregion

        //#region Estrellas

        function getRandomNumber(min: number, max: number): number {

            return Math.round(Math.random() * (max - min) + min);
    
        }
    
        function AgregarEstrellas () {
    
            const GeometriaEstrella = new THREE.SphereGeometry(0.25, 24, 24)
    
            const MaterialEstrella = new THREE.MeshStandardMaterial( { color: 0xffffff } )
    
            const Estrella = new THREE.Mesh(GeometriaEstrella, MaterialEstrella)
    
            const [x, y, z] = Array(3).fill(0).map(() => getRandomNumber(-150, 150))
    
            Estrella.position.set(x, y, z)
    
            Test.scene.add(Estrella)
    
        }
    
        Array(350).fill(0).forEach(AgregarEstrellas)

        //#endregion

        //#region Animar

        function Animar () {

            Test.camera.lookAt(-19,3,0)

            requestAnimationFrame(Animar)

            Arco.rotation.y += 0.005

        }

        Animar()

        //#endregion

	}, [Canvas])

    return (

        <canvas id="bg">

        </canvas>

    )

}

export default Portafolio