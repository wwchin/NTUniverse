import { Debug, Physics } from "@react-three/cannon";
import { Stars } from "@react-three/drei";
import { useContext } from "react";
import Bike from "../../Components/THREE/Bike";
import { RingElement } from "../../Components/THREE/HintCircle";
import Bench from "../../Components/THREE/static/Bench";
import Ground from "../../Components/THREE/static/Ground";
import Stairs from "../../Components/THREE/static/Stairs";
import Tree1 from "../../Components/THREE/static/Trees/Tree1";
import Tree2 from "../../Components/THREE/static/Trees/Tree2";
import TestCube from "../../Components/THREE/TestCube";
import TestInteractiveBlock from "../../Components/THREE/static/testInteractiveBlock";
import { ThreeContext } from "./Canvas";

export default function World() {

    const { bikePosition } = useContext(ThreeContext);

    return (
        <Physics>
            {/* <Debug> */}
                <Ground
                    args={[1000, 1000]}
                    rotation={[-Math.PI / 2, 0, 0]}
                />
                <Tree1 position={[-5, 0, -5]} />
                <Bench position={[-5, 0, 5]} rotation={[0, Math.PI / 2, 0]} />
                <TestInteractiveBlock  args={[5,0.1,5]} position={[10, 0, 10]} />
                <Bike objectProps={{
                    position: [5, 0.5, 5],
                    rotation: [0, -Math.PI * 3 / 4, 0],
                }} />

                {/* <TestCube position={bikePosition} /> */}
            {/* </Debug> */}
        </Physics>
    )
}