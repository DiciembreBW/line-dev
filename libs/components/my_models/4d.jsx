/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ../../../public/model/4/4d.gltf
*/

import React, { useRef } from 'react'
import { Decal, useGLTF, useTexture } from '@react-three/drei'

export function Model4D(props) {
  const { nodes, materials } = useGLTF('/model/4/4d.gltf')
	const myTexture = useTexture("/pic/pic2.jpeg");

const terraintextures = useTexture({
  map: "/model/cat/textures/concrete_cat_statue_diff_1k.jpg",
  displacementMap: "/model/cat/textures/concrete_cat_statue_ao_1k.jpg",
});

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material}>
        <Decal map={myTexture} position={[0, 2, 0]} rotation={[0,0,0]} scale={5} >

        <meshStandardMaterial {...terraintextures}/>
          </Decal>

          {/* <meshPhongMaterial map={myTexture}>
          </meshPhongMaterial> */}
      </mesh>

      {/* <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material}>
        <meshStandardMaterial map={myTexture} />
      </mesh> */}
    </group>
  )
}

useGLTF.preload('/model/4/4d.gltf')
