import { usePlayerStore } from "store";
import { ItemLoader } from "types/loaders";
import Item from "../Item/Item";

export default function Hotbar() {
  const inventory = usePlayerStore((state) => state.inventory);

  const hotbarItemIds = inventory.slice(0, 10);
  const hotbarItems = hotbarItemIds.map((id) => ItemLoader.getItemById(id));

  return (
    <div className="hotbar">
      {hotbarItems.map((item) => (
        <div className="hotbar__item" key={item?.id ?? null}>
          {/* {item && <Item type={item.type} />} */}
        </div>
      ))}
    </div>
  );
}
