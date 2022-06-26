import BinaryTree from "./binaryTree";

interface Strategy {
    traversal(tree: BinaryTree<number>): number[];
}

export class Context {
    private strategy: Strategy;
    private tree: BinaryTree<number>;

    constructor(strategy: Strategy, tree: BinaryTree<number>) {
        this.strategy = strategy;
        this.tree = tree;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public treeTraversal(): number[] {
        return this.strategy.traversal(this.tree);
    }
}

export class InOrder implements Strategy {
    public traversal(tree: BinaryTree<number>): number[] {
        return tree.inOrder();
    }
}

export class PostOrder implements Strategy {
    public traversal(tree: BinaryTree<number>): number[] {
        return tree.postOrder();
    }
}

export class PreOrder implements Strategy {
    public traversal(tree: BinaryTree<number>): number[] {
        return tree.preOrder();
    }
}