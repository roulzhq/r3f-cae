import { Box, Plane, Sphere } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
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
  isSelected: boolean;
  isHovering: boolean;
  onClick: (e: ThreeEvent<MouseEvent>) => void;
  onPointerOver: (e: ThreeEvent<PointerEvent>) => void;
}

export default function BasePart({
  type,
  position,
  rotation,
  material,
  color,
  isSelected,
  isHovering,
  onClick,
  onPointerOver,
}: PartProps) {
  const PartGeo = partMap[type];
  const PartMaterial = materialMap[material];

  return (
    <PartGeo position={position} rotation={rotation} onClick={onClick} onPointerOver={onPointerOver}>
      {PartMaterial(color)}
    </PartGeo>
  );
}
