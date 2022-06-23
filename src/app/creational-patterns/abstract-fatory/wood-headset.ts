import { AbstractHeadset, AbstractItem } from "./abstract-factory.interface";

class Table implements AbstractItem {
    private headsetType: string;
    private tableMaterial: string;
    private tableColor: string;
    private tablePrice: number;
    constructor(
        type: string, material: string, color: string, price: number
    ) {

        this.headsetType = type;
        this.tableMaterial = material;
        this.tableColor = color;
        this.tablePrice = price;

        console.log(this.headsetType);
    }
    getHeadsetType(): string {
        return this.headsetType;
    }

    getMaterial(): string {
        return this.tableMaterial;
    }

    getColor(): string {
        return this.tableColor;
    }

    getPrice(): number {
        return this.tablePrice;
    }
}

class Chair implements AbstractItem {
    private headsetType: string;
    private chairMaterial: string;
    private chairColor: string;
    private chairPrice: number;
    constructor(type: string, material: string, color: string, price: number) {
        this.headsetType = type;
        this.chairMaterial = material;
        this.chairColor = color;
        this.chairPrice = price;
    }

    getHeadsetType(): string {
        return this.headsetType;
    }

    getMaterial(): string {
        return this.chairMaterial;
    }

    getColor(): string {
        return this.chairColor;
    }

    getPrice(): number {
        return this.chairPrice;
    }
}

export class WoodHeadset implements AbstractHeadset {
    headsetType: string;

    constructor(type: string) {
        this.headsetType = type;
    }

    createTable(material: string, color: string, price: number): AbstractItem {
        console.log(this.headsetType);
        return new Table(this.headsetType, material, color, price)
    }

    createChair(material: string, color: string, price: number): AbstractItem {
        return new Chair(this.headsetType, material, color, price)
    }
}