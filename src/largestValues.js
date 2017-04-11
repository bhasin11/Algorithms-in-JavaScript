/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
     
    /*
     * The approach is to add first occurance of element
     * in a row in a new index of the resulting string.
     * And then, keep comparing if we find any other value
     * in the same row.
     */
    
    var result = [];
    
    helper(root, result, 0);
    return result;
};

function helper(root, result, depth){
    if(root === null) return;
    
    if(depth == result.length) result.push(root.val);
    
    else result[depth] = result[depth] > root.val ? result[depth] : root.val;

    helper(root.left, result, depth + 1);
    helper(root.right, result, depth + 1);
}

/*

var largestValues = function(root) {
    var result = [];
    if(root === null) return result;
    
    var left = 0, size = 0;
    var queue = [];
    queue.push(root);
    
    while(queue.length !== 0){
        left = queue[0].val;
        size = queue.length;
        
        while(size > 0){
            size--;
            if(queue[0].left !== null) queue.push(queue[0].left);
            if(queue[0].right !== null) queue.push(queue[0].right);
            left = left > queue[0].val ? left : queue[0].val;
            queue.shift();
        }
        result.push(left);
    }
    return result;
};

*/