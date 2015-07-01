var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function(){
    var popped = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return popped;
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
