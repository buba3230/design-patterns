import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Forest } from './forest';
import { TreeAllInfo } from './tree';

@Component({
    selector: 'app-forest',
    template:
        `
            <h4>We want to plant some trees:</h4>
            <p>forest.plantTree(5, 10, 'tree 1', 'color 1', 'texture 1')
            <br>forest.plantTree(10, 10, 'tree 1', 'color 1', 'texture 1')
            <br>forest.plantTree(10, 15, 'tree 2', 'color 2', 'texture 2')
            <br>forest.plantTree(15, 15, 'tree 3', 'color 3', 'texture 3')
            <br>forest.plantTree(15, 20, 'tree 3', 'color 3', 'texture 3')
            <br>forest.plantTree(20, 20, 'tree 4', 'color 4', 'texture 4')
            <br>forest.plantTree(20, 25, 'tree 4', 'color 4', 'texture 4')
            <br>forest.plantTree(25, 25, 'tree 5', 'color 5', 'texture 5')
            <br>forest.plantTree(25, 30, 'tree 5', 'color 5', 'texture 5')</p>
            <h4>Now in our forest are trees by coordinates:</h4>
            <div *ngFor="let tree of allTreesInTheForest">
                x: {{tree.x}} / y: {{tree.y}} / name: {{tree.name}} / color: {{tree.color}} / texture: {{tree.texture}} 
            </div>
        `,
    styleUrls: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForestComponent implements OnInit {
    forest: Forest;
    allTreesInTheForest: TreeAllInfo[];
    constructor() {
        const factoriesTree = [{
            name: 'tree 1',
            color: 'color 1',
            texture: 'texture 1'
        },
        {
            name: 'tree 2',
            color: 'color 2',
            texture: 'texture 2'
        }];
        this.forest = new Forest(factoriesTree);
    }

    ngOnInit(): void {
        this.plantTrees();
    }

    plantTrees(): void {
        this.forest.plantTree(5, 10, 'tree 1', 'color 1', 'texture 1');
        this.forest.plantTree(10, 10, 'tree 1', 'color 1', 'texture 1');
        this.forest.plantTree(10, 15, 'tree 2', 'color 2', 'texture 2');
        this.forest.plantTree(15, 15, 'tree 3', 'color 3', 'texture 3');
        this.forest.plantTree(15, 20, 'tree 3', 'color 3', 'texture 3');
        this.forest.plantTree(20, 20, 'tree 4', 'color 4', 'texture 4');
        this.forest.plantTree(20, 25, 'tree 4', 'color 4', 'texture 4');
        this.forest.plantTree(25, 25, 'tree 5', 'color 5', 'texture 5');
        this.forest.plantTree(25, 30, 'tree 5', 'color 5', 'texture 5');

        this.allTreesInTheForest = this.forest.grabAllForest();
    }

}
