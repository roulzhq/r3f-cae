import { Euler, Vector3 } from "@react-three/fiber";
import { MaterialType } from "./material";

export type PartType = "box" | "sphere" | "plane";

export interface Part {
  id: string;
  name: string;
  type: PartType;
  position: Vector3;
  rotation: Euler;
  material: MaterialType;
  color: string;
}
