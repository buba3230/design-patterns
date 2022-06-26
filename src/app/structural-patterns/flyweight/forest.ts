import { Tree, TreeAllInfo } from "./tree";
import { TreeFactory, TreeFactoryInterface } from "./treeFactory";

export class Forest {
    forest: Tree[] = [];
    treeFactory: TreeFactory;
    constructor(factoriesTree: TreeFactoryInterface[]) {
        this.treeFactory = new TreeFactory(factoriesTree);
    }

    plantTree(x: number, y: number, name: string, color: string, texture: string): void {
        const factoriesTree = this.treeFactory.getTreeType(name, color, texture);
        this.forest.push(new Tree(x, y, factoriesTree));
    }

    grabAllForest(): TreeAllInfo[] {
        const allTrees: TreeAllInfo[] = [];
        this.forest.forEach(tree => {
            allTrees.push(tree.getTree());
        });

        return allTrees;
    }


}