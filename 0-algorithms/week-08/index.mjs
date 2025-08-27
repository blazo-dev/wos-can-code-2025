import { BinarySearchTree } from "./bst.mjs";

export const seed = [8, 3, 10, 1, 6, 14, 4, 7, 13];

const bst = new BinarySearchTree();
seed.forEach((v) => bst.insert(v));

bst.prettyPrint();
console.log({ nodeExist: bst.contains(10) });
console.table({ min: bst.min() });
console.table({ max: bst.max() });

console.table({ inOrder: bst.inOrder() });
console.table({ preOrder: bst.preOrder() });
console.table({ postOrder: bst.postOrder() });
console.table({ postOrder: bst.postOrder() });
console.table({ height: bst.height() });
console.table({ isValidBST: bst.isValidBST() });

