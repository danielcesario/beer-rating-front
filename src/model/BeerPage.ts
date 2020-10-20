import { PageSummary } from './PageSummary';
import { Beer } from './Beer';

export interface BeerPage {
    page?: PageSummary;
    _embedded?: PageEmbeddedBeer;
}

export interface PageEmbeddedBeer {
    beers: Beer[]
}