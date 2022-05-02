import { Vector3 } from "types";
import { MaterialType } from "./material";

export type PartType = "box" | "sphere" | "plane";

export interface Part {
  id: string;
  name: string;
  type: PartType;
  position: Vector3;
  rotation: Vector3;
  scale: Vector3;
  material: MaterialType;
  color: string;
}
