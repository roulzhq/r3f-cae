import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { GizmoHelper, GizmoViewport, Stats } from "@react-three/drei";

import Scene from "../Scene/Scene";
import LoadingScreen from "components/UI/LoadingScreen/LoadingScreen";
import HUD from "components/UI/HUD/HUD";
import Controls from "../Controls/Controls";
import BasePlane from "../BasePlane/BasePlane";
import PropertyExplorer from "components/UI/PropertyExplorer/PropertyExplorer";
import SceneExplorer from "components/UI/SceneExplorer/SceneExplorer";
import { Timeline, Toolbar } from "components/UI";

import { EffectComposer, Outline, Selection } from "@react-three/postprocessing";
import { useUIStore } from "store/ui.store";

import "./View.scss";

export default function View(): JSX.Element {
  const [rows, columns] = useUIStore((ui) => [ui.rows, ui.columns]);

  return (
    <Suspense fallback={<LoadingScreen />}>
      <div
        className="view"
        style={{
          gridTemplateRows: rows.map((i) => `${i}fr`).join(" "),
          gridTemplateColumns: columns.map((i) => `${i}fr`).join(" "),
        }}
      >
        <Toolbar />
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

            {/* <Stage shadows adjustCamera intensity={1} environment="warehouse" preset="soft"> */}
            <Selection>
              <EffectComposer multisampling={8} autoClear={false}>
                <Outline blur edgeStrength={20} width={1100} visibleEdgeColor={16754235} hiddenEdgeColor={16754235} />
              </EffectComposer>

              <Scene />
            </Selection>
            {/* </Stage> */}
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
