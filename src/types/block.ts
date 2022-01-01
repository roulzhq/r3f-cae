import { Vector3 } from "types";

export enum BlockType {
  PLATFORM_SIDE = "platform_side",
  PLATFORM_CENTER = "platform_center",
  PLATFORM_CORNER = "platform_corner",
  PLATFORM_OPEN_CORNER = "platform_cornerOpen",
}

export interface Block {
  id: string;
  type: BlockType;
  position: Vector3;
  rotation: Vector3;
}
