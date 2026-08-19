class SegmentTreeNode {
  constructor(total, L, R) {
    this.sum = total;
    this.left = null;
    this.right = null;
    this.L = L;
    this.R = R;
  }

  static build(nums, L, R) {
    if (L === R) return new SegmentTreeNode(nums[L], L, R);

    const M = Math.floor(L + (R - L) / 2);
    const root = new SegmentTreeNode(0, L, R);
    root.left = SegmentTreeNode.build(nums, L, M);
    root.right = SegmentTreeNode.build(nums, M + 1, R);
    root.sum = root.left.sum + root.right.sum;
    return root;
  }

  update(index, val) {
    if (this.L === this.R) {
      this.sum = val;
      return;
    }
    const M = Math.floor(this.L + (this.R - this.L) / 2);
    if (index > M) {
      this.right.update(index, val);
    } else {
      this.left.update(index, val);
    }
    this.sum = this.left.sum + this.right.sum;
  }

  query(L, R) {
    if (L === this.L && R === this.R) {
      return this.sum;
    }
    const M = Math.floor(this.L + (this.R - this.L) / 2);
    if (L > M) {
      return this.right.query(L, R);
    } else if (R <= M) {
      return this.left.query(L, R);
    } else {
      return this.left.query(L, M) + this.right.query(M + 1, R);
    }
  }
}

class SegmentTree {
  /**
   * @param {number[]} nums
   */
  constructor(nums) {
    this.root = SegmentTreeNode.build(nums, 0, nums.length - 1);
  }

  /**
   * @param {number} index
   * @param {number} val
   */
  update(index, val) {
    this.root.update(index, val);
  }

  /**
   * @param {number} L
   * @param {number} R
   * @returns {number}
   */
  query(L, R) {
    return this.root.query(L, R);
  }
}
