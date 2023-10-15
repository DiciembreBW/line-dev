// export default function Model3D({}: Props) {
// 	return <div className="ring aspect-[3/4] rounded-lg mb-4">Model3D</div>;
// }

"use client";
import React, {Suspense, useState} from "react";
import {Canvas, useLoader} from "@react-three/fiber";
import {
	Environment,
	ModelSample,
	Shadow,
	StickyControl,
} from "@/libs/components/Model";
import {
	CameraControls,
	Center,
	Decal,
	Dodecahedron,
	Grid,
	PerformanceMonitor,
	Plane,
	PresentationControls,
	Stage,
	TransformControls,
	useTexture,
} from "@react-three/drei";

import {
	RenderTexture,
	OrbitControls,
	PerspectiveCamera,
	Text,
	ContactShadows,
} from "@react-three/drei";

// import {Model} from "@/libs/components/my_models/Po";
// import {ModelCloth} from "@/libs/components/my_models/Cloth";
// import {ModelPillow} from "@/libs/components/my_models/Pillow";
// import {ModelShirt} from "@/libs/components/my_models/Shirt";
import {ModelZip} from "@/libs/components/my_models/Zip";
import {BoxGeometry, RenderTarget, SphereGeometry, TextureLoader} from "three";
import {Model4D} from "@/libs/components/my_models/4d";
import {BoxModel} from "@/components/3d/Box";
import {ModelCat} from "@/components/3d/Cat";
import {ModelBox2} from "@/components/3d/Box2";
import {ModelNew} from "@/components/3d/New";
import {BModel} from "@/components/3d/Bmodel";
import {ModelUntitle} from "@/components/3d/Untitled";
import {ModelMat} from "@/components/3d/Mat";
import {ModelShirt} from "@/components/3d/Shirt";
import {useAppContext} from "@/context/app/AppReducer";
import Image from "next/image";

type Props = {blob?: string};
// https://codesandbox.io/s/qyz5r?file=/src/App.js
// https://www.youtube.com/watch?v=Nxd9L6X8quo

export default function Model3D({blob}: Props) {
	const [dpr, setDpr] = useState<number>(1);

	return (
		<div className="h-full w-full">
			{/* <div></div> */}

			<Suspense
				fallback={
					<div className="flex justify-center items-center h-full">loading</div>
				}>
				<Canvas shadows camera={{position: [0, 5, 0], fov: 35}}>
					<PerformanceMonitor
						flipflops={12}
						onIncline={() => setDpr(2)}
						onDecline={() => setDpr(1)}>
						<OrbitControls
							rotateSpeed={1.25}
							dampingFactor={0.2}
							minPolarAngle={Math.PI / 2.5}
							maxPolarAngle={Math.PI / 2}
						/>

						{/* models */}
						<Stage
							adjustCamera={0}
							position={[0, 0, 5]}
							intensity={0.5}
							shadows={{type: "contact", colorBlend: 1, opacity: 0.5}}>
							<Center>
								{/* {blob !== "" && blob !== undefined && <ModelMat blob={blob} />} */}
								{/* {blob !== "" && blob !== undefined && <ModelShirt blob={blob} />} */}
								<ModelShirt />
							</Center>
						</Stage>
					</PerformanceMonitor>
				</Canvas>
			</Suspense>
		</div>
	);
}
