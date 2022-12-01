import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

export const ColorShiftMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
  // vertex shader
  glsl`
    varying vec2 vUv;
    uniform float time;


    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // fragment shader
  glsl`
    uniform float time;
    uniform vec3 color;

    varying vec2 vUv;

    void main() {
      // gl_FragColor.rgba = vec4(0.5 + 0.3 * sin(vUv.yxx + time) + color, 1.0);
      // gl_FragColor.rgba = vec4(vUv * cos(time), 0.2, 1.0);
      vec2 st = gl_FragCoord.xy/800.0;
      gl_FragColor.rgba = vec4(sin(st), sin(time) ,1.0);
    }
  `
);
