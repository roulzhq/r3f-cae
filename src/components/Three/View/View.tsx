import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, OrbitControls, Sky, Stars, Stats } from "@react-three/drei";

import "./View.scss";
import Scene from "../Scene/Scene";
import Player from "../Player/Player";
import Camera from "../Camera/Camera";
import Clouds from "../Clouds/Clouds";
import LoadingScreen from "components/UI/LoadingScreen/LoadingScreen";
import HUD from "components/UI/HUD/HUD";

export default function View(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <HUD />
      <Canvas className="view">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />

        {/* <OrbitControls /> */}
        <group>
          <Camera />
          <Player />
        </group>

        <Scene />

        {/* <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} /> */}
        {/* <Clouds /> */}

        <Stars />

        <Stats />

        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="black" />
        </GizmoHelper>
      </Canvas>
    </Suspense>
  );
}
