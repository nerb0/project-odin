export default class TreeNode{
	left: TreeNode | null;
	right: TreeNode | null;
	data: number
	constructor(value: number, left: TreeNode | null = null, right: TreeNode | null = null) {
		this.data = value;
		this.left = left;
		this.right = right;
	}
}
