import React, { useEffect } from 'react'
import SceneInit from './Escena'
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function Test2() {

    useEffect(() => {
    
        const Test = new SceneInit("bg")
    
        Test.initialize();
        Test.animate();
    
        // inital scene
        // const boxGeometry = new THREE.BoxGeometry(2, 2, 2);
        // const boxMaterial = new THREE.MeshNormalMaterial();
        // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
        // test.scene.add(boxMesh);
    
        const addNewBoxMesh = (x: number, y: number, z: number) => {
          const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
          const boxMaterial = new THREE.MeshPhongMaterial({
            color: 0xfafafa,
          });
          const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
          boxMesh.position.set(x, y, z);
          Test.scene.add(boxMesh);
        };
    
        // top rows
        addNewBoxMesh(0, 2, 0);
        addNewBoxMesh(2, 2, 0);
        addNewBoxMesh(-2, 2, 0);
        addNewBoxMesh(0, 2, -2);
        addNewBoxMesh(2, 2, -2);
        addNewBoxMesh(-2, 2, -2);
        addNewBoxMesh(0, 2, 2);
        addNewBoxMesh(2, 2, 2);
        addNewBoxMesh(-2, 2, 2);
    
        // middle rows
        addNewBoxMesh(0, 0, 0);
        addNewBoxMesh(2, 0, 0);
        addNewBoxMesh(-2, 0, 0);
        addNewBoxMesh(0, 0, -2);
        addNewBoxMesh(2, 0, -2);
        addNewBoxMesh(-2, 0, -2);
        addNewBoxMesh(0, 0, 2);
        addNewBoxMesh(2, 0, 2);
        addNewBoxMesh(-2, 0, 2);
    
        // bottom rows
        addNewBoxMesh(0, -2, 0);
        addNewBoxMesh(2, -2, 0);
        addNewBoxMesh(-2, -2, 0);
        addNewBoxMesh(0, -2, -2);
        addNewBoxMesh(2, -2, -2);
        addNewBoxMesh(-2, -2, -2);
        addNewBoxMesh(0, -2, 2);
        addNewBoxMesh(2, -2, 2);
        addNewBoxMesh(-2, -2, 2);
    
        // add shiba model
        const glftLoader = new GLTFLoader();
        glftLoader.load('./assets/shiba/scene.gltf', (gltfScene) => {
          gltfScene.scene.position.y = 0.5;
          gltfScene.scene.position.z = 4;
          gltfScene.scene.scale.set(1, 1, 1);
          Test.scene.add(gltfScene.scene);
        });
    
        const pointer = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
    
        const onMouseMove = (event: MouseEvent) => {
          // calculate pointer position in normalized device coordinates
          // (-1 to +1) for both components
          pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
          pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
          raycaster.setFromCamera(pointer, Test.camera);
          const intersects = raycaster.intersectObjects(Test.scene.children);
    
          // for (let i = 0; i < intersects.length; i++) {
          //   console.log(intersects);
          // }
    
          // change color of objects intersecting the raycaster
          // for (let i = 0; i < intersects.length; i++) {
          //   intersects[i].object.material.color.set(0xff0000);
          // }
    
          // change color of the closest object intersecting the raycaster
          if (intersects.length > 0) {

            const intersected = intersects[0].object as THREE.Line

            if (intersected instanceof THREE.Mesh || intersected instanceof THREE.Line) {
                intersected.material.color.set(0xff0000);
            }

          }

        };
    
        window.addEventListener('mousemove', onMouseMove);

    }, [])
    

    return (

        <canvas id='bg'></canvas>

    )

}
