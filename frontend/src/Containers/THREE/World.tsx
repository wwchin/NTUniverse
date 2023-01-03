import { Debug, Triplet, useBox, useCompoundBody, useSphere } from "@react-three/cannon";
import Bike from "../../Components/THREE/Bike";
import Ground from "../../Components/THREE/static/Ground";
import { FC, useState } from "react";
import { useMyContext } from "../../Utils/useMyContext";
import InteractiveBlock from "../../Components/THREE/interaction/InteractiveBlock";
import TestContainer from "./TestContainer";
import { type } from "os";
import Boundary from "./Boundary";
import { useControls } from "leva";

const DebugWorld: FC<any> = ({ debug = false, children }) => {

	return (
		<>
			{debug
				? <Debug>
					{children}
				</Debug>
				: <>
					{children}
				</>
			}
		</>
	)
}

interface PlatformProps {
	position: Triplet,
};
function Platform({ position }: PlatformProps) {
	const [ref, api] = useBox(() => ({
		type: "Static",
		args: [16.9, 0.5, 16.9],
		position: position,
		mass: 1000,
		onCollide: () => console.log('ji')
	}));

	return (
		<>
			<mesh ref={ref as any}>
				<boxGeometry />
				<meshBasicMaterial />
			</mesh>
		</>
	)
}

function World() {

	const { setBikeEnabled, setBulletinModalOpen, isLogin, setIsLogin, setLocation } = useMyContext()

	const { width, center, height } = useControls({
		width: 5,
		height: 10,
		center: {
			value: {
				x: 0,
				y: 0,
				// z: 0,
			},
			step: 0.5
		}
	});

	return (
		<DebugWorld debug >
			<Bike objectProps={{
				position: [0, 5, 0],
				rotation: [0, 0, 0],
			}} />
			<Ground />
			<mesh position={[-center.y, 0.5, center.x]}>
				<boxGeometry args={[16.9, 0.5, 16.9]} />
				<meshBasicMaterial />
			</mesh>
			<Platform position={[12.3, 0.5, 11.9]} />
			<Platform position={[-12, 0.5, 12]} />
			<Platform position={[-12, 0.5, -12]} />
			<Platform position={[12, 0.5, -12]} />


			{/* <Tree1 position={[-5, 0.0, -5]} /> */}
			{/* <RingElement ringPosition={[-5, 0.1, -5]} ringArgs={[4.5, 7, 32]} /> */}
			{/* <Bench position={[-5, 0, 5]} rotation={[0, Math.PI / 2, 0]} castShadow /> */}

			{/* <TestContainer /> */}

			{/* <Palm objectProps={{
					position: [5, 0, -5],
				}} /> 

                {/* Pass in your EventHandler to handleEvent={ } */}
			{/* <InteractiveBlock
				handleEvent={() => {
					setIsChangeScene(true);
					setBikeEnabled(false);
					setTimeout(() => {
						setBikeTpPosition([5, 0 ,-5]);
						setBikeEnabled(true);
					}, 1000);
					// setLocation("總圖");
					// setBikeEnabled(false);
					// setBulletinModalOpen(true);
				}}
				position={[5, 0, 5]}
			/>
			<InteractiveBlock
				handleEvent={() => {
					setIsChangeScene(true);
					setBikeEnabled(false);
					setTimeout(() => {
						setBikeTpPosition([5, 0 ,5]);
						setBikeEnabled(true);
					}, 1000);
					// setLocation("醉月湖");
					// setBikeEnabled(false);
					// setBulletinModalOpen(true);
				}}
				position={[5, 0, -5]}
			/> */}

		</DebugWorld >
	)
}

export default World;