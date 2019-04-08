// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  node = node || document.body;
  var results = [];
  // your code here
  // Check each node to see if it has the className
  if (node.classList.contains(className)) {
    //If the node has the className, then push it into a results array
    results.push(node);
  }
    //If the node has children, check to see if it contains className recursively
  for (var i = 0; i < node.children.length; i++) {
    results = results.concat(getElementsByClassName(className, node.children[i]));
  }
  return results;
};
