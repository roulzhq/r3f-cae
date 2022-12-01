import { Select } from "antd";
import { usePartStore } from "store/partStore";
import { useSceneStore } from "store/scene.store";
import VectorInput from "../VectorInput/VectorInput";
import "./PropertyExplorer.scss";

export default function PropertyExplorer() {
  const [parts, updatePart] = useSceneStore((store) => [store.parts, store.updatePart]);
  const selectedPart = usePartStore((store) => store.selectedPart);

  if (!selectedPart) return <div className="property-explorer" />;

  const part = parts[selectedPart];

  return (
    <div className="property-explorer">
      <h2>{part.name}</h2>
      <div>
        <h5>Position</h5>
        <VectorInput value={part.position} onChange={(position) => updatePart(part.id, { position })} />
      </div>
      <div>
        <h5>Rotation</h5>
        <VectorInput value={part.rotation} onChange={(rotation) => updatePart(part.id, { rotation })} />
      </div>
      <div>
        <h5>Scale</h5>
        <VectorInput value={part.scale} onChange={(scale) => updatePart(part.id, { scale })} />
      </div>
      <div>
        <h5>Material</h5>
        <Select
          value={part.material}
          options={[
            { value: "basic", label: "Basic Material" },
            { value: "phong", label: "Phong Material" },
            { value: "shader", label: "Shader Material" },
          ]}
          onChange={(material) => updatePart(part.id, { material })}
        />
      </div>
    </div>
  );
}
