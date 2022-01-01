import * as THREE from "three";
import { Vector3 } from "types";

export function vector3toThreeVector3(vector: Vector3): THREE.Vector3 {
  return new THREE.Vector3(vector.x, vector.y, vector.z);
}

export function vector3toArray(vector: Vector3): [number, number, number] {
  return [vector.x, vector.y, vector.z];
}

export function arrayToVector3(array: [number, number, number]): Vector3 {
  if (array.length !== 3) throw new Error("arrayToVector3: array must have length 3");

  return { x: array[0], y: array[1], z: array[2] };
}

export function vector3equals(v1: Vector3, v2: Vector3) {
  return v1.x === v2.x && v1.y === v2.y && v1.z === v2.z;
}
