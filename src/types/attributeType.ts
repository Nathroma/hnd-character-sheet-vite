export enum AttributesType {
  hp = 'healthPoint',
  ac = 'armorClass',
}

export type ArmorClass = {
  total: number;
  flat: number;
  armorBonus: number;
};

export type HealthPoint = {
  current: number;
  max: number;
  temp: number;
};

export const newDefaultHp = (): HealthPoint => ({
  current: 0,
  max: 0,
  temp: 0,
});

export const newDefaultAc = (): ArmorClass => ({
  total: 0,
  flat: 0,
  armorBonus: 0,
});
