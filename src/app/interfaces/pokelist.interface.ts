export interface PokemonList {
    count: number;
    previous: string;
    next: string;
    results: PokemonURL[];
}
export interface PokemonURL {
    url: string;
    name: string;
}
