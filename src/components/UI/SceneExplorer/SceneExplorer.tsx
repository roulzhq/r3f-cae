import { useSceneStore } from "store/scene.store";
import "./SceneExplorer.scss";

export default function SceneExplorer() {
  const [parts, selectedPart] = useSceneStore((scene) => [scene.parts, scene.selectedPart]);

  return (
    <div className="scene-explorer">
      <h2>scene</h2>
      <ul>
        {Object.values(parts).map((part) => (
          <li style={{ fontWeight: part.id === selectedPart ? "bold" : "normal" }} key={part.id}>
            {part.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
