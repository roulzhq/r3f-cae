export default function Plane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[20, 20]} />
      <meshBasicMaterial attach="material" color="#082444" />
      <gridHelper rotation={[-Math.PI / 2, 0, 0]} />
    </mesh>
  );
}
