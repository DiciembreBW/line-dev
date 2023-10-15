/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 untitled.gltf
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export function ModelUntitle(props) {
  const { nodes, materials } = useGLTF('/model/b2/untitled.gltf')
  const editedMaterial = useTexture('/model/b2/edited.png')
  return (
    <group {...props} dispose={null}>
      {/* <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[0, 2.629, 0]} rotation={[-Math.PI / 2, 15, 0]} scale={2.653} /> */}
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[0, 2.629, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2.653} >

        <meshStandardMaterial map={editedMaterial} />
      </mesh>
      {/* <mesh geometry={nodes.Plane.geometry} material={materials['Material.003']} position={[0, 2.629, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={2.653} /> */}
    </group>
  )
}

useGLTF.preload('/model/b2/untitled.gltf')