/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(root === null) return 0;
        
    var temp = null, queue = [];
    queue.push(root);
    
    while(queue.length !== 0){
        temp = queue[0];
        queue.shift();
        if(temp.right !== null)    queue.push(temp.right);
        if(temp.left !== null)     queue.push(temp.left);
    }
    return temp.val;
};

/*

var findBottomLeftValue = function(root) {
    if(root === null) return 0;
    
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
            queue.shift();
        }
    }
    return left;
};

*/

