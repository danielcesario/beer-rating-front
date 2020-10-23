import { LinkItem } from "./Links";

export interface Beer {
    id: number | null;
    name: string;
    type: string;
    imageUrl: string;
    alcoholVolume: string;
    description: string;
    country: string;
    _links?: BeerLink;
}

export interface BeerLink {
    self: LinkItem;
    beer: LinkItem;
    ratings: LinkItem;
}