import { Cloud } from "@react-three/drei";

export default function Clouds() {
  return (
    <>
      <Cloud opacity={0.7} speed={0.4} width={10} depth={1.5} segments={20} />
    </>
  );
}
