export enum ItemType {
  LASER = "laser",
  SCREWDRIVER = "screwdriver",
}

export interface Item {
  id: string;
  name: string;
  type: ItemType;
}
