var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

// push, pop, size
var stackMethods = {};

stackMethods.push = function(value) {
	this.storage[this.size()] = value;
}

stackMethods.pop = function() {
	var popped = this.storage[this.size() - 1];
	delete this.storage[this.size() - 1];
	return popped;
}

stackMethods.size = function() {
	var counter = 0;
	_.each(this.storage, function() {
		counter++;
	});
	return counter;
}

