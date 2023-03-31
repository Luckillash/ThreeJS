'use client'

import { CameraControls, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import anime from 'animejs';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CSG } from 'three-csg-ts';
import Inicio from './Inicio';
import Loader from './components/Spinners/Loading/Loading';
import Proyectos from './Proyectos';
import * as THREE from 'three';


export default function Portafolio3() {

    let pos = 0

    const Arco = () => {

        //#region Construcción

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

        const Subresta = CSG.subtract(Rectangulo, Abichuela);

        const Arco = CSG.subtract(Subresta, Cuadrado)

        //#endregion

        useFrame(() => {

            Arco.rotation.y += 0.005

            // if (ArcoRef.current) {

            //     ArcoRef.current.rotation.y += 0.005

            // }

        })

        return <mesh args={[Arco.geometry, Arco.material]} />

    }

    function getRandomNumber(min: number, max: number): number {

        return Math.round(Math.random() * (max - min) + min);

    }

    function AgregarEstrellas () {

        const GeometriaEstrella = new THREE.SphereGeometry(0.25, 24, 24)

        const MaterialEstrella = new THREE.MeshStandardMaterial( { color: 0xffffff } )

        const Estrella = new THREE.Mesh(GeometriaEstrella, MaterialEstrella)

        const [x, y, z] = Array(3).fill(0).map(() => getRandomNumber(-150, 150))

        Estrella.position.set(x, y, z)

        return Estrella as THREE.Mesh

    }

    const Estrellas: THREE.Mesh[] = Array(350).fill(0).map(() => AgregarEstrellas())

    const Camara = () => {

        const Inicio = new THREE.Vector3(-19,3,20)

        const Portafolio = new THREE.Vector3(-100,3,20)

        useFrame((state) => {

            if (pos === 0) {

                const Direccion = state.camera.position.lerp(Inicio, .010)
    
                state.camera.lookAt(Direccion)

            }

            else if (pos === 1) {

                const Direccion = state.camera.position.lerp(Portafolio, .011)
    
                state.camera.lookAt(Direccion)
            }

        });

        return <PerspectiveCamera 

        makeDefault 
        
        position={[-15, -100, 20]} 
        
        fov={75} 

        /> 

    }

    function MostrarPortafolio () {

        anime({

            targets: '#Pagina',

            translateX: "0%",

            easing: "linear",

            duration: 1500,

            direction: 'linear',

        });

        pos = 1

        setTimeout(() => {

            anime({

                targets: '#Pagina',
    
                translateX: "100%",
    
                easing: "easeInOutQuad",
    
                duration: 1500,
    
                direction: 'linear',
    
            });

        }, 2500)

    }

    function MostrarInformacion () {

        anime({

            targets: '#Pagina',

            translateX: "0%",

            easing: "easeInOutQuad",

            duration: 1500,

            direction: 'linear',

        });

        setTimeout(() => {

            anime({

                targets: '#Pagina',
    
                translateY: "100%",
    
                easing: "easeInOutQuad",
    
                duration: 1500,
    
                direction: 'linear',
    
            });

        }, 2500)

    }

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

        <div style={{ width: "100vw", height: "100vh", overflow: "hidden", position: "relative"}}>

            <Canvas>

                <Camara />

                <OrbitControls />

                <ambientLight intensity={1} />

                <directionalLight color="none" position={[0, 0, 5]} />

                <Arco/>

                { Estrellas.map((Estrella, Index) => {

                    const { x, y, z } = Estrella.position

                    return <mesh key={Index} args={[Estrella.geometry, Estrella.material]} position={[x,y,z]} />

                })}

                <color attach="background" args={['#000']} />

            </Canvas>

            <Proyectos />

            <Loader />

            <Inicio MostrarPortafolio={MostrarPortafolio} MostrarInformacion={MostrarInformacion} />

        </div>

    )

}
