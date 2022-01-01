import { BlockType } from "./block";
import { Scene } from "./scene";

export class SceneLoader {
  public static scene: Scene;

  public static async load(name: string): Promise<Scene> {
    const res = await fetch(`/assets/scenes/${name}.json`);
    const scene = await res.json();

    this.setScene(scene);
    return scene;
  }

  private static setScene(scene: Scene) {
    this.scene = scene;
  }
}

export class BlockLoader {
  public static getModel(type: BlockType) {
    return `/assets/textures/environment/${type}.glb`;
  }
}
