import { LinkItem } from "./Links";

export interface Rating {
    id: number;
    rate: number;
    name: string;
    message: string;    
    _links: RatingLink;
}

export interface RatingLink {
    self: LinkItem;
    rating: LinkItem;
    beer: LinkItem;
}