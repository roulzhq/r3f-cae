import { useSceneStore } from "store/scene.store";
import { Part } from "types/part";
import BasePart from "../Part/Part";

export default function Scene(): JSX.Element {
  const { parts, selectedPart, hoveringPart, setSelectedPart, setHoveringPart } = useSceneStore();

  return (
    <group position={[0, 0, 0]}>
      {Object.values(parts).map((part: Part) => (
        <BasePart
          {...part}
          key={part.id}
          isSelected={selectedPart === part.id}
          isHovering={hoveringPart === part.id}
          onClick={(e) => setSelectedPart(part.id)}
          onPointerOver={(e) => setHoveringPart(part.id)}
        />
      ))}
    </group>
  );
}
