class Node {
  constructor(total,L,R) {
    this.sum = total;
    this.left = null;
    this.right = null;
    this.L = L;
    this.R = R;
  }
}


class SegmentTree {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
      this.root = this.build(nums, 0, nums.length - 1)
    }

    build(nums,L,R) {
      if (L === R) {
        return new Node(nums[L],L,R);
      }

      const M = Math.floor(L + (R - L) / 2);
      const root = new Node(0,L,R);
      root.left = this.build(nums, L, M)
      root.right = this.build(nums, M + 1, R);
      root.sum = root.left.sum + root.right.sum;
      return root;
    }

    /**
     * @param {number} index
     * @param {number} val
     */
    update(index, val) {
      return this.updateHelper(this.root,index,val)
    }

    updateHelper(node, index, val) {
      if (node.L === node.R) {
        node.sum = val
        return 
      }

      const M = Math.floor(node.L + (node.R - node.L) / 2)
      if (index > M) {
        this.updateHelper(node.right,index,val)
      } else {
        this.updateHelper(node.left,index,val)
      }
      node.sum = node.left.sum + node.right.sum;
    }

    /**
     * @param {number} L
     * @param {number} R
     * @returns {number}
     */
    query(L, R) {
      return this.queryHelper(this.root, L, R)
    }


    queryHelper(root,L,R) {
      if (L <= root.L && root.R <= R) return root.sum;
      if (R < root.L || L > root.R) return 0;

      return (
        this.queryHelper(root.left,L,R) +
        this.queryHelper(root.right,L,R)
      );
    }
}
