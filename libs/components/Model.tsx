import {
	ContactShadows,
	EnvironmentCube,
	PresentationControls,
} from "@react-three/drei";
import {group} from "console";
import React from "react";

export function Environment() {
	return <EnvironmentCube preset="city" />;
}

export function Shadow() {
	return (
		<ContactShadows
			position={[0, -1.2, 0]}
			opacity={0.75}
			scale={10}
			blur={2.5}
			far={4}
		/>
	);
}

export function ModelSample(props: any) {
	return (
		<group>
			<mesh>
				<boxGeometry />
				{/* <meshBasicMaterial /> */}
				{/* <wireframeGeometry /> */}
			</mesh>
		</group>
	);
}

export function StickyControl({children}: {children: React.ReactNode}) {
	return (
		<PresentationControls
			config={{mass: 2, tension: 500}}
			snap={{mass: 4, tension: 1500}}
			rotation={[0, 0.3, 0]}
			polar={[-Math.PI / 3, Math.PI / 3]}
			azimuth={[-Math.PI / 1.4, Math.PI / 2]}>
			{children}
		</PresentationControls>
	);
}
