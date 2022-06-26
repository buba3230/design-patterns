import { TreeTypeFlyweight } from "./treeFlyweight";

export interface TreeAllInfo {
    x: number;
    y: number;
    name: string;
    color: string;
    texture: string;
}

export class Tree {
    x: number;
    y: number;
    treeType: TreeTypeFlyweight;

    constructor(x: number, y: number, treeType: TreeTypeFlyweight) {
        this.x = x;
        this.y = y;
        this.treeType = treeType;
    }

    getTree(): TreeAllInfo {
        return {
            x: this.x,
            y: this.y,
            name: this.treeType.name,
            color: this.treeType.color,
            texture: this.treeType.texture
        }
    }
}