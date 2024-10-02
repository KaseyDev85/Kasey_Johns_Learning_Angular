export interface Vehicles {
    [x: string]: any;
    id: number;
    year: string;
    make: string;
    model: string;
    price?: number;
    owned?: boolean
}
