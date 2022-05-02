import * as THREE from "three";
import { Vector3 } from "types";

export function vector3toThreeVector3(vector: Vector3): THREE.Vector3 {
  return new THREE.Vector3(vector[0], vector[0], vector[0]);
}

export function vector3toArray(vector: THREE.Vector3): Vector3 {
  return [vector.x, vector.y, vector.z];
}

export function eulerToArray(euler: THREE.Euler): Vector3 {
  return [euler.x, euler.y, euler.z];
}

export function vectorEquals(v1: Vector3, v2: Vector3) {
  return v1[0] === v2[0] && v1[1] === v2[1] && v1[2] === v2[2];
}

export function roundVector(vector: Vector3, precision: number): Vector3 {
  return [
    Number(vector[0].toFixed(precision)),
    Number(vector[1].toFixed(precision)),
    Number(vector[2].toFixed(precision)),
  ];
}
