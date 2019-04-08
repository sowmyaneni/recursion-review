// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // check for primitives
  // if typeof is number, boolean, undefined or if obj is null
  if (typeof(obj) === 'number' || typeof(obj) === 'boolean' || obj === null) {
    return '' + obj;
    // return stringified version
  }
  // if string, return '"' + obj + '"';
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  }

  if (typeof(obj) === 'object') {
    var results = [];
    // if arrays
    // iterate through array
    if (Array.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        results.push(stringifyJSON(obj[i]));
      }
      return '[' + results.join(',') + ']';
    } else {
      // if object,iterate through object
      // check if object[key] is undefined or typeof object[key] === function
      // continue
      // else push stringified result into results array
      // return result
      for (var key in obj) {
        if (obj[key] === undefined || typeof obj[key] === 'function') {
          continue;
        } else {
          results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      }
      return '{' + results.join(',') + '}';    

    }
  } 
};
