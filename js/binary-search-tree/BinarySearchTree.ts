import TreeNode from "./TreeNode";

export default class BinarySearchTree {
  root: TreeNode | null;

  constructor(arr: number[]) {
    this.root = BinarySearchTree.buildTree(arr);
  }

  prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      this.prettyPrint(
        node.right,
        `${prefix}${isLeft ? "│   " : "    "}`,
        false
      );
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
  }

  insert(value: number, root = this.root) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return this.root;
    }

    if (!root) return new TreeNode(value);
    else if (value < root.data) root.left = this.insert(value, root.left);
    else if (value > root.data) root.right = this.insert(value, root.right);

    return root;
  }

  delete(value: number, root = this.root): TreeNode | null {
    if (!root) return root;

    if (value < root.data) {
      root.left = this.delete(value, root.left);
      return root;
    } else if (value > root.data) {
      root.right = this.delete(value, root.right);
      return root;
    }

    if (!root.left) return root.right;
    else if (!root.right) return root.left;
    else {
      let successor = root.right;
      let successorParent = root;
      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      if (successorParent !== root) successorParent.left = successor.right;
      else successor.left = root.left;

      root.data = successor.data;
      return root;
    }
  }

  find(value: number, root = this.root): TreeNode | null {
    if (!root) return root;
    if (value < root.data) return this.find(value, root.left);
    else if (value > root.data) return this.find(value, root.right);
    else return root;
  }

  levelOrder(
    root = this.root,
    callback = BinarySearchTree.levelOrderTraversal
  ) {
    if (!root) return [];
    const queue = [root];
    const result: number[] = [];
    while (queue.length) {
      queue.push(...callback(queue[0]));
      // @ts-ignore
      result.push(queue.shift().data);
    }
    return result;
  }

  preOrder(
    callback: Function | null = null,
    root = this.root,
    result: number[] = []
  ) {
    if (!root) return [];
    callback ? callback(root) : result.push(root.data);
    if (root.left) this.preOrder(callback, root.left, result);
    if (root.right) this.preOrder(callback, root.right, result);
    return result;
  }

  inOrder(
    callback: Function | null = null,
    root = this.root,
    result: number[] = []
  ) {
    if (!root) return [];
    if (root.left) this.inOrder(callback, root.left, result);
    callback ? callback(root) : result.push(root.data);
    if (root.right) this.inOrder(callback, root.right, result);
    return result;
  }

  postOrder(
    callback: Function | null = null,
    root = this.root,
    result: number[] = []
  ) {
    if (!root) return [];
    if (root.left) this.postOrder(callback, root.left, result);
    if (root.right) this.postOrder(callback, root.right, result);
    callback ? callback(root) : result.push(root.data);
    return result;
  }

  height(node: TreeNode | null = this.root, currentHeight = 0): number {
    if (!node) return currentHeight;
    const leftHeight = this.height(node.left, currentHeight + 1);
    const rightHeight = this.height(node.right, currentHeight + 1);
    return Math.max(leftHeight, rightHeight);
  }

  depth(
    targetNode: TreeNode,
    root: TreeNode | null = this.root,
    currentDepth = 0
  ): number {
    if (!root) return 0;
    if (targetNode.data > root.data)
      return this.depth(targetNode, root.right, currentDepth + 1);
    else if (targetNode.data < root.data)
      return this.depth(targetNode, root.left, currentDepth + 1);
    else return currentDepth;
  }

  isBalanced(node: TreeNode | null = this.root): boolean {
    if (!node) return true;
    else if (Math.abs(this.height(node.left) - this.height(node.right)) > 1)
      return false;
    else return this.isBalanced(node.left) && this.isBalanced(node.right);
  }

  rebalance(root: TreeNode | null = this.root) {
    if (this.isBalanced(root)) return root;
    const arr = this.levelOrder(root);
    arr.sort((a, b) => a - b);
    this.root = BinarySearchTree.buildTree(arr);
    return this.root;
  }

  levelOrderRecursive(
    callback = BinarySearchTree.levelOrderTraversal,
    root = this.root,
    result: TreeNode[] = []
  ) {}

  static levelOrderTraversal(root: TreeNode, res: TreeNode[] = []) {
    if (!root) return res;
    if (root.left) res.push(root.left);
    if (root.right) res.push(root.right);
    return res;
  }

  static cleanArray(arr: number[]) {
    return [...new Set(arr)].sort((a, b) => a - b);
  }

  static buildTree(
    arr: number[],
    start: number = 0,
    end: number = arr.length - 1,
    isSorted: boolean = false
  ) {
    if (arr.length == 0) return null;
    if (!isSorted) {
      arr = this.cleanArray(arr);
      start = 0;
      end = arr.length - 1;
    }
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const root: TreeNode = new TreeNode(arr[mid]);
    root.left = this.buildTree(arr, start, mid - 1, true);
    root.right = this.buildTree(arr, mid + 1, end, true);
    return root;
  }
}
