export interface Link {
    first: LinkItem;
    self: LinkItem;
    next: LinkItem;
    last: LinkItem;
    profile: LinkItem;    
}

export interface LinkItem {
    href: string;
}