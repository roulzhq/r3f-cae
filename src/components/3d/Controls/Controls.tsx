import { OrbitControls } from "@react-three/drei";
import { useSceneStore } from "store/scene.store";

export default function Controls() {
  const focus = useSceneStore((store) => store.focus);

  return <OrbitControls makeDefault target={focus} />;
}
