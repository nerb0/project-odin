import BinarySearchTree from "./BinarySearchTree";
import TreeNode from "./TreeNode";

const arr = Array.from({ length: 50 }, (_) => Math.floor(Math.random() * 100));
console.log(arr);
const tree = new BinarySearchTree(arr);
console.log(tree.isBalanced());
console.log("Level Order: ", tree.levelOrder());
console.log("Pre Order: ", tree.preOrder());
console.log("In Order: ", tree.inOrder());
console.log("Post Order: ", tree.postOrder());

for (let i = 0; i < 15; i++) {
  tree.insert(Math.floor(Math.random() * 900) + 100);
}
console.log(tree.isBalanced());
tree.rebalance();
console.log(tree.isBalanced());
console.log("Level Order: ", tree.levelOrder());
console.log("Pre Order: ", tree.preOrder());
console.log("In Order: ", tree.inOrder());
console.log("Post Order: ", tree.postOrder());
