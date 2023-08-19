"use client";
import React, {useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Environment, ModelSample, Shadow} from "@/libs/components/Model";
import {CameraControls, PresentationControls} from "@react-three/drei";

type Props = {};
// https://codesandbox.io/s/qyz5r?file=/src/App.js

export default function page({}: Props) {
	return (
		<div className="h-screen">
			<Canvas shadows camera={{position: [0, 0, 10], fov: 25}}>
				<PresentationControls
					// config={{mass: 2, tension: 500}}
					// snap={{mass: 4, tension: 1500}}
					// rotation={[0, 0.3, 0]}

					config={{mass: 2, tension: 500}}
					snap={{mass: 4, tension: 1500}}
					rotation={[0, 0.3, 0]}
					polar={[-Math.PI / 3, Math.PI / 3]}
					azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
					<ModelSample />
				</PresentationControls>

				<Environment />
				<Shadow />
				{/* <CameraControls makeDefault /> */}
				<ambientLight intensity={0.5} />
				<spotLight
					position={[10, 10, 10]}
					angle={0.15}
					penumbra={1}
					shadow-mapSize={2048}
					castShadow
				/>
			</Canvas>
		</div>
	);
}
