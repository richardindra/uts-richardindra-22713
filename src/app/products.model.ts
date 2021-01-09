export interface Product {
    id: number;
    type: string;
    imageUrl: string;
    brand: string;
    model: string;
    price: number;
    stock: number;
}

export interface CPU extends Product {
    baseClock: number;
    boostClock: number;
    core: number;
    thread: number;
}

export interface RAM extends Product {
    speed: number;
    size: number;
}

export interface Motherboard extends Product {
    chipset: string;
    target: string;
}

export interface GPU extends Product {
}