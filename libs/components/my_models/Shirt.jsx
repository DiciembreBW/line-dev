/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ../../../public/model/co/Shirt.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelShirt(props) {
  const { nodes, materials } = useGLTF('/model/co/Shirt.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane.geometry} material={nodes.Plane.material} position={[4.803, 2.79, 3.052]} rotation={[Math.PI / 2, 0, 0]} scale={3.311} />
    </group>
  )
}

useGLTF.preload('/model/co/Shirt.gltf')
