export interface Anime {
  id: number;
  genre: string;
  ImgLink: string;
  Title: string;
  Year: string;
}

export interface Figures {
  Anime: number;
  Descruotuib?: string | null;
  FigureName: string;
  FigureType: number;
  Price: string;
  Rarity?: string | null;
  Rating?: string | null;
  character: string;
  id: number;
  imgLink: string;
  manufacturer: string;
  material: string;
  size: string;
}