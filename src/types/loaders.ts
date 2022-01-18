import { BlockType } from "./block";
import { Item, ItemType } from "./item";
import { Scene } from "./scene";

export class SceneLoader {
  public static scene: Scene;

  public static async load(name: string): Promise<Scene> {
    const res = await fetch(`/assets/scenes/${name}/scene.json`);
    const scene = await res.json();

    this.setScene(scene);
    return scene;
  }

  private static setScene(scene: Scene) {
    this.scene = scene;
  }
}

export class BlockLoader {
  public static getModelPath(type: BlockType) {
    return `/assets/textures/environment/${type}.glb`;
  }
}

export class ItemLoader {
  public static items: Record<string, Item> = {
    "bb3478dc-1a1e-44e6-b5a8-e2a59613ee56": {
      id: "bb3478dc-1a1e-44e6-b5a8-e2a59613ee56",
      name: "Screwdriver",
      type: ItemType.SCREWDRIVER,
    },
  };

  public static getIconPath(type: ItemType) {
    return `/assets/icons/items/${type}.png`;
  }

  public static getItemById(id: string) {
    if (!(id in this.items)) return;

    return this.items[id];
  }
}
