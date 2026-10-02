/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */

class Solution {
    /**
     * @param {NestedInteger[]} nestedList
     * @return {number}

     */
    depthSumInverse(nestedList) {
        const getMaxDepth = (li,depth) => {
            let maxDepth = depth;
            for (const item of li) {
                if (!item.isInteger()) {
                    maxDepth = Math.max(maxDepth, getMaxDepth(item.getList(),depth + 1))
                }
            }
            return maxDepth;
        };

        const maxDepth = getMaxDepth(nestedList,1); 

        const dfs = (li,depth) => {
            let res = 0;
            for (const item of li) {
                if (item.isInteger()) {
                    res += ((maxDepth - depth + 1) * item.getInteger())
                } else {
                    res += dfs(item.getList(), depth + 1);
                }
            };

            return res;
        };

        return dfs(nestedList, 1);
       
    }
}
