import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, Sky } from "@react-three/drei";

import "./View.scss";
import Scene from "../Scene/Scene";
import Player from "../Player/Player";
import Camera from "../Camera/Camera";
import Clouds from "../Clouds/Clouds";

export default function View(): JSX.Element {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Canvas className="view">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        <OrbitControls />
        <group>
          <Camera />
          <Player />
        </group>

        <Scene />

        <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} />
        {/* <Clouds /> */}

        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="black" />
        </GizmoHelper>
      </Canvas>
    </Suspense>
  );
}
