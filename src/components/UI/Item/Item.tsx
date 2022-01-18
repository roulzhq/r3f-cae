import { useEffect, useState } from "react";
import { ItemType } from "types/item";
import { ItemLoader } from "types/loaders";

interface ItemProps {
  type: ItemType;
}

export default function Item({ type }: ItemProps) {
  const iconPath = ItemLoader.getIconPath(type);

  return (
    <div className="item">
      <img src={require(iconPath).default} />
    </div>
  );
}
