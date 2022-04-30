import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, Stage, Stats } from "@react-three/drei";

import Scene from "../Scene/Scene";
import LoadingScreen from "components/UI/LoadingScreen/LoadingScreen";
import HUD from "components/UI/HUD/HUD";
import Controls from "../Controls/Controls";
import BasePlane from "../BasePlane/BasePlane";
import PropertyExplorer from "components/UI/PropertyExplorer/PropertyExplorer";
import SceneExplorer from "components/UI/SceneExplorer/SceneExplorer";
import { Timeline } from "components/UI";

import "./View.scss";

export default function View(): JSX.Element {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <div className="view">
        <PropertyExplorer />
        <SceneExplorer />
        <Timeline />

        <div className="canvas-wrapper">
          <HUD />
          <Canvas className="canvas">
            <ambientLight />
            <pointLight position={[10, 10, 10]} />

            <Controls />

            <BasePlane />
            <Stage shadows adjustCamera intensity={1} environment="city" preset="rembrandt">
              <Scene />
            </Stage>
            <Stats className="stats" />

            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
              <GizmoViewport axisColors={["red", "green", "blue"]} labelColor="black" />
            </GizmoHelper>
          </Canvas>
        </div>
      </div>
    </Suspense>
  );
}
