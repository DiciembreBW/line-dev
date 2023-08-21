/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 ../../../public/model/pillow/model.gltf
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ModelPillow(props) {
  const { nodes, materials } = useGLTF('/model/pillow/model.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} position={[0.254, 3.635, 25.668]} scale={2.583} />
    </group>
  )
}

useGLTF.preload('/model/pillow/model.gltf')
