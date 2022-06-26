import { TreeTypeFlyweight } from "./treeFlyweight";

export interface TreeFactoryInterface {
    name: string;
    color: string;
    texture: string;
}

export class TreeFactory {
    private treeTypes: TreeTypeFlyweight[] = [];

    constructor(treesFactory: TreeFactoryInterface[]) {
        treesFactory.forEach(tree => {
            this.treeTypes.push(new TreeTypeFlyweight(tree.name, tree.color, tree.texture));
        });

    }

    getTreeType(name: string, color: string, texture: string): TreeTypeFlyweight {
        const tree = this.treeTypes.find(el => el.name === name && el.color === color && el.texture === texture);
        if (tree) {
            return tree;
        }
        const newTree = new TreeTypeFlyweight(name, color, texture);
        this.treeTypes.push(newTree);
        return newTree;
    }
}