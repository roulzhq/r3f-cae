import { Box, Plane, Sphere } from "@react-three/drei";
import { ThreeEvent, useFrame } from "@react-three/fiber";
import { Select } from "@react-three/postprocessing";

import { ColorShiftMaterial } from "3d/shaders";
import { useEffect, useRef, useState } from "react";
import { Part } from "types/part";

const partMap = {
  box: Box,
  sphere: Sphere,
  plane: Plane,
};

const materialMap = {
  basic: (color: string) => <meshBasicMaterial color={color} />,
  phong: (color: string) => <meshPhongMaterial color={color} />,
  shader: (color: string, time: number = 1) => (
    // @ts-ignore
    <colorShiftMaterial key={ColorShiftMaterial.key} color={color} time={time} />
  ),
};

export interface PartProps extends Part {
  id: string;
  isSelected?: boolean;
  isHovering?: boolean;
  onClick?: (e: ThreeEvent<MouseEvent>) => void;
  onDoubleClick?: (e: ThreeEvent<MouseEvent>) => void;
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
  onDoubleClick = () => {},
  onPointerEnter = () => {},
  onPointerLeave = () => {},
  setRef,
}: PartProps) {
  const [time, setTime] = useState(0);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    setTime(t);
  });

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
        onDoubleClick={onDoubleClick}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        ref={ref}
        userData={{
          partId: id,
        }}
      >
        {PartMaterial(color, time)}
      </PartGeo>
    </Select>
  );
}
