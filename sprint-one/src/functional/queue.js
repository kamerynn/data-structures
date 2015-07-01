var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  // Add the size-th element
  someInstance.enqueue = function(value){
    storage[someInstance.size()] = value;
  };

  // Return the 0th element
  someInstance.dequeue = function(){
    var removed = storage[0];

    for (var i = 1; i < someInstance.size(); i++) {
      storage[i - 1] = storage[i];
    }
    
    delete storage[someInstance.size() - 1];
    return removed;
  };  

  someInstance.size = function(){
    var counter = 0;
    _.each(storage, function() {
      counter++;
    });
    return counter;
  };

  return someInstance;
};