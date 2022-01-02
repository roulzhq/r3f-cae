import { Vector3 } from "types";

export enum BlockType {
  GROUND = "ground",
  BASE = "base",
}

export interface Block {
  id: string;
  type: BlockType;
  position: Vector3;
  rotation: Vector3;
}
