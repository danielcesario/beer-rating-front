import { Rating } from './Rating';

export interface RatingPage {
    _embedded?: PageEmbeddedRating;
}

export interface PageEmbeddedRating {
    ratings: Rating[]
}