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
	Stage,
	TransformControls,
} from "@react-three/drei";

import {Model} from "@/libs/components/my_models/Po";

type Props = {};
// https://codesandbox.io/s/qyz5r?file=/src/App.js
// https://www.youtube.com/watch?v=Nxd9L6X8quo

export default function page({}: Props) {
	return (
		<div className="h-screen bg-slate-700">
			<Canvas shadows camera={{position: [0, 0, 15], fov: 35}}>
				{/* <Environment /> */}
				{/* <Shadow /> */}

				{/* <CameraControls makeDefault /> */}
				{/* <OrbitControls /> */}
				{/* <Grid /> */}
				{/* <TransformControls mode="translate"> */}

				<OrbitControls
					// maxDistance={12}
					rotateSpeed={1.25}
					dampingFactor={0.2}
					// autoRotate
					// minAzimuthAngle={Math.PI / 4}
					// maxAzimuthAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2.5}
					maxPolarAngle={Math.PI / 2}
					autoRotate
					autoRotateSpeed={0.4}
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

				{/* models */}
				{/* <ModelSample /> */}

				<Stage
					adjustCamera={2}
					intensity={1.5}
					shadows={{type: "contact", colorBlend: 1, opacity: 0.5}}>
					<Model />
				</Stage>
			</Canvas>
		</div>
	);
}
