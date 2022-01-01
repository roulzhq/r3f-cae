import React, { useMemo } from "react";
import { useSceneStore } from "store";
import Block from "../Block/Block";

export default function Scene(): JSX.Element {
  const blocksState = useSceneStore((state) => state.getBlocksAsArray());

  const blocks = useMemo(() => {
    return blocksState.map((block) => {
      return <Block {...block} position={block.position} key={block.id} rotation={block.rotation} />;
    });
  }, [blocksState]);

  return <group position={[0, 0, 0]}>{blocks}</group>;
}
