import { TransformControls } from "@react-three/drei";
import { useControlsStore } from "store/controls.store";
import { usePartStore } from "store/partStore";
import { useSceneStore } from "store/scene.store";
import { Event } from "three";
import { Part } from "types/part";
import { meshToPart } from "utils/part";
import { roundVector, vectorEquals } from "utils/three";
import BasePart from "../Part/Part";

export default function Scene(): JSX.Element {
  const [parts, updatePart, setFocus] = useSceneStore((store) => [store.parts, store.updatePart, store.setFocus]);
  const [selectedPart, hoveringPart, selectedPartRef, setSelectedPart, setHoveringPart, setSelectedPartRef] =
    usePartStore((store) => [
      store.selectedPart,
      store.hoveringPart,
      store.selectedPartRef,
      store.setSelectedPart,
      store.setHoveringPart,
      store.setSelectedPartRef,
    ]);

  const selectedTool = useControlsStore((controls) => controls.selectedTool);

  const handleTransform = (e?: Event) => {
    // Compare the id to the meshes userdata id to prevent updating the wrong part
    if (selectedPart && selectedPartRef?.current && selectedPart === selectedPartRef.current.userData.partId) {
      const part = meshToPart(selectedPartRef.current);
      part.position = roundVector(part.position!, 3);
      part.rotation = roundVector(part.rotation!, 3);

      part.scale = roundVector(part.scale!, 3);

      if (
        !vectorEquals(parts[selectedPart].position, part.position!) ||
        !vectorEquals(parts[selectedPart].rotation, part.rotation!) ||
        !vectorEquals(parts[selectedPart].scale, part.scale!)
      ) {
        updatePart(selectedPart, part);
      }
    }
  };

  return (
    <>
      <group position={[0, 0, 0]}>
        {Object.values(parts).map((part: Part) => (
          <BasePart
            {...part}
            key={part.id}
            isSelected={selectedPart === part.id}
            isHovering={hoveringPart === part.id}
            onClick={(e) => setSelectedPart(part.id)}
            onDoubleClick={(e) => setFocus(part.position)}
            onPointerEnter={(e) => setHoveringPart(part.id)}
            onPointerLeave={(e) => setHoveringPart(null)}
            setRef={selectedPart === part.id ? setSelectedPartRef : undefined}
          />
        ))}
      </group>
      {selectedPartRef && (
        <TransformControls
          object={selectedPartRef}
          mode={selectedTool}
          onChange={handleTransform}
          rotation={selectedPartRef.current.rotation}
        />
      )}
    </>
  );
}
