export declare type Node<T> = {
    id: string;
    data: T;
    children?: Array<Node<T>>;
};
export declare type Cursor = number[];
export declare function createNode<T>(data: T, children?: Array<Node<T>>): Node<T>;
export declare function setNodeWithCursor<T>(tree: Node<T>, node: Node<T>, cursor: Cursor): Node<T>;
export declare function appendNodeWithCursor<T>(tree: Node<T>, node: Node<T>, cursor: Cursor): Node<T>;
export declare function walkWithMutation<T>(tree: Node<T>, visit: (node: Node<T>, parent: Node<T> | null, cursor: Array<number>) => void, parent?: Node<T> | null, cursor?: Array<number>): Node<T>;
export declare function findParentId<T>(tree: Node<T>, targetId: string, parentId?: string | null): string | null;
export declare function appendNodeBefore<T>(tree: Node<T>, newNode: Node<T>, targetId: string): Node<T>;
export declare function removeNodeFromTree<T>(tree: Node<T>, targetId: string): Node<T>;
export declare function moveNode<T>(tree: Node<T>, targetId: string, newParentId: string, newIndex?: number | null): Node<T>;
export declare function appendNodeAfter<T>(tree: Node<T>, newNode: Node<T>, targetId: string): Node<T>;
export declare function replaceNodeById<T>(tree: Node<T>, newNode: Node<T>, targetId: string): Node<T>;
export declare function getCursor<T>(tree: Node<T>, targetId: string, cursor?: Cursor): Cursor | null;
export declare function swapNodes<T>(tree: Node<T>, aid: string, bid: string): Node<T>;
