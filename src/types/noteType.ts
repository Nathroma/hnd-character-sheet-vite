export type KnownCharacter = {
  name: string;
  age: number;
  player: boolean;
  location: string;
  relationship: string;
  description: string;
};

export type ImportantItem = {
    title: string;
    quantity: number;
    location: string;
    playerOwner: string;
    description: string;
}