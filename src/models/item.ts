// src/models/item.ts
export interface Item {
  id: number;
  title: string;
  imageUrl: string;
  currentBid: number;
  timeRemaining: string;
  instantBuyPrice: number;
}
