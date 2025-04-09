export type KnownCharacter = {
  id: number;
  name: string;
  age: number;
  player: boolean;
  location: string;
  relationship: string;
  description: string;
};

export type ImportantItem = {
  id: number;
  title: string;
  quantity: number;
  location: string;
  playerOwner: string;
  description: string;
}