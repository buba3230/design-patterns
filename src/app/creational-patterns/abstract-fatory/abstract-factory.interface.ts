export interface AbstractItem {
    getHeadsetType(): string;
    getMaterial(): string;
    getColor(): string;
    getPrice(): number;
}

export interface HeadsetInterface {
    table: AbstractItem | null;
    chair: AbstractItem | null;
}

export interface AbstractHeadset {
    headsetType: string;
    createTable(material: string, color: string, price: number): AbstractItem;
    createChair(material: string, color: string, price: number): AbstractItem;
}