import { Component, OnInit } from '@angular/core';
import { Context, PostOrder, PreOrder } from './strategy';
import BinaryTree from './binaryTree';
import { InOrder } from './strategy';

@Component({
    selector: 'app-strategy',
    template:
        `
            <h4>Strategy:</h4>
            <p>tree = new BinaryTree()</p>
            <p>tree.insert(10).insert(20).insert(30).insert(5).insert(8).insert(3).insert(9)</p>
            <p>context = new Context(new InOrder(), tree)</p>
            <p><b>context.treeTraversal()</b> => {{inOrder}}</p>
            <br>
            <p>context = new Context(new PreOrder(), tree)</p>
            <p><b>context.treeTraversal()</b> => {{preOrder}}</p>
            <br>
            <p>context = new Context(new PostOrder(), tree)</p>
            <p><b>context.treeTraversal()</b> => {{postOrder}}</p>
        `,
    styleUrls: []
})
export class StrategyComponent implements OnInit {
    tree: BinaryTree<number>;
    context: Context;
    inOrder: string;
    preOrder: string;
    postOrder: string;
    constructor() {
        this.tree = new BinaryTree();
        this.tree.insert(10).insert(20).insert(30).insert(5).insert(8).insert(3).insert(9)
        this.context = new Context(new InOrder(), this.tree);
        this.inOrder = this.context.treeTraversal().join(', ');
        this.context = new Context(new PreOrder(), this.tree);
        this.preOrder = this.context.treeTraversal().join(', ');
        this.context = new Context(new PostOrder(), this.tree);
        this.postOrder = this.context.treeTraversal().join(', ');
    }

    ngOnInit(): void {

    }
}
