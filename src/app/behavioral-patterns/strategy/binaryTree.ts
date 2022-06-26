interface NodeInterface<U> {
    value: U
    left: NodeInterface<U> | null
    right: NodeInterface<U> | null
}

export default class BinaryTree<U> {

    private root: NodeInterface<U> | undefined

    createNewNode = (value: U): NodeInterface<U> => {
        return {
            value,
            left: null,
            right: null,
        }
    }

    insert = (value: U) => {
        const currentNode = this.createNewNode(value)
        if (!this.root) {
            this.root = currentNode
        } else {
            this.insertIntoCurrentNode(currentNode)
        }
        return this
    }

    private insertIntoCurrentNode = (currentNode: NodeInterface<U>) => {
        const { value } = currentNode
        const traverse = (node: NodeInterface<U>) => {
            if (value > node.value) {
                if (!node.right) {
                    node.right = currentNode
                } else traverse(node.right)
            } else if (value < node.value) {
                if (!node.left) {
                    node.left = currentNode
                } else traverse(node.left)
            }
        }
        traverse(this.root as NodeInterface<U>)
    }

    inOrder = () => {
        let result: U[]
        // eslint-disable-next-line prefer-const
        result = []
        const traverse = (node: NodeInterface<U>) => {
            node.left && traverse(node.left)
            result.push(node.value)
            node.right && traverse(node.right)
        }
        const rootNode: NodeInterface<U> | undefined = this.root as NodeInterface<U>
        traverse(rootNode)
        return result
    }

    postOrder = () => {
        let result: U[]
        // eslint-disable-next-line prefer-const
        result = []
        const traverse = (node: NodeInterface<U>) => {
            node.left && traverse(node.left)
            node.right && traverse(node.right)
            result.push(node.value)
        }
        const rootNode: NodeInterface<U> | undefined = this.root as NodeInterface<U>
        traverse(rootNode)
        return result
    }

    preOrder = () => {
        let result: U[]
        // eslint-disable-next-line prefer-const
        result = []
        const traverse = (node: NodeInterface<U>) => {
            result.push(node.value)
            node.left && traverse(node.left)
            node.right && traverse(node.right)
        }
        const rootNode: NodeInterface<U> | undefined = this.root as NodeInterface<U>
        traverse(rootNode)
        return result
    }
}
