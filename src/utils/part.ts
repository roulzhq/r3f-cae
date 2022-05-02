import { Mesh } from "three";
import { Part } from "types/part";
import { eulerToArray, vector3toArray } from "./three";

export function meshToPart(mesh: Mesh): Partial<Part> {
  return {
    position: vector3toArray(mesh.position),
    rotation: eulerToArray(mesh.rotation),
    scale: vector3toArray(mesh.scale),
  };
}
