import { LinkItem } from "./Links";

export interface Beer {
    id: number;
    name: string;
    type: string;
    imageUrl: string;
    alcoholVolume: string;
    description: string;
    country: string;
    _links: BeerLink;
}

export interface BeerLink {
    self: LinkItem;
    beer: LinkItem;
    ratings: LinkItem;
}