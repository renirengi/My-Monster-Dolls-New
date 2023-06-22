export interface IShopItem {
  id: number;
  name: string[];
  description: string;
  photos: string[];//возможно тут будет другой интерфейс. ему не нужна таблица
  gender?: string;
  modelNumber?: string[];
  series?: string[];
  type: TType;
  year: number[];
  itemId: number[];
  userId: number;
  condition: TCondition,
  price: number
}

export type TCondition = 'NRFB' | 'open box' | 'used' | 'only adult collector' | 'after child';
export type TType = 'budget doll' | 'doll' | 'multipack' | 'playset' | 'set'| 'clothes or accessories'| 'body parts';
