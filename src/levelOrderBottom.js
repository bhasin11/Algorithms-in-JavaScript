/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    /*
     * The approach is to do a level order traversal from top-to-bottom.
     * So, we will start from the top most layer and add the 'root' to 
     * a queue. We have to store the current size of queue into a variable
     * and only need to traverse a loop equal to this size, as the number  
     * of nodes of current level will be equal to this value. In each
     * iteration, we will add the value of peak of queu to a temporary
     * array list, and also we have to add non-null children of each node
     * to queue, so that we can move to the next level later. Once we have
     * completed all iterations for current level, we can add our temporary
     * list to our result array list, which is list of lists. We continue,
     * above steps until the size of queue become 0.
     */
    
    var result = [], queue = [];
    if(root === null) return result;
    queue.push(root);

    while(queue.length !== 0){
        var size = queue.length;
        var inner = [];
        
        while(size > 0){
            size--;
            inner.push(queue[0].val);
            if(queue[0].left !== null) queue.push(queue[0].left);
            if(queue[0].right !== null) queue.push(queue[0].right);
            queue.shift();
        }
        result.unshift(inner);
    }
    return result;
};