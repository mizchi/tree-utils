export declare type Node<T> = {
    id: string;
    data: T;
    children: Array<Node<T>>;
};
export declare type InvertedTree<T> = {
    childrenMap: {
        [id: string]: string[];
    };
    parentMap: {
        [id: string]: null | string;
    };
    dataMap: {
        [id: string]: T;
    };
};
export declare type NodeRef = {
    id: string;
    childrenIds: string[];
};
export declare function toInvertedTree<T>(root: Node<T>): InvertedTree<T>;
export declare function toNode<T>(inv: InvertedTree<T>): Node<T>;
export declare function removeNode<T>(inv: InvertedTree<T>, targetId: string): InvertedTree<T>;
export declare function appendNode<T>(inv: InvertedTree<T>, newNode: Node<T>, appendingParentId: string, newIndex?: number | null): InvertedTree<T>;
export declare function moveNode<T>(inv: InvertedTree<T>, movingId: string, toParentId: string, index?: number | null): InvertedTree<T>;
export declare function setData<T>(inv: InvertedTree<T>, nodeId: string, data: T): InvertedTree<T>;
export declare function getData<T>(inv: InvertedTree<T>, nodeId: string): T;
export declare function swapNodesInSiblings<T>(inv: InvertedTree<T>, parentId: string, aid: string, bid: string): InvertedTree<T>;
