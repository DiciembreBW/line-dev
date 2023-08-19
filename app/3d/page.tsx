"use client";
import React, {useState} from "react";
import {Canvas} from "@react-three/fiber";
import {
	Environment,
	ModelSample,
	Shadow,
	StickyControl,
} from "@/libs/components/Model";
import {
	CameraControls,
	Grid,
	OrbitControls,
	PresentationControls,
	TransformControls,
} from "@react-three/drei";

type Props = {};
// https://codesandbox.io/s/qyz5r?file=/src/App.js

export default function page({}: Props) {
	return (
		<div className="h-screen bg-slate-700">
			<Canvas shadows camera={{position: [0, 0, 10], fov: 25}}>
				<Environment />
				<Shadow />

				{/* <CameraControls makeDefault /> */}
				{/* <OrbitControls /> */}
				{/* <Grid /> */}
				{/* <TransformControls mode="translate"> */}

				<ModelSample />
				<OrbitControls
					// maxDistance={12}
					rotateSpeed={1.25}
					dampingFactor={0.2}
					// autoRotate
					// minAzimuthAngle={Math.PI / 4}
					// maxAzimuthAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2.5}
					maxPolarAngle={Math.PI / 2}
				/>
				{/* </TransformControls> */}
				{/* <ambientLight intensity={0.5} /> */}
				{/* <spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					shadow-mapSize={2048}
					castShadow
				/> */}
			</Canvas>
		</div>
	);
}
