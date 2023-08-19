import {ContactShadows, EnvironmentCube} from "@react-three/drei";

export function Environment() {
	return <EnvironmentCube preset="city" />;
}

export function Shadow() {
	return (
		<ContactShadows
			position={[0, -1.4, 0]}
			opacity={0.75}
			scale={10}
			blur={2.5}
			far={4}
		/>
	);
}

export function ModelSample() {
	return (
		<mesh>
			<boxGeometry />
			<meshBasicMaterial />
		</mesh>
	);
}
