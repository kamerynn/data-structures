/*** FUNCTIONAL ***/

var FunctionalQueue = function(){
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

var FunctionalStack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function(){
    var size = someInstance.size();
    var popped = storage[size - 1];
    delete storage[size - 1];
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

/*** FUNCTIONAL SHARED ***/

var FunctionalSharedQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, functionalSharedQueueMethods);
  return someInstance;
};

var functionalSharedQueueMethods = {}; // this would refer to someInstance

functionalSharedQueueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
};

functionalSharedQueueMethods.dequeue = function() {
  var dequeued = this.storage[0];
  for (var i = 1; i < this.size(); i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[this.size() - 1];
  return dequeued;
};

functionalSharedQueueMethods.size = function() {
  var counter = 0;
  _.each(this.storage, function() {
    counter++;
  });
  return counter;
};


var FunctionalSharedStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, functionalSharedStackMethods);
  return someInstance;
};

// push, pop, size
var functionalSharedStackMethods = {};

functionalSharedStackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

functionalSharedStackMethods.pop = function() {
  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
};

functionalSharedStackMethods.size = function() {
  var counter = 0;
  _.each(this.storage, function() {
    counter++;
  });
  return counter;
};


/*** PROTOTYPAL ***/

var PrototypalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(prototypalQueueMethods);
  someInstance.storage = {};
  return someInstance;
};

var prototypalQueueMethods = {};

prototypalQueueMethods.enqueue = function(value) {
  this.storage[this.size()] = value;
};

prototypalQueueMethods.dequeue = function() {
  var dequeued = this.storage[0];
  for (var i = 1; i < this.size(); i++) {
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[this.size() - 1];
  return dequeued;
};

prototypalQueueMethods.size = function() {
  var counter = 0;
  _.each(this.storage, function() {
    counter++;
  });
  return counter;
};

var PrototypalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(prototypalStackMethods);
  someInstance.storage = {};
  return someInstance;
};

var prototypalStackMethods = {};

prototypalStackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

prototypalStackMethods.pop = function() {
  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
};

prototypalStackMethods.size = function() {
  var counter = 0;
  _.each(this.storage, function() {
    counter++;
  });
  return counter;
};


/*** PSEUDOCLASSICAL ***/

var PseudoclassicalQueue = function() { this.storage = {}; };

PseudoclassicalQueue.prototype.enqueue = function(value) {
  this.storage[this.size()] = value;
};

PseudoclassicalQueue.prototype.dequeue = function() {
  var dequeued = this.storage[0];
  for(var i = 1; i < this.size(); i++){
    this.storage[i - 1] = this.storage[i];
  }
  delete this.storage[this.size() - 1];
  return dequeued;
};

PseudoclassicalQueue.prototype.size = function() {
  var counter = 0;
  _.each(this.storage, function() {
    counter++;
  });
  return counter;
};

var PseudoclassicalStack = function() { this.storage = {}; };

PseudoclassicalStack.prototype.push = function(value) {
  this.storage[this.size()] = value;
};

PseudoclassicalStack.prototype.pop = function() {
  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
};

PseudoclassicalStack.prototype.size = function() {
  var counter = 0;
  _.each(this.storage, function() {
    counter++;
  });
  return counter;
};