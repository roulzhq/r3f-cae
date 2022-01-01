import { Vector3 } from "three";
import { Block } from "./block";

export interface Scene {
  name: string;
  blocks: Block[];
  playerPosition: Vector3;
}
