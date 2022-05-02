import { Box, Plane, Sphere } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";
import { useEffect, useRef } from "react";
import { Part } from "types/part";

const partMap = {
  box: Box,
  sphere: Sphere,
  plane: Plane,
};

const materialMap = {
  basic: (color: string) => <meshBasicMaterial color={color} />,
  phong: (color: string) => <meshPhongMaterial color={color} />,
};

export interface PartProps extends Part {
  id: string;
  isSelected?: boolean;
  isHovering?: boolean;
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
  onPointerEnter?: (e: ThreeEvent<PointerEvent>) => void;
  onPointerLeave?: (e: ThreeEvent<PointerEvent>) => void;
  setRef?: (ref: any) => void;
}

export default function BasePart({
  id,
  type,
  position,
  rotation,
  scale,
  material,
  color,
  isSelected = false,
  isHovering = false,
  onClick = () => {},
  onPointerEnter = () => {},
  onPointerLeave = () => {},
  setRef,
}: PartProps) {
  const ref = useRef();
  const PartGeo = partMap[type];
  const PartMaterial = materialMap[material];

  useEffect(() => {
    if (setRef && ref) {
      setRef(ref);
    }
  }, [ref, setRef]);

  return (
    <Select enabled={isSelected || isHovering}>
      <PartGeo
        position={position}
        rotation={rotation}
        scale={scale}
        onClick={onClick}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        ref={ref}
        userData={{
          partId: id,
        }}
      >
        {PartMaterial(color)}
      </PartGeo>
    </Select>
  );
}
